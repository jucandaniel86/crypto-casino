<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { useTemplateRef } from 'vue'
import { APP_MENU_CONFIG } from '../../config/Menu.config'

//models
const AppMenu = ref(APP_MENU_CONFIG)
const rail = ref<boolean>(true)
const target = useTemplateRef<HTMLElement>('drawer')
const route = useRoute()

onClickOutside(target, () => {})
</script>
<template>
  <v-navigation-drawer
    ref="drawer"
    permanent
    :rail="rail"
    :rail-width="56"
    :width="240"
    :class="{ extended: !rail }"
  >
    <div class="sidebar-arrow-container d-flex justify-center align-center" v-if="!rail" />
    <div
      class="sidebar-arrow-container d-flex justify-center align-center"
      :class="{ expanded: !rail }"
    >
      <v-btn
        icon
        class="rail-arrow"
        size="small"
        :class="{ right: rail }"
        @click.prevent="rail = !rail"
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
          :class="{ active: route.name === item.linkName }"
        >
          <template #prepend>
            <v-tooltip :text="item.title" color="white" :disabled="!rail">
              <template #activator="{ props }">
                <shared-icon v-bind="props" :icon="item.icon" fill="#e0e6ff" class="brand-icon" />
              </template>
            </v-tooltip>
          </template>

          <v-list-item-title v-if="!rail">{{ item.title }}</v-list-item-title>
        </v-list-item>
        <v-divider v-else :key="`AppMenuDivider${i}`" />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
