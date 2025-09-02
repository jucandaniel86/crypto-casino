<script setup lang="ts">
import { useAppStore } from '~/core/store/app'

//composables
const router = useRouter()
const { toggleSidebar } = useAppStore()

//methods
const openCasino = () => router.push({ path: '/casino' })

const openSports = () => router.push({ path: '/sports' })

const openPromo = () => router.push({ path: '/promotions' })
</script>
<template>
  <div class="FooterMenu">
    <div class="content">
      <button class="FooterMenuItem" @click="toggleSidebar">
        <SharedIcon icon="brand-ico-menu2" />
        <p>Menu</p>
      </button>
      <button class="FooterMenuItem" @click="openCasino">
        <SharedIcon icon="brand-ico-casino2" />
        <p>Casino</p>
      </button>
      <button class="FooterMenuItem" @click="openSports">
        <SharedIcon icon="brand-ico-sports2" />
        <p>Sports</p>
      </button>
      <button class="FooterMenuItem" @click="openPromo">
        <SharedIcon icon="brand-ico-promotions2" />
        <p>Promotions</p>
      </button>
    </div>
  </div>
</template>
