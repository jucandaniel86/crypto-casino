export type MenuItemConfig = {
  type?: string
  title: string
  icon: string
  class?: string
  path?: string
  linkName: string
}
export const APP_MENU_CONFIG: MenuItemConfig[] = [
  {
    title: 'Casino',
    icon: 'brand-ico-casino2',
    linkName: 'casino',
  },
  {
    title: 'Slots',
    icon: 'brand-ico-slots2',
    linkName: 'slots',
  },
  {
    title: 'Live Casino',
    icon: 'brand-ico-live-casino2',
    linkName: 'live-casino',
  },
  {
    title: 'Game Shows',
    icon: 'brand-ico-game-show2',
    linkName: 'game-shows',
  },
  {
    title: 'Casual Games',
    icon: 'brand-ico-crashgames2',
    linkName: 'casual-games',
  },
  { type: 'divider', title: '', icon: '', linkName: '' },
  {
    title: 'Sports',
    icon: 'brand-ico-sports2',
    linkName: 'sports',
  },
  {
    title: 'My Bets',
    icon: 'brand-ico-my-bets22',
    linkName: 'my-bets',
  },
  {
    title: 'Favourites',
    icon: 'brand-ico-favorite',
    linkName: 'favourites',
  },
  { type: 'divider', title: '', icon: '', linkName: '' },
  {
    title: 'Promotions',
    icon: 'brand-ico-promotions2',
    linkName: 'promotions',
  },
  {
    title: 'Telegram Casino',
    icon: 'brand-ico-telegram',
    linkName: 'telegram-casino',
  },
  {
    title: 'Buy Crypto',
    icon: 'brand-ico-buy-crypto2',
    linkName: 'buy-crypto',
  },
  {
    title: 'Help',
    icon: 'brand-ico-faq',
    linkName: 'help',
  },
]
