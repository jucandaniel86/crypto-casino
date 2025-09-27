export const useAppStore = defineStore('app', () => {
  const pageLoading = ref(false)
  const sidebarOpen = ref(false)
  const snackbar = ref(false)
  const snackbarMessage = ref('')

  const setPageLoading = (loading: boolean) => {
    pageLoading.value = loading
  }

  const setSidebarOpen = (payload: boolean) => {
    sidebarOpen.value = payload
  }

  const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value
  }

  const setSnackbar = (message: string) => {
    snackbarMessage.value = message
    toggleSnackbar(true)
  }

  const toggleSnackbar = (_payload: boolean) => {
    snackbar.value = _payload
  }

  return {
    pageLoading,
    sidebarOpen,
    snackbar,
    snackbarMessage,
    setSnackbar,
    toggleSnackbar,
    setPageLoading,
    setSidebarOpen,
    toggleSidebar,
  }
})
