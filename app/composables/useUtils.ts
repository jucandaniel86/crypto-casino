import moment from 'moment'
import { useAuthStore } from '~/core/store/auth'
import { OverlaysTypes } from '~/core/types/Overlays'

export const useUtils = () => {
  const router = useRouter()

  const wait = (duration: number) => new Promise((resolve) => setTimeout(resolve, duration))

  const onImagesLoadingEnded = () => {
    return Promise.all(
      Array.from(document.images)
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise((resolve) => {
              img.onload = img.onerror = resolve
            }),
        ),
    )
  }

  const convertCurrency = (amount: number, decimals = 8) => {
    return Number(amount).toFixed(decimals)
  }

  const convertDate = (date: string, format = 'MMM DD YYYY HH:mm') => {
    return moment(date).format(format)
  }

  const openOverlay = (overlay: OverlaysTypes) => {
    const { isLogged } = useAuthStore()

    if (!isLogged && overlay === OverlaysTypes.WALLET) {
      return router.replace({ query: { overlay: OverlaysTypes.LOGIN } })
    }

    return router.replace({ query: { overlay } })
  }

  return {
    wait,
    onImagesLoadingEnded,
    convertCurrency,
    convertDate,
    openOverlay,
  }
}
