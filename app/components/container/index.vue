<script setup lang="ts">
import { ContainerSection, type ContainerType } from '~/core/types/Container'

type ContainerComponentT = {
  content: ContainerType[]
}
const props = defineProps<ContainerComponentT>()
</script>
<template>
  <div class="root-container">
    <template v-for="(section, i) in props.content" :key="`Container${i}`">
      <container-column v-if="section.container === ContainerSection.COLUMN" :options="section" />
      <container-flex
        v-if="section.container === ContainerSection.FLEX_COLUMN"
        :options="section"
      />
      <container-category
        v-if="section.container === ContainerSection.GAMES_CATEGORY"
        :options="section"
      />
      <container-betfeed
        v-if="section.container === ContainerSection.BET_FEED"
        :options="section"
      />
      <container-seo v-if="section.container === ContainerSection.SEO" :options="section" />
      <container-html v-if="section.container === ContainerSection.HTML" :options="section" />
      <container-banner v-if="section.container === ContainerSection.BANNER" :options="section" />
      <container-search v-if="section.container === ContainerSection.SEARCH" :options="section" />
      <container-tabs v-if="section.container === ContainerSection.TABS" :options="section" />
      <container-provider-logos
        v-if="section.container === ContainerSection.PROVIDER_LOGOS"
        :options="section"
      />
      <container-categoryheadless
        v-if="section.container === ContainerSection.CATEGORY_HEADLESS"
        :options="section"
      />
      <container-accordion
        v-if="section.container === ContainerSection.ACCORDION"
        :options="section"
      />
    </template>
  </div>
</template>
