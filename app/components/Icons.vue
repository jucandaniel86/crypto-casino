<!-- eslint-disable vue/no-v-html -->
<script setup lang="ts">
const icons = ref()

const getIcons = async (): Promise<void> => {
  const { data } = await useAPIFetch('/icons')
  icons.value = data

  console.log('ICONS', icons.value)
}

onMounted(() => {
  getIcons()
})
</script>
<template>
  <div style="display: none">
    <span v-for="icon in icons" :key="icon.label" v-html="icon.icon"> </span>
  </div>
</template>
<style scoped>
.cls-18880 {
  fill-rule: evenodd;
  stroke-width: 0px;
}
.cls-110656 {
  fill-rule: evenodd;
}
.cls-17326 {
  fill-rule: evenodd;
}
.cls-1777 {
  fill-rule: evenodd;
}
</style>
