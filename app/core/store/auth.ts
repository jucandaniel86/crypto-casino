export const useAuthStore = defineStore(
  'auth',
  () => {
    const isLogged = ref<boolean>(false)

    const login = () => {
      isLogged.value = true
    }

    const logout = () => {
      isLogged.value = false
    }

    return {
      isLogged,
      login,
      logout,
    }
  },
  {
    persist: true,
  },
)
