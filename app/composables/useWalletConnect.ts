/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import { useMetaMaskWallet } from 'vue-connect-wallet'
import { useAuthStore } from '~/core/store/auth'

export const useWalletConnect = () => {
  const wallet = useMetaMaskWallet()
  const { walletConnectLogin } = useAuthStore()
  const changeView = ref<string>('')

  const connect = async () => {
    const accounts = await wallet.connect()

    if (typeof accounts === 'string') {
      console.log('An error occurred' + accounts)
      return
    }

    const LoginResponse = await walletConnectLogin(accounts[0])
    if (!LoginResponse) {
      changeView.value = 'register'
    }
  }

  const isConnected = computed(async () => {
    const accounts = await wallet.getAccounts()
    if (typeof accounts === 'string') return false
    return accounts.length > 0
  })

  return {
    isConnected,
    changeView,
    connect,
  }
}
