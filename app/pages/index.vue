<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { useAppStore } from '~/core/store/app'
import type { ContainerType } from '~/core/types/Container'

useHead({
  title: 'Coin Casino | Crypto & Bitcoin Casino and Sportsbook',
})

//models
const content = ref<ContainerType[]>([])
const { wait } = useUtils()
const { setPageLoading } = useAppStore()

const loadPage = async (page: string) => {
  setPageLoading(true)
  const { data: data }: any = await useAsyncData('page', () => $fetch(`/json/pages/${page}.json`))
  await wait(700)
  if (data) {
    content.value = data.value.children.main
  }
  setPageLoading(false)
}

loadPage('home')
</script>
<template>
  <Container :content="content" />
</template>
