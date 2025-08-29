<script setup lang="ts">
import { TEST_TABS } from '~/config/Tabs.config'
import type { TabType } from '~/core/types/Game'

//props
type TabsT = {
  disabled: boolean
  activeTab: TabType
}
const props = defineProps<TabsT>()

const currentTab = ref<TabType>(props.activeTab)
const emitters = defineEmits(['onTabChange'])

const onTabChange = (tab: TabType) => {
  emitters('onTabChange', tab)
  currentTab.value = tab
}
</script>
<template>
  <v-tabs v-model="currentTab" align-tabs="start" :disabled="props.disabled" class="mb-5">
    <v-tab
      v-for="(tab, i) in TEST_TABS"
      :key="`Tab${i}`"
      :value="1"
      :class="{ 'v-tab--selected': currentTab && tab.id === currentTab.id }"
      @click.prevent="onTabChange(tab)"
    >
      <shared-icon-label :label="tab.label" :icon="tab.icon" />
    </v-tab>
  </v-tabs>
</template>
