<script setup lang="ts">
import { PROFILE_TABS } from '~/config/Profile.config'
import type { TabType } from '~/core/types/Game'

//composables
const route = useRoute()
const { replace } = useRouter()

//models
const tabs = ref(PROFILE_TABS)
const currentTab = ref()

//methods
const onTabChange = (tab: TabType) => {
  replace({ query: { tab: tab.id } })
}
const getDefaultTab = () => {
  if (route.query.tab) {
    const tab = tabs.value.find((el) => el.id === route.query.tab)
    if (tab) {
      return tab.id
    }
  }
  return tabs.value[0] ? tabs.value[0].id : 'account-info'
}

onMounted(() => {
  currentTab.value = getDefaultTab()
})
</script>
<template>
  <div>
    <v-tabs v-model="currentTab" align-tabs="start" class="mb-5">
      <v-tab
        v-for="(tab, i) in tabs"
        :key="`Tab${i}`"
        :value="tab.id"
        :class="{ 'v-tab--selected': currentTab && tab.id === currentTab }"
        @click.prevent="onTabChange(tab)"
      >
        {{ tab.label }}
      </v-tab>
    </v-tabs>
    <v-tabs-window v-model="currentTab">
      <v-tabs-window-item value="account-info"><ProfileAccountInfo /></v-tabs-window-item>
      <v-tabs-window-item value="settings"><ProfileSettings /> </v-tabs-window-item>
      <v-tabs-window-item value="activity"><ProfileActivity /> </v-tabs-window-item>
      <v-tabs-window-item value="bonus-history"><ProfileBonus /></v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>
