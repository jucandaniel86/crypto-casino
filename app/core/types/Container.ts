/* eslint-disable @typescript-eslint/no-explicit-any */
export enum ContainerSection {
  BANNER = 'BannerContainer',
  SLIDER = 'SliderContainer',
  COLUMN = 'ColumnContainer',
  GAMES_CATEGORY = 'GamesCategoryContainer',
  FLEX_COLUMN = 'FlexColumnContainer',
  CAROUSEL = 'CarouselContainer',
  HTML = 'HTMLContainer',
  BET_FEED = 'BetFeedContainer',
  SEO = 'SeoContainer',
  LOGOS = 'LogosContainer',
  SEARCH = 'CasinoSearchContainer',
  TABS = 'TabContainer',
  PROVIDER_LOGOS = 'ProviderLogosContainer',
  CATEGORY_HEADLESS = 'GamesCategoryHeadlessContainer',
  ACCORDION = 'AccordionContainer',
}

export type ResolutionConfig = {
  isVisible: boolean
  background?: string
}

export type ContainerResolutionConfig = {
  LG: ResolutionConfig
  MD: ResolutionConfig
  SM: ResolutionConfig
  XL: ResolutionConfig
  XS: ResolutionConfig
}

export type ContainerType = {
  id: string
  container: ContainerSection
  children: ContainerType[]
  appearance: {
    resolutionConfig: ContainerResolutionConfig
  }
  data: any
}
