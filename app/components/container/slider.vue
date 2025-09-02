<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import type { ContainerType } from "~/core/types/Container";

const { options } = defineProps<{ options: ContainerType }>();
const { display, dataOptions } = useContainerOptions(options);

const style: any = computed(() => {
  if (dataOptions.value.visibleItemsCount) {
    return { "--slider-visible-items-count": dataOptions.value.visibleItemsCount };
  }
  return {};
});
</script>
<template>
  <v-slide-group
    v-if="display"
    :id="options.id"
    show-arrows
    :style="style"
    class="custom-slider"
  >
    <v-slide-group-item
      v-for="(child, i) in options.children"
      :key="`${options.id}_${i}`"
    >
      <container-html :options="child" />
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
