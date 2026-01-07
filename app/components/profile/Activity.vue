<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ProfileActivityFilters, type BetTransactonType } from '~/config/Profile.config'

//composables
const { convertCurrency, convertDate, isset } = useUtils()
const { t } = useI18n()

//models
const activities = ProfileActivityFilters.map((el) => ({
  label: el.label,
  value: el.id,
}))
const filterVisible = ref<boolean>(false)
const activityType = ref(activities[0]?.value)
const filters = ref<any>({})
const results = ref<any[]>([])
const loading = ref<boolean>(false)
const page = ref<number>(1)
const length = ref<number>(15)
const total = ref<number>(0)

//computed
const currentFilters = computed(() => {
  return ProfileActivityFilters.find((el) => el.id === activityType.value)?.items
})

//methods
const fetchResults = async (): Promise<void> => {
  const currentFetchURL = ProfileActivityFilters.find((el) => el.id === activityType.value)
  if (currentFetchURL) {
    loading.value = true
    try {
      const { data, success }: any = await useAPIFetch(currentFetchURL.fetchUrl, {
        page: page.value,
        length: length.value,
        currency: isset(filters.value.currency) ? filters.value.currency : undefined,
        from: isset(filters.value.time) ? filters.value.time.from : undefined,
        to: isset(filters.value.time) ? filters.value.time.to : undefined,
        game: isset(filters.value.game) ? filters.value.game : undefined,
      })

      if (data && success) {
        results.value = data.data
        total.value = data.total
      }
    } catch (err) {
      console.warn('err', err)
    }
    loading.value = false
  }
}

const handleBetType = (transactionType: string) => {
  return String(transactionType).toLowerCase()
}

const handleAmount = (transition: BetTransactonType) => {
  let value = 0
  switch (transition.transaction_type) {
    case 'bet':
      value = transition.stake
      break
    case 'win':
      value = transition.payout
      break
    case 'refund':
      value = transition.refund
      break
  }
  return convertCurrency(value)
}

const handleFilterSearch = async () => {
  page.value = 1
  await fetchResults()
}

//watchers
watch(activityType, async () => {
  filterVisible.value = false
  results.value = []
  await fetchResults()
})

watch(page, async () => {
  await fetchResults()
})

//mounted
onMounted(() => {
  fetchResults()
})
</script>
<template>
  <div>
    <v-row>
      <v-col cols="4">
        <v-select
          v-model="activityType"
          :items="activities"
          hide-details
          density="compact"
          :item-title="'label'"
          :item-value="'value'"
        />
      </v-col>
      <v-col cols="4">
        <v-btn
          :color="filterVisible ? 'purple' : 'primary'"
          @click.prevent="filterVisible = !filterVisible"
        >
          <v-icon icon="mdi-filter" />
        </v-btn>
      </v-col>
    </v-row>

    <div v-if="filterVisible" class="filter-wrapper mt-3 mb-3">
      <v-row>
        <v-col cols="8">
          <v-row>
            <v-col
              v-for="(filter, i) in currentFilters"
              :key="`Filter${activityType}_${i}`"
              class="pb-0 pt-0"
              :cols="filter.cols"
            >
              <div v-if="filter.label" class="text-subtitle-1 text-white">
                {{ filter.label }}
              </div>
              <SharedGameSearchAutocomplete
                v-if="filter.visible && filter.type === 'AUTOCOMPLETE'"
                v-model="filters[filter.id]"
              />
              <v-select
                v-if="filter.visible && filter.type === 'SELECT'"
                v-model="filters[filter.id]"
                density="compact"
                :items="filter.values"
                :item-title="'label'"
                :item-value="'value'"
              />
              <form-datetime
                v-if="filter.visible && filter.type === 'TIME'"
                v-model="filters[filter.id]"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn
                color="primary"
                class="w-100"
                max-width="200"
                :disabled="loading"
                @click.prevent="handleFilterSearch"
                >{{ t('settings.apply') }}</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <div v-if="results.length === 0" class="no-results-wrapper mt-5 mb-5">
      {{ t('settings.noResults') }}
    </div>

    <div v-else class="transitions_wrapper">
      <v-progress-circular
        v-if="loading"
        color="yellow"
        indeterminate
        class="transactions_loader"
      />
      <table class="transactions-table mt-8">
        <thead>
          <tr>
            <th>{{ t('settings.game') }}</th>
            <th>{{ t('settings.type') }}</th>
            <th>{{ t('settings.currency') }}</th>
            <th>{{ t('settings.amount') }}</th>
            <th>{{ t('settings.timestamp') }}</th>
            <th>{{ t('settings.status') }}</th>
            <th>{{ t('settings.transID') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(result, i) in results" :key="`${activityType}_${i}`">
            <td>{{ isset(result.game) ? result.game.name : '-' }}</td>
            <td>{{ handleBetType(result.transaction_type) }}</td>
            <td>{{ result.currency }}</td>
            <td>{{ handleAmount(result) }}</td>
            <td>{{ convertDate(result.when_placed) }}</td>
            <td>{{ result.round_finished ? 'Completed' : 'Completed' }}</td>
            <td>
              <span class="transaction-text-overlay">{{ result.transaction_id }}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <v-pagination
        v-model="page"
        :total-visible="7"
        :length="Math.floor(total / length)"
        class="activity-pagination"
      />
    </div>
  </div>
</template>
