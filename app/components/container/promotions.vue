<script setup lang="ts">
import type { ContainerType } from '~/core/types/Container'

const { options } = defineProps<{ options: ContainerType }>()
</script>
<template>
  <div>
    <h1 class="text-h5 text-white font-weight-bold mb-3">Promotions</h1>
    <div class="promotions__wrapper">
      <PromotionItem
        v-for="(promotion, i) in options.data.promotions"
        :key="`Promotion${i}`"
        v-bind="promotion"
      />
    </div>
  </div>
</template>
