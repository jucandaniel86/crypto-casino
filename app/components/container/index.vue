<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ContainerSection, type ContainerType } from '~/core/types/Container'

type ContainerComponentT = {
  content: ContainerType[]
}
const props = defineProps<ContainerComponentT>()
const currentContent = ref(props.content)

watch(props, () => {
  currentContent.value = props.content
})

console.log('re-rendered')
</script>
<template>
  <div class="root-container">
    <template v-for="(section, i) in currentContent" :key="`Container${i}`">
      <container-column
        v-if="section.container === ContainerSection.COLUMN"
        :key="section.id"
        :options="section"
      />
      <container-flex
        v-if="section.container === ContainerSection.FLEX_COLUMN"
        :key="section.id"
        :options="section"
      />
      <container-category
        v-if="section.container === ContainerSection.GAMES_CATEGORY"
        :key="section.id"
        :options="section"
      />
      <container-betfeed
        v-if="section.container === ContainerSection.BET_FEED"
        :key="section.id"
        :options="section"
      />
      <container-seo
        v-if="section.container === ContainerSection.SEO"
        :key="section.id"
        :options="section"
      />
      <container-html
        v-if="section.container === ContainerSection.HTML"
        :key="section.id"
        :options="section"
      />
      <container-banner
        v-if="section.container === ContainerSection.BANNER"
        :key="section.id"
        :options="section"
      />
      <container-search
        v-if="section.container === ContainerSection.SEARCH"
        :key="section.id"
        :options="section"
      />
      <container-tabs
        v-if="section.container === ContainerSection.TABS"
        :key="section.id"
        :options="section"
      />
      <container-provider-logos
        v-if="section.container === ContainerSection.PROVIDER_LOGOS"
        :key="section.id"
        :options="section"
      />
      <container-categoryheadless
        v-if="section.container === ContainerSection.CATEGORY_HEADLESS"
        :key="section.id"
        :options="section"
      />
      <container-accordion
        v-if="section.container === ContainerSection.ACCORDION"
        :key="section.id"
        :options="section"
      />
    </template>
  </div>
</template>
