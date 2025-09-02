<script setup lang="ts">
import type { ContainerType } from '~/core/types/Container'

const { options } = defineProps<{ options: ContainerType }>()
const { display } = useContainerOptions(options)
</script>
<template>
  <v-slide-group v-if="display" :id="options.id" show-arrows>
    <v-slide-group-item
      v-for="(child, i) in options.children"
      :key="`${options.id}_${i}`"
      style="max-width: calc(100% / 3)"
    >
      <container-html :options="child" style="max-width: calc(100% / 3)" />
    </v-slide-group-item>
    <template #next="{ next }">
      <button class="carousel_btn next" @click.prevent="next">
        <IconPlay />
      </button>
    </template>
    <template #prev="{ prev }">
      <button class="carousel_btn prev" @click.prevent="prev">
        <IconPlay />
      </button>
    </template>
  </v-slide-group>
</template>
