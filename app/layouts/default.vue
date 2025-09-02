<script setup lang="ts">
const { name } = useDisplay()

const isMobile = computed(() => ['xs', 'sm'].indexOf(name.value) !== -1)
</script>
<template>
  <v-layout>
    <icons />
    <currencies />
    <base-overlays />
    <base-sidebar />
    <base-header />
    <v-main>
      <v-container>
        <slot />
      </v-container>
      <base-footer />
    </v-main>
    <Teleport to="body">
      <base-footer-menu v-if="isMobile" />
    </Teleport>
  </v-layout>
</template>
