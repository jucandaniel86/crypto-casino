<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { useWalletStore } from '~/core/store/wallet'
import type { WalletT } from '~/core/types/Wallet'
import CurrencyPage from './currency-page.vue'

const wallets = ref({})
const loading = ref<boolean>(false)
const depositData = ref<any>()

//composables
const { currentWalletDepositPage } = storeToRefs(useWalletStore())
const { setCurrentWalletDepositPage } = useWalletStore()

//methods
const getDepositWallets = async (): Promise<void> => {
  loading.value = true
  const data: any = await $fetch('/json/responses/deposit.json')
  const DepositContainer = data.find((el: any) => el.container === 'DepositContainer')

  if (DepositContainer) {
    depositData.value = DepositContainer
    wallets.value = DepositContainer.data.depositCurrencies
  }
  loading.value = false
}

const handleBackToMain = () => {
  setCurrentWalletDepositPage(null)
}

//computed
const cryptoWallets: ComputedRef<WalletT[]> = computed(() => {
  return Object.entries(wallets.value)
    .filter((wallet: any) => !wallet[1].isFiat)
    .map((wallet: any) => wallet[1])
})

const fiatWallets: ComputedRef<WalletT[]> = computed(() => {
  return Object.entries(wallets.value)
    .filter((wallet: any) => !wallet[1].isFiat)
    .map((wallet: any) => wallet[1])
})

onMounted(() => {
  getDepositWallets()
  setCurrentWalletDepositPage(null)
})
</script>
<template>
  <div>
    <CurrencyPage
      v-if="currentWalletDepositPage"
      :currency="currentWalletDepositPage"
      :back-label="'Deposit in crypto'"
      @on-back="handleBackToMain"
    />
    <template v-else>
      <div v-if="loading" class="d-flex justify-center align-center">
        <v-progress-circular color="purple" />
      </div>
      <div v-else>
        <wallet-deposit-item label="Deposit in crypto" :wallets="cryptoWallets" />
        <wallet-deposit-item label="Deposit in fiat" :wallets="fiatWallets" />
      </div>
      <div class="deposit-item-footer">
        <p>Deposit using WalletConnect</p>
        <v-btn color="purple" class="w-100" max-width="200">Deposit</v-btn>
      </div>
    </template>
  </div>
</template>
