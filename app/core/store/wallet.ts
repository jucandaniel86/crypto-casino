import type { WalletT } from '../types/Wallet'

export const useWalletStore = defineStore(
  'wallet',
  () => {
    const currentWallet = ref<WalletT | null>()
    const currentWalletDepositPage = ref<WalletT | null>()

    const setWallet = (_wallet: WalletT | null | undefined) => (currentWallet.value = _wallet)

    const setCurrentWalletDepositPage = (_wallet: WalletT | null) =>
      (currentWalletDepositPage.value = _wallet)

    const getCurrentWallet = async (): Promise<void> => {
      const data = await useAPIFetch('/player/current-wallet')
      setWallet(data)
    }

    return {
      currentWallet,
      currentWalletDepositPage,
      setCurrentWalletDepositPage,
      setWallet,
      getCurrentWallet,
    }
  },
  {
    persist: true,
  },
)
