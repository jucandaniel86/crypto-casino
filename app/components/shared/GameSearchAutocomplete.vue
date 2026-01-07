<script setup lang="ts">
import { useAPIFetch } from '~/composables/useApiFetch'

type AutocompleteItem = Record<string, any>

const props = withDefaults(
  defineProps<{
    modelValue?: any
    label?: string
    placeholder?: string
    itemTitle?: string
    itemValue?: string
    minChars?: number
    returnObject?: boolean
    noDataText?: string
  }>(),
  {
    label: 'Search games',
    placeholder: 'Type to search',
    itemTitle: 'name',
    itemValue: 'id',
    minChars: 2,
    returnObject: false,
    noDataText: 'No results',
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

const search = ref<string>('')
const items = ref<AutocompleteItem[]>([])
const loading = ref<boolean>(false)

const selected = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

let searchTimeout: ReturnType<typeof setTimeout> | null = null

const fetchItems = async () => {
  const query = search.value.trim()

  if (query.length < props.minChars) {
    items.value = []
    return
  }

  loading.value = true
  const response = await useAPIFetch('/search/game', { search: query })
  const results = Array.isArray(response) ? response : (response?.games ?? response?.data ?? [])

  if (query === search.value.trim()) {
    items.value = results
  }

  loading.value = false
}

watch(
  () => search.value,
  () => {
    if (searchTimeout) clearTimeout(searchTimeout)
    searchTimeout = setTimeout(fetchItems, 300)
  },
)
</script>

<template>
  <v-autocomplete
    v-model="selected"
    v-model:search="search"
    :items="items"
    :loading="loading"
    :placeholder="placeholder"
    :item-title="itemTitle"
    :item-value="itemValue"
    :return-object="returnObject"
    :no-data-text="noDataText"
    clearable
    density="compact"
  />
</template>
