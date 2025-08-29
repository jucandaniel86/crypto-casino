<!-- eslint-disable vue/no-v-html -->
<script setup lang="ts">
import type { ContainerType } from '~/core/types/Container'

const { options } = defineProps<{ options: ContainerType }>()
const { display, styles } = useContainerOptions(options)

console.log('options', options.id, display.value)
</script>
<template>
  <div
    v-if="display"
    :id="options.id"
    v-html="options.data.html"
    :style="styles"
    style="color: #fff"
  ></div>
</template>
