<script setup lang="ts">
import { useHead } from 'nuxt/app'
import { PROMOTIONS } from '../../config/Promotions.config'
useHead({
  title: 'Crypto & Bitcoin Casino Bonuses and Rewards',
})
</script>
<template>
  <div>
    <h1 class="text-h5 text-white font-weight-bold mb-3">Promotions</h1>
    <div class="promotions__wrapper">
      <PromotionItem
        v-for="(promotion, i) in PROMOTIONS"
        :key="`Promotion${i}`"
        v-bind="promotion"
      />
    </div>
  </div>
</template>
<style>
@import '@/assets/css/components/Promotions.css';
</style>
