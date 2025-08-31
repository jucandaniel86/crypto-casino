<script setup lang="ts">
import { useAuthStore } from '~/core/store/auth'
import { OverlaysTypes } from '~/core/types/Overlays'

const { logout } = useAuthStore()
const router = useRouter()

const goToSettings = () => router.push({ name: 'profile' })
const goToPromotions = () => router.push({ name: 'promotions' })
const openWallet = () => router.replace({ query: { overlay: OverlaysTypes.WALLET } })
</script>
<template>
  <div class="d-flex">
    <v-menu location="bottom right">
      <template #activator="{ props }">
        <v-btn v-bind="props" class="user-top-activator">
          <shared-icon :icon="'brand-ico-settings2'" class="svg-icon user-icon" />
        </v-btn>
      </template>
      <v-list class="user-profile-list">
        <v-list-item @click.prevent="goToPromotions">
          <template #prepend>
            <shared-icon icon="brand-ico-promotions2" class="svg-icon" />
          </template>
          <v-list-item-title>Promotions</v-list-item-title>
        </v-list-item>
        <v-list-item @click.prevent="openWallet">
          <template #prepend>
            <shared-icon icon="brand-ico-wallet2" class="svg-icon" />
          </template>
          <v-list-item-title>Wallet</v-list-item-title>
        </v-list-item>
        <v-list-item @click.prevent="goToSettings">
          <template #prepend>
            <shared-icon icon="brand-ico-settings2" class="svg-icon" />
          </template>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
        <v-list-item @click.prevent="logout">
          <template #prepend>
            <shared-icon icon="brand-ico-Logout-black" class="svg-icon" />
          </template>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
