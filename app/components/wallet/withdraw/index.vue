<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { useWalletStore } from '~/core/store/wallet'
import { WalletWithdrawPage } from '#components'

//composables
const { currentWalletDepositPage, cryptoWallets, fiatWallets } = storeToRefs(useWalletStore())
const { setCurrentWalletDepositPage } = useWalletStore()

//methods
const handleBackToMain = () => {
  setCurrentWalletDepositPage(null)
}

onMounted(() => {
  setCurrentWalletDepositPage(null)
})
</script>
<template>
  <div>
    <WalletWithdrawPage
      v-if="currentWalletDepositPage"
      :currency="currentWalletDepositPage"
      :back-label="'Withdraw in crypto'"
      @on-back="handleBackToMain"
    />
    <template v-else>
      <WalletCurrenciesWrapper label="Withdraw crypto" :wallets="cryptoWallets" />
      <WalletCurrenciesWrapper label="Withdraw fiat" :wallets="fiatWallets" />
    </template>
  </div>
</template>
