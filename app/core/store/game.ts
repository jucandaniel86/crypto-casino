export const useGameStore = defineStore(
  'game',
  () => {
    const displayGameDisclaimer = ref<boolean>(false)

    const setDisplayGameDisclaimer = (_payload: boolean) => {
      displayGameDisclaimer.value = _payload
    }

    return {
      displayGameDisclaimer,
      setDisplayGameDisclaimer,
    }
  },
  { persist: true },
)
