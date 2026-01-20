<script setup lang="ts">
const props = withDefaults(defineProps<{ address: string; size?: number }>(), {
  size: 160,
})

const qrUrl = computed(() => {
  const data = encodeURIComponent(props.address.trim())
  return `https://api.qrserver.com/v1/create-qr-code/?size=${props.size}x${props.size}&data=${data}`
})
</script>

<template>
  <div class="wallet-qr">
    <img :src="qrUrl" :alt="`QR code for ${props.address}`" loading="lazy" />
    <div class="wallet-qr-address">{{ props.address }}</div>
  </div>
</template>
