<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { useAppStore } from '~/core/store/app'

const { setPageLoading } = useAppStore()
const renderID = ref('')

const { data } = await useAsyncData(
  'data',
  async () => {
    setPageLoading(true)
    const route = useRoute()
    const pageData: any = await useAsyncData('page', () =>
      useAPIFetch('/page/' + route.params.slug),
    )

    useSeoContainer(pageData.seo)

    renderID.value = route.params.slug + '_' + new Date().getTime()

    setPageLoading(false)
    return pageData
  },
  {
    lazy: true,
  },
)
</script>
<template>
  <Container v-if="data" :key="renderID" :content="data.children.main" />
</template>
