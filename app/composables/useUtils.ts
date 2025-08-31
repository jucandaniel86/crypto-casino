import moment from 'moment'

export const useUtils = () => {
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

  return {
    wait,
    onImagesLoadingEnded,
    convertCurrency,
    convertDate,
  }
}
