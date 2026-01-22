<script setup lang="ts">
import { onMounted } from "vue";
import { useAppStore } from "./core/store/app";
import { useAuthStore } from "./core/store/auth";

const { pageLoading } = storeToRefs(useAppStore());
const { initNotifications } = useNotifications();
const { logout } = useAuthStore();
const { info } = useAlerts();

useAuthEventCheck({
  intervalMs: 10000,
  onLoggedOut: () => {
    logout();
    info("The session expired");
  },
});
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
