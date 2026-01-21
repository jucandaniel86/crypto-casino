<script setup lang="ts">
import { onMounted } from "vue";
import { useAppStore } from "./core/store/app";

const { pageLoading } = storeToRefs(useAppStore());
const { initNotifications } = useNotifications();

onMounted(() => {
  initNotifications();
});
</script>
<template>
  <Loader v-if="pageLoading" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
