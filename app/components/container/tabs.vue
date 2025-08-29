<script setup lang="ts">
import { ContainerSection, type ContainerType } from '~/core/types/Container'

const { options } = defineProps<{ options: ContainerType }>()
const { display } = useContainerOptions(options)

const currentTab = ref(options.data.tabs[0].internalName)
const disabled = ref<boolean>(false)

console.log(options.data.tabs)
</script>
<template>
  <v-tabs
    v-if="display"
    :id="options.id"
    :key="options.id"
    v-model="currentTab"
    align-tabs="start"
    :disabled="disabled"
    class="mb-0"
  >
    <v-tab v-for="(tab, i) in options.data.tabs" :key="`Tab${i}`" :value="tab.internalName">
      <shared-icon-label
        :label="tab.tabName"
        :icon="`brand-ico-${tab.iconCode}`"
        :fill="'currentColor'"
      />
    </v-tab>
  </v-tabs>
  <template v-for="(section, i) in options.children" :key="`Container${i}`">
    <container-category
      v-if="section.container === ContainerSection.GAMES_CATEGORY"
      :options="section"
    />
    <container-provider-logos
      v-if="section.container === ContainerSection.PROVIDER_LOGOS"
      :options="section"
    />
    <container-categoryheadless
      v-if="section.container === ContainerSection.CATEGORY_HEADLESS"
      :options="section"
    />
  </template>
</template>
