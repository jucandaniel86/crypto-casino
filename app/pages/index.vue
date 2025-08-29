<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import type { ContainerType } from '~/core/types/Container'

useHead({
  title: 'Coin Casino | Crypto & Bitcoin Casino and Sportsbook',
})

//models
const content = ref<ContainerType[]>([])
const isLoading = ref<boolean>(true)

const loadPage = async (page: string) => {
  isLoading.value = true
  const { data: data }: any = await useAsyncData('page', () => $fetch(`/json/pages/${page}.json`))

  if (data) {
    isLoading.value = false
    content.value = data.value.children.main
  }
}

onMounted(() => {
  loadPage('home')
})
</script>
<template>
  <Container :content="content" />
</template>
