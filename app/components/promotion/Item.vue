<script setup lang="ts">
import type { PromotionT } from '~/config/Promotions.config'

const props = defineProps<PromotionT>()
</script>
<template>
  <div class="promotion__item">
    <img :src="props.thumbnail" :alt="props.title" loading="lazy" />
    <div class="content">
      <div class="title">
        <h2>
          <strong>{{ props.title }}</strong>
        </h2>

        <p>
          <strong>{{ props.content }}</strong>
        </p>
      </div>
      <div class="d-flex justify-space-between align-center ga-2">
        <v-btn color="purple" class="w-50">{{ props.ctaButLabel }}</v-btn>
        <v-btn color="grey" class="w-50">Read More</v-btn>
      </div>
    </div>
  </div>
</template>
