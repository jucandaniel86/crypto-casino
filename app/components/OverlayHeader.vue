<script setup lang="ts">
const emitters = defineEmits(['onClose'])
</script>

<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-center align-center pa-0 pt-2 position-relative">
      <IconLogo />

      <v-btn size="x-small" class="overlay-close" @click.prevent="emitters('onClose')"
        ><IconClose
      /></v-btn>
    </v-col>
    <v-col cols="12">
      <p class="cta">Sign up with WalletConnect. Instant registration</p>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-btn color="primary">
        <template #prepend><IconWalletConnect /></template>
        Wallet Connect
      </v-btn>
    </v-col>
    <v-col cols="12" class="pt-1 pb-1">
      <p class="cta">-OR-</p>
    </v-col>
  </v-row>
</template>
