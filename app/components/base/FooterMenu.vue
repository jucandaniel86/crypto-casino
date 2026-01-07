<script setup lang="ts">
import { useAppStore } from '~/core/store/app'

//composables
const router = useRouter()
const { toggleSidebar } = useAppStore()
const { t } = useI18n()

//methods
const openCasino = () => router.push({ path: '/casino' })

const openPromo = () => router.push({ path: '/promotions' })
</script>
<template>
  <div class="FooterMenu">
    <div class="content">
      <button class="FooterMenuItem" @click="toggleSidebar">
        <SharedIcon icon="brand-ico-menu2" />
        <p>{{ t('footer.meu') }}</p>
      </button>
      <button class="FooterMenuItem" @click="openCasino">
        <SharedIcon icon="brand-ico-casino2" />
        <p>{{ t('footer.casino') }}</p>
      </button>
      <button class="FooterMenuItem" @click="openPromo">
        <SharedIcon icon="brand-ico-promotions2" />
        <p>{{ t('footer.promo') }}</p>
      </button>
    </div>
  </div>
</template>
