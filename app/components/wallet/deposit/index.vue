<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { useWalletStore } from '~/core/store/wallet'
import type { WalletT } from '~/core/types/Wallet'

//enums
enum DepositViewTypes {
  WALLET_ITEM = 'WALLET_ITEM',
  WALLETS = 'WALLETS',
  WALLET_CONNECT = 'WALLET_CONNECT',
}

const currentView = ref<DepositViewTypes>(DepositViewTypes.WALLETS)

//composables
const { currentWalletDepositPage, cryptoWallets, fiatWallets } = storeToRefs(useWalletStore())
const { setCurrentWalletDepositPage } = useWalletStore()

const handleBackToMain = () => {
  setCurrentWalletDepositPage(null)
  currentView.value = DepositViewTypes.WALLETS
}

const handleWalletChange = (wallet: WalletT) => {
  setCurrentWalletDepositPage(wallet)
  currentView.value = DepositViewTypes.WALLET_ITEM
}

//computed
onMounted(() => {
  setCurrentWalletDepositPage(null)
  currentView.value = DepositViewTypes.WALLETS
})
</script>
<template>
  <div>
    <WalletDepositPage
      v-if="currentView === DepositViewTypes.WALLET_ITEM && currentWalletDepositPage"
      :currency="currentWalletDepositPage"
      :back-label="'Deposit in crypto'"
      @on-back="handleBackToMain"
    />
    <WalletDepositWalletconnect
      v-else-if="currentView === DepositViewTypes.WALLET_CONNECT"
      @on-back="handleBackToMain"
    />
    <template v-else>
      <WalletCurrenciesWrapper
        label="Deposit in crypto"
        :wallets="cryptoWallets"
        @on-wallet-change="handleWalletChange"
      />
      <WalletCurrenciesWrapper
        label="Deposit in fiat"
        :wallets="fiatWallets"
        @on-wallet-change="handleWalletChange"
      />
      <div class="deposit-item-footer">
        <p>Deposit using WalletConnect</p>
        <v-btn
          color="purple"
          class="w-100"
          max-width="200"
          @click.prevent="currentView = DepositViewTypes.WALLET_CONNECT"
          >Deposit</v-btn
        >
      </div>
    </template>
  </div>
</template>
