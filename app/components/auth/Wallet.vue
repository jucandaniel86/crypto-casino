<script setup lang="ts">
import { WALLET_CONFIG, type WalletType } from '~/config/Wallet.config'
import { useWalletStore } from '~/core/store/wallet'
import { OverlaysTypes } from '~/core/types/Overlays'

const { currentWallet } = storeToRefs(useWalletStore())
const { setWallet } = useWalletStore()
const { replace } = useRouter()
const { name } = useDisplay()
const menu = ref<boolean>(false)
const walletButton = ref()

const openWalletModal = () => {
  replace({ query: { overlay: OverlaysTypes.WALLET } })
}

const convertBalance = (balance: number, decimal: number) => Number(balance).toFixed(decimal)
const isMobile = computed(() => ['xs', 'sm'].indexOf(name.value) !== -1)
const isDesktop = computed(() => ['lg', 'md', 'xl'].indexOf(name.value) !== -1)

onMounted(() => {
  if (!currentWallet.value) {
    setWallet(WALLET_CONFIG.find((el) => el.balance > 0) as WalletType)
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
            <span>{{ convertBalance(currentWallet?.balance, currentWallet?.decimal) }}</span>

            <SharedIcon :icon="currentWallet.icon" class="svg-icon" />
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
                  {{ convertBalance(currentWallet.balance, currentWallet.decimal) }}
                  <span>{{ currentWallet.name }}</span>
                </span>
              </div>
              <div class="balance-data">
                <div class="balance-item">
                  <span class="balance-label">Withdrawable</span>
                  <span class="balance-value">
                    {{ convertBalance(currentWallet.balance, currentWallet.decimal) }}
                    <span>{{ currentWallet.name }}</span>
                  </span>
                </div>
                <div class="balance-item">
                  <span class="balance-label">Bonus</span>
                  <span class="balance-value">
                    {{ convertBalance(0, currentWallet.decimal) }}
                    <span>{{ currentWallet.name }}</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="wallet_currencies_wrapper">
              <ul>
                <li v-for="wallet in WALLET_CONFIG" :key="`Wallet${wallet.name}`">
                  <div
                    class="balance-component"
                    :class="{ active: currentWallet?.name === wallet.name }"
                    @click="setWallet(wallet)"
                  >
                    <div class="amount" :class="{ zero: wallet.balance <= 0 }">
                      {{ convertBalance(wallet.balance, wallet.decimal) }}
                    </div>
                    <div class="balance">
                      <SharedIcon :icon="wallet.icon" />
                      <span>{{ wallet.name }}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="wallet-balance-footer">
              <v-checkbox :false-value="0" :true-value="1" label="Display in Fiat" hide-details />
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
