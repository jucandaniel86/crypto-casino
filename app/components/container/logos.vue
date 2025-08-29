<!-- eslint-disable vue/no-v-html -->
<script setup lang="ts">
import type { ContainerType } from '~/core/types/Container'

const { options } = defineProps<{ options: ContainerType }>()
const { display } = useContainerOptions(options)

const { name } = useDisplay()
const columnGapsMap = computed(() => {
  switch (name.value) {
    case 'lg':
      return options.data.columnGapsMap.LG
    case 'md':
      return options.data.columnGapsMap.MD
    case 'sm':
      return options.data.columnGapsMap.SM
    case 'xl':
      return options.data.columnGapsMap.XL
    case 'xs':
      return options.data.columnGapsMap.XL
    default:
      return options.data.columnGapsMap.LG
  }
})

const images = computed(() => options.data.images)
</script>
<template>
  <div
    v-if="display"
    :id="options.id"
    class="d-flex flex-column align-center justify-center"
    :style="{
      gap: '24px',
    }"
  >
    <ul :style="{ '--imageGap': `${columnGapsMap}px` }" class="logos_wrapper">
      <li v-for="(image, i) in images" :key="`logoWrap-${options.id}-${i}`">
        <img :src="image.src" />
      </li>
    </ul>
  </div>
</template>
