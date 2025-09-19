<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { useAppStore } from '~/core/store/app'

const { setPageLoading } = useAppStore()
const renderID = ref('')
const data = ref()
const route = useRouter()

const loadPage = async (): Promise<void> => {
  setPageLoading(true)
  const route = useRoute()
  const page = route.params.slug
  const pageData: any = await useAPIFetch('/promotion/' + page)

  if (pageData && pageData.seo) {
    useSeoContainer(pageData.seo)
  }

  data.value = pageData
  renderID.value = page + '_' + new Date().getTime()
  setPageLoading(false)
}

watch(
  route,
  () => {
    loadPage()
  },
  { deep: true },
)

onMounted(() => {
  loadPage()
})
</script>
<template>
  <Container v-if="data" :key="renderID" :content="data.children.main" />
</template>
