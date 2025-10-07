<script setup lang="ts">
import { useWindowFocus } from '@vueuse/core'
import { useAuthStore } from '~/core/store/auth'
import { useWalletStore } from '~/core/store/wallet'
import { OverlaysTypes } from '~/core/types/Overlays'
import type { WalletT } from '~/core/types/Wallet'

//composables
const { currentWallet } = storeToRefs(useWalletStore())
const { isLogged } = storeToRefs(useAuthStore())
const { logout } = useAuthStore()
const { setWallet } = useWalletStore()
const { replace } = useRouter()
const { wait } = useUtils()
const { name } = useDisplay()
const route = useRoute()
const router = useRouter()
const focused = useWindowFocus()

//models
const menu = ref<boolean>(false)
const walletButton = ref()
const fiatOnly = ref<boolean>(false)
const userWallets = ref<WalletT[]>()
const walletSelectLoading = ref<boolean>(false)

const openWalletModal = () => {
  replace({ query: { overlay: OverlaysTypes.WALLET } })
}
const getUserWallets = async (): Promise<void> => {
  const { wallets } = await useAPIFetch('/player/wallets')
  if (wallets) {
    userWallets.value = wallets
  }
}

const handleWalletSelect = async (wallet: WalletT): Promise<void> => {
  walletSelectLoading.value = true
  const data = await useApiPostFetch('/player/set-wallet', {
    currency: wallet.code,
  })
  if (data) {
    if (inGame.value) {
      await wait(500)
      router.replace({ query: { _r: new Date().getTime() } }).then(() => router.go(0))
    }
    setWallet(wallet)
  }
  walletSelectLoading.value = false
}
const convertBalance = (balance: number, decimal: number) => Number(balance).toFixed(decimal)

//computed
const wallets = computed(() => {
  if (fiatOnly.value) {
    return userWallets.value?.filter((wallet) => wallet.isFiat)
  }
  return userWallets.value
})
const isMobile = computed(() => ['xs', 'sm'].indexOf(name.value) !== -1)
const isDesktop = computed(() => ['lg', 'md', 'xl'].indexOf(name.value) !== -1)
const inGame = computed(() => route.name === 'game-slug')

//mounted
onMounted(async () => {
  await getUserWallets()
  if (!currentWallet.value) {
    // setWallet(WALLET_CONFIG.find((el) => el.balance > 0) as WalletType)
  }
})

//watchers
watch(focused, () => {
  if (focused.value && !isLogged.value) {
    logout()
  }
})
</script>
<template>
  <div class="d-flex justify-center align-center ga-1 mx-auto">
    <v-menu
      v-if="currentWallet"
      v-model="menu"
      :close-on-content-click="false"
      location="bottom center"
      height="100%"
      target="parent"
      scroll-strategy="block"
      :open-delay="400"
    >
      <template #activator="{ props }">
        <v-btn v-bind="props" class="wallet_btn" ref="walletButton">
          <div class="d-flex justify-center align-center ga-2">
            <span v-if="!inGame">{{
              convertBalance(currentWallet?.balance, currentWallet?.precision)
            }}</span>
            <span v-else>(In Play)</span>
            <SharedIcon
              :icon="`currency-ico-${String(currentWallet.code).toLowerCase()}`"
              class="svg-icon"
            />
          </div>
          <template #append>
            <IconArrowDown :class="{ 'arrow-up': menu, 'arrow-down': !menu }" />
          </template>
        </v-btn>
      </template>

      <v-card min-width="414" max-height="100%" width="100%" class="mt-3 wallet-currencies-modal">
        <div class="close-btn-wrapper">
          <v-btn class="close-btn" @click.prevent="menu = false">
            <IconClose />
          </v-btn>
        </div>
        <div class="content">
          <div class="wrapper">
            <div class="wallet_header">
              <div class="current-balance">
                <span class="balance-label">Balance</span>
                <span class="balance-value">
                  {{ convertBalance(currentWallet.balance, currentWallet.precision) }}
                  <span>{{ currentWallet.code }}</span>
                </span>
              </div>
              <div class="balance-data">
                <div class="balance-item">
                  <span class="balance-label">Withdrawable</span>
                  <span class="balance-value">
                    {{ convertBalance(currentWallet.balance, currentWallet.precision) }}
                    <span>{{ currentWallet.code }}</span>
                  </span>
                </div>
                <div class="balance-item">
                  <span class="balance-label">Bonus</span>
                  <span class="balance-value">
                    {{ convertBalance(0, currentWallet.precision) }}
                    <span>{{ currentWallet.code }}</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="wallet_currencies_wrapper">
              <v-progress-linear v-if="walletSelectLoading" indeterminate color="purple" />
              <ul>
                <li v-for="wallet in wallets" :key="`Wallet${wallet.code}`">
                  <div
                    class="balance-component"
                    :class="{
                      active: currentWallet?.code === wallet.code,
                      disabled: walletSelectLoading,
                    }"
                    @click="handleWalletSelect(wallet)"
                  >
                    <div class="amount" :class="{ zero: wallet.balance <= 0 }">
                      {{ convertBalance(wallet.balance, wallet.precision) }}
                    </div>
                    <div class="balance">
                      <SharedIcon :icon="`currency-ico-${String(wallet.code).toLowerCase()}`" />
                      <span>{{ wallet.code }}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="wallet-balance-footer">
              <v-checkbox
                v-model="fiatOnly"
                :false-value="0"
                :true-value="1"
                label="Display in Fiat"
                hide-details
              />
            </div>
          </div>
        </div>
      </v-card>
    </v-menu>
    <v-btn
      v-if="isDesktop"
      color="primary"
      variant="flat"
      class="wallet_trigger_btn"
      @click.prevent="openWalletModal"
      >Wallet</v-btn
    >
    <v-btn v-if="isMobile" class="mobile-wallet-button ml-2" @click.prevent="openWalletModal">
      <shared-icon icon="brand-ico-wallet2" class="svg-icon" />
    </v-btn>
  </div>
</template>
