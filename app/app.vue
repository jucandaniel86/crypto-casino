<script setup lang="ts">
import { useAppStore } from './core/store/app'

const { pageLoading } = storeToRefs(useAppStore())
</script>
<template>
  <Loader v-if="pageLoading" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
