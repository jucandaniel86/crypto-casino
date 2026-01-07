<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { useAPIFetch } from '~/composables/useApiFetch'
import { useAppStore } from '~/core/store/app'
import type { ContainerType } from '~/core/types/Container'

useHead({
  title: 'Joci.ro | Crypto & Bitcoin Casino and Sportsbook',
})

definePageMeta({
  middleware: 'auth',
})

//models
const content = ref<ContainerType[]>([])

const { setPageLoading, setSidebar } = useAppStore()

const loadPage = async (page: string) => {
  setPageLoading(true)
  const { data: data }: any = await useAsyncData('page', () => useAPIFetch('/page/' + page))

  if (data) {
    content.value = data.value.children.main
    setSidebar(data.value.children.leftSidebar)
  }
  setPageLoading(false)
}

loadPage('home')
</script>
<template>
  <Container :content="content" />
</template>
