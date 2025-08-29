import type { WalletType } from '~/config/Wallet.config'

export const useWalletStore = defineStore(
  'wallet',
  () => {
    const currentWallet = ref<WalletType>()

    const setWallet = (_wallet: WalletType) => (currentWallet.value = _wallet)

    return {
      currentWallet,
      setWallet,
    }
  },
  {
    persist: true,
  },
)
