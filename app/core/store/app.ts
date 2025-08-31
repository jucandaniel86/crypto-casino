export const useAppStore = defineStore('app', () => {
  const pageLoading = ref(false)

  const setPageLoading = (loading: boolean) => {
    pageLoading.value = loading
  }

  return {
    pageLoading,
    setPageLoading,
  }
})
