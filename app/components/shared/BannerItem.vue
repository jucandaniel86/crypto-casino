<!-- eslint-disable vue/no-dupe-keys -->
<script setup lang="ts">
//types
type ContentRulesType = {
  alignment: string
  bannerTextFontShadow: boolean
  headingFontSize: number
  imageUrl: string
  secondaryFontSize: number
  verticalAlignment: number
}

type BannerItemButton = {
  loggedOutVisible: boolean
  overlayClass: string
  overlayParams: string
  type: string
}

export type BannerItem = {
  contentRules: {
    LG: ContentRulesType
    MD: ContentRulesType
    SM: ContentRulesType
    XL: ContentRulesType
    XS: ContentRulesType
  }
  name: string
  primaryCta: BannerItemButton
  type: string
}

const { name } = useDisplay()
const props = defineProps<{ option: BannerItem }>()

const currentImage = computed(() => {
  switch (name.value) {
    case 'lg':
      return props.option.contentRules.LG.imageUrl
    case 'md':
      return props.option.contentRules.MD.imageUrl
    case 'sm':
      return props.option.contentRules.SM.imageUrl
    case 'xl':
      return props.option.contentRules.XL.imageUrl
    case 'xs':
      return props.option.contentRules.XS.imageUrl
    default:
      return props.option.contentRules.LG.imageUrl
  }
})
</script>
<template>
  <div>
    <v-img :src="currentImage" />
  </div>
</template>
