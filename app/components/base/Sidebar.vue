<!-- eslint-disable vue/require-prop-types -->
<script setup lang="ts">
import { APP_MENU_CONFIG } from '../../config/Menu.config'
import { useAppStore } from '~/core/store/app'
const { name } = useDisplay()

//models
const AppMenu = ref(APP_MENU_CONFIG)
const route = useRoute()
const drawer = ref(false)
const rail = ref(false)
const isMobile = computed(() => ['xs', 'sm'].indexOf(name.value) !== -1)
const { setSidebarOpen } = useAppStore()
const { width } = useDisplay()

const { sidebarOpen } = storeToRefs(useAppStore())

const sidebarWidth = computed(() => (isMobile.value ? width.value : 240))
const railVal = computed(() => {
  if (isMobile.value) {
    return false
  }
  return !sidebarOpen.value
})

watch(sidebarOpen, () => {
  if (isMobile.value) {
    rail.value = false
    drawer.value = sidebarOpen.value
    console.log('railVal', railVal.value)
    return
  }
  // drawer.value = sidebarOpen.value
  rail.value = sidebarOpen.value
  console.log('railVal', railVal.value)
})

onMounted(() => {
  // rail.value = isMobile.value ? false : true
  drawer.value = isMobile.value ? false : true
})
</script>
<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="railVal"
    :rail-width="56"
    :width="sidebarWidth"
    :permanent="!isMobile"
    :class="{ extended: sidebarOpen }"
  >
    <div v-if="sidebarOpen" class="sidebar-arrow-container d-flex justify-center align-center" />
    <div
      class="sidebar-arrow-container d-flex justify-end align-center"
      :class="{ expanded: sidebarOpen, expandedMobile: sidebarOpen && isMobile }"
    >
      <v-btn
        icon
        class="rail-arrow"
        size="small"
        :class="{ right: sidebarOpen }"
        @click.prevent="setSidebarOpen(!sidebarOpen)"
      >
        <icon-right-arrow class="svg-arrow" />
      </v-btn>
    </div>
    <v-list density="compact" nav>
      <template v-for="(item, i) in AppMenu">
        <v-list-item
          v-if="item.type !== 'divider'"
          :key="i"
          :value="item"
          color="primary"
          variant="plain"
          link
          :to="item.linkName"
          :class="{ active: route.path.replace('/', '') === item.linkName }"
        >
          <template #prepend>
            <v-tooltip :text="item.title" color="white" :disabled="sidebarOpen">
              <template #activator="{ props }">
                <shared-icon v-bind="props" :icon="item.icon" fill="#e0e6ff" class="brand-icon" />
              </template>
            </v-tooltip>
          </template>

          <v-list-item-title v-if="(isMobile && sidebarOpen) || (!isMobile && !railVal)">{{
            item.title
          }}</v-list-item-title>
        </v-list-item>
        <v-divider v-else :key="`AppMenuDivider${i}`" />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
