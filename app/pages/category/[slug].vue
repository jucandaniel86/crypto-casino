<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { useAppStore } from '~/core/store/app'

const { setPageLoading } = useAppStore()
const renderID = ref('')
const { back } = useRouter()
const data = ref()
const route = useRoute()

const loadPage = async (): Promise<void> => {
  setPageLoading(true)
  const route = useRoute()
  const page = route.params.slug
  const pageData: any = await useAPIFetch('/category/' + page)

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
  <div>
    <div class="d-flex justify-start align-center mt-2 mb-1">
      <v-btn
        prepend-icon="mdi-arrow-left"
        class="back-btn"
        density="compact"
        text
        @click.prevent="back"
        >Back</v-btn
      >
    </div>

    <Container v-if="data" :key="renderID" :content="data.children.main" />
  </div>
</template>
