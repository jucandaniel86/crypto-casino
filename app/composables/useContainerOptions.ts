import type { ContainerType } from '~/core/types/Container'

const ALLOWED_STYLES: any = {
  margin: 'margin',
  alignItems: 'alignItems',
  justifyContent: 'justifyContent',
  gap: 'gap',
  background: 'background',
  backgroundColor: 'backgroundColor',
  padding: 'padding',
  width: 'width',
  border: 'border',
}

export const useContainerOptions = (options: ContainerType) => {
  const { name } = useDisplay()

  const currentOptions = computed(() => {
    switch (name.value) {
      case 'lg':
        return options.appearance.resolutionConfig.LG
      case 'md':
        return options.appearance.resolutionConfig.MD
      case 'sm':
        return options.appearance.resolutionConfig.SM
      case 'xl':
        return options.appearance.resolutionConfig.XL
      case 'xs':
        return options.appearance.resolutionConfig.XS
      default:
        return options.appearance.resolutionConfig.LG
    }
  })

  const display = computed(() => currentOptions.value.isVisible)
  const styles = computed(() => {
    const resOptions = currentOptions.value

    const style: Record<string, string> = {}
    Object.keys(resOptions).forEach((k) => {
      if (typeof ALLOWED_STYLES[k] !== 'undefined') {
        //@ts-ignore
        style[ALLOWED_STYLES[k]] = resOptions[k]
      }
    })

    Object.keys(options.data).forEach((k) => {
      if (typeof ALLOWED_STYLES[k] !== 'undefined') {
        style[ALLOWED_STYLES[k]] = options.data[k]
      }
    })
    console.log(style)
    return style
  })

  return {
    currentOptions,
    display,
    styles,
  }
}
