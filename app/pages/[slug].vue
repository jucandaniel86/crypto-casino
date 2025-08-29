<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
const { data }: any = await useAsyncData(
  'data',
  async () => {
    const route = useRoute()
    const data: any = await $fetch(`/json/pages/${route.params.slug}.json`)
    useSeoContainer(data.seo)
    return data
  },
  {
    lazy: true,
  },
)
</script>
<template>
  <Container v-if="data" :content="data.children.main" />
</template>
