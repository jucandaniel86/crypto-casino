<script setup lang="ts">
import type { ContainerType } from '~/core/types/Container'

const { options } = defineProps<{ options: ContainerType }>()
const { display } = useContainerOptions(options)
const items = ref<string[]>([])
</script>
<template>
  <div v-if="display" class="d-flex w-100">
    <v-autocomplete
      :items="items"
      class="mx-auto app-search"
      menu-icon=""
      placeholder="Games, Categories, Providers"
      prepend-inner-icon="mdi-magnify"
      theme="light"
      variant="solo"
      item-props
      rounded
      hide-details
    />
  </div>
</template>
