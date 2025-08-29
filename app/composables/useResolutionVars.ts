import { useDisplay } from 'vuetify'
import type { ResolutionValuesType } from '~/core/types/TabsFetch'

export const useResolutionVars = (resolutionsConfig: ResolutionValuesType) => {
  const { name } = useDisplay()

  const style = computed(() => {
    switch (name.value) {
      case 'lg':
        return {
          '--aspect-ratio': resolutionsConfig.LG.aspectRatioPercentage,
          '--itemsPerRow': resolutionsConfig.LG.itemsPerRow,
        }
      case 'md':
        return {
          '--aspect-ratio': resolutionsConfig.MD.aspectRatioPercentage,
          '--itemsPerRow': resolutionsConfig.MD.itemsPerRow,
        }
      case 'sm':
        return {
          '--aspect-ratio': resolutionsConfig.SM.aspectRatioPercentage,
          '--itemsPerRow': resolutionsConfig.SM.itemsPerRow,
        }
      case 'xs':
        return {
          '--aspect-ratio': resolutionsConfig.XS.aspectRatioPercentage,
          '--itemsPerRow': resolutionsConfig.XS.itemsPerRow,
        }
      case 'xl':
        return {
          '--aspect-ratio': resolutionsConfig.XL.aspectRatioPercentage,
          '--itemsPerRow': resolutionsConfig.XL.itemsPerRow,
        }
      default:
        return {
          '--aspect-ratio': resolutionsConfig.LG.aspectRatioPercentage,
          '--itemsPerRow': resolutionsConfig.LG.itemsPerRow,
        }
    }
  })

  const itemsPerRow = computed(() => {
    switch (name.value) {
      case 'lg':
        return resolutionsConfig.LG.itemsPerRow
      case 'md':
        return resolutionsConfig.MD.itemsPerRow
      case 'sm':
        return resolutionsConfig.SM.itemsPerRow
      case 'xs':
        return resolutionsConfig.XS.itemsPerRow
      case 'xl':
        return resolutionsConfig.XL.itemsPerRow
      default:
        return resolutionsConfig.XL.itemsPerRow
    }
  })
  return {
    style,
    itemsPerRow,
  }
}
