import type { WalletType } from '~/config/Wallet.config'
import type { WalletT } from '../types/Wallet'

export const useWalletStore = defineStore(
  'wallet',
  () => {
    const currentWallet = ref<WalletType>()
    const currentWalletDepositPage = ref<WalletT | null>()

    const setWallet = (_wallet: WalletType) => (currentWallet.value = _wallet)

    const setCurrentWalletDepositPage = (_wallet: WalletT | null) =>
      (currentWalletDepositPage.value = _wallet)

    return {
      currentWallet,
      currentWalletDepositPage,
      setCurrentWalletDepositPage,
      setWallet,
    }
  },
  {
    persist: true,
  },
)
