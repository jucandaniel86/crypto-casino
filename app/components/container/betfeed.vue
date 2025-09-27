<!-- eslint-disable vue/no-v-html -->
<script setup lang="ts">
import type { ContainerType } from '~/core/types/Container'

type BetFeedTab = {
  id: string
  label: string
}
const TABS: BetFeedTab[] = [
  { id: 'allBets', label: 'All Bets' },
  { id: 'highRollers', label: 'High Rollers' },
]

const { name } = useDisplay()
const { options } = defineProps<{ options: ContainerType }>()
const { display } = useContainerOptions(options)
const DEFAULT_TAB = 'allBets'

const currentTab = ref<string>(DEFAULT_TAB)
const isDesktop = computed(() => ['lg', 'md', 'xl'].indexOf(name.value) !== -1)

const convertDate = (date: string) => new Date(date).getHours() + ':' + new Date(date).getMinutes()
const convertAmount = (amount: number, decimals = 8) => new Number(amount).toFixed(decimals)
</script>
<template>
  <div v-if="display" :id="options.id">
    <v-tabs v-model="currentTab" align-tabs="start" class="mb-5">
      <v-tab v-for="(tab, i) in TABS" :key="`Tab${i}`" :value="tab.id">
        {{ tab.label }}
      </v-tab>
    </v-tabs>
    <v-tabs-window v-model="currentTab">
      <v-tabs-window-item value="allBets">
        <table class="betfeed__table">
          <thead>
            <tr>
              <th>Game</th>
              <th v-if="isDesktop">User</th>
              <th v-if="isDesktop">Time</th>
              <th v-if="isDesktop">Bet Amount</th>
              <th v-if="isDesktop">Multiplier</th>
              <th>Payout</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(feed, i) in options.data.feed" :key="`${options.id}_feed${i}`">
              <td>{{ feed.gameName }}</td>
              <td v-if="isDesktop">{{ feed.username }}</td>
              <td v-if="isDesktop">{{ convertDate(feed.eventTime) }}</td>
              <td v-if="isDesktop">{{ convertAmount(feed.stakeSystem) }} {{ feed.currency }}</td>
              <td v-if="isDesktop">{{ convertAmount(feed.multiplier, 2) }}x</td>
              <td>{{ convertAmount(feed.payout) }} {{ feed.currency }}</td>
            </tr>
          </tbody>
        </table>
      </v-tabs-window-item>
      <v-tabs-window-item value="highRollers">
        <table class="betfeed__table">
          <thead>
            <th>Game</th>
            <th v-if="isDesktop">User</th>
            <th v-if="isDesktop">Time</th>
            <th v-if="isDesktop">Bet Amount</th>
            <th v-if="isDesktop">Multiplier</th>
            <th>Payout</th>
          </thead>
          <tbody>
            <tr v-for="(feed, i) in options.data.highStakesFeed" :key="`${options.id}_feed${i}`">
              <td>{{ feed.gameName }}</td>
              <td v-if="isDesktop">{{ feed.username }}</td>
              <td v-if="isDesktop">{{ convertDate(feed.eventTime) }}</td>
              <td v-if="isDesktop">{{ convertAmount(feed.stakeSystem) }} {{ feed.currency }}</td>
              <td v-if="isDesktop">{{ convertAmount(feed.multiplier, 2) }}x</td>
              <td>{{ convertAmount(feed.payout) }} {{ feed.currency }}</td>
            </tr>
          </tbody>
        </table>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>
