<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { useAppStore } from '~/core/store/app'

const { wait } = useUtils()
const { setPageLoading } = useAppStore()
const renderID = ref('')

const { data } = await useAsyncData(
  'data',
  async () => {
    setPageLoading(true)
    const route = useRoute()
    const pageData: any = await $fetch(`/json/pages/${route.params.slug}.json`)
    await wait(700)
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
