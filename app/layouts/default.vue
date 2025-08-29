<script setup lang="ts">
console.log('base layout')
</script>
<template>
  <v-layout class="rounded rounded-md border">
    <icons />
    <currencies />
    <base-overlays />
    <base-sidebar />
    <base-header />
    <v-main class="w-100">
      <v-container>
        <slot />
      </v-container>
      <base-footer />
    </v-main>
  </v-layout>
</template>
