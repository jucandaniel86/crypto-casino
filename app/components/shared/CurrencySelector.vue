<script setup lang="ts">
import { useWalletStore } from '~/core/store/wallet'

const { wallets } = storeToRefs(useWalletStore())

const model = defineModel({ default: '' })

const items = computed(() => {
  return wallets.value.map((wallet) => ({
    label: wallet.code,
    id: wallet.code,
  }))
})
</script>
<template>
  <v-select
    v-model="model"
    :items="items"
    hide-details
    item-title="label"
    item-value="id"
    density="compact"
  />
</template>
