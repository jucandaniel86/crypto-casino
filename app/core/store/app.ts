export const useAppStore = defineStore('app', () => {
  const pageLoading = ref(false)
  const sidebarOpen = ref(false)

  const setPageLoading = (loading: boolean) => {
    pageLoading.value = loading
  }

  const setSidebarOpen = (payload: boolean) => {
    sidebarOpen.value = payload
  }

  const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value
  }

  return {
    pageLoading,
    sidebarOpen,
    setPageLoading,
    setSidebarOpen,
    toggleSidebar,
  }
})
