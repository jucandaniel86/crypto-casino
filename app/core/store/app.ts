import type { MenuItemConfig } from '~/config/Menu.config'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const useAppStore = defineStore('app', () => {
  const pageLoading = ref(false)
  const sidebarOpen = ref(false)
  const snackbar = ref(false)
  const snackbarMessage = ref('')
  const sidebar = ref<MenuItemConfig[]>([])

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

  const setSidebar = (_payload: any) => {
    if (sidebar.value.length === 0) {
      sidebar.value = _payload
    }
  }

  return {
    pageLoading,
    sidebarOpen,
    snackbar,
    snackbarMessage,
    sidebar,
    setSnackbar,
    toggleSnackbar,
    setPageLoading,
    setSidebarOpen,
    toggleSidebar,
    setSidebar,
  }
})
