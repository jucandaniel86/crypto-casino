export const SIDEBAR_CONFIG = {
  container: 'NestableNavigationContainer',
  data: {
    iconParams: {
      size: 'medium',
      color: '#e0e6ff',
    },
    navigation: [
      {
        iconCode: 'casino2',
        id: '116fecc0-808a-4a70-952a-bfbcc0a745a8',
        type: 'ACTION',
        chipType: 'LEFT',
        action: {
          type: 'OPEN_INTERNAL_PAGE',
          slug: '/casino',
        },
        title: 'Casino',
      },
      {
        iconCode: 'slots2',
        id: 'c566435a-780c-4708-98da-2ffde6f8f7f6',
        type: 'ACTION',
        action: {
          type: 'OPEN_INTERNAL_PAGE',
          slug: '/slots',
        },
        title: 'Slots',
      },
      {
        iconCode: 'live-casino2',
        id: '973b00cc-4b12-4d70-a5ed-2e1298b9de32',
        type: 'ACTION',
        action: {
          type: 'OPEN_INTERNAL_PAGE',
          slug: '/live-casino',
        },
        title: 'Live Casino',
      },
      {
        iconCode: 'game-show2',
        id: '7aae6fb1-e90a-4bfe-a94c-0a877aea5dc2',
        type: 'ACTION',
        action: {
          type: 'OPEN_INTERNAL_PAGE',
          slug: '/game-shows',
        },
        title: 'Game Shows',
      },
      {
        iconCode: 'crashgames2',
        id: 'd9c87267-8fc0-422b-9003-8ebe31592896',
        type: 'ACTION',
        action: {
          type: 'OPEN_INTERNAL_PAGE',
          slug: '/casual-games',
        },
        title: 'Casual Games',
      },
      {
        id: '569c115c-9054-4003-855c-c0da39881051',
        type: 'DIVIDER',
      },
      {
        iconCode: 'sports2',
        id: 'da4fd068-6b13-4af0-b697-426e463d86f2',
        type: 'ACTION',
        children: [
          {
            iconCode: 'sports2',
            id: 'ce6a06dc-cd47-47fd-b72b-595334634f4b',
            type: 'ACTION',
            action: {
              type: 'OPEN_INTERNAL_PAGE',
              slug: '/sports',
            },
            title: 'All Sports',
          },
          {
            iconCode: 'football2',
            id: '02fc330e-2753-4cf6-bfc5-e459da7c0daa',
            type: 'ACTION',
            action: {
              type: 'OPEN_INTERNAL_PAGE',
              slug: '/sports?bt-path=%2Fsoccer-1',
            },
            title: 'Football',
          },
          {
            iconCode: 'tennis2',
            id: '2afef28f-088f-4aec-a8f5-abe2992232fe',
            type: 'ACTION',
            action: {
              type: 'OPEN_INTERNAL_PAGE',
              slug: '/sports?bt-path=%2Ftennis-5',
            },
            title: 'Tennis',
          },
          {
            iconCode: 'basketball2',
            id: 'c77baa9e-8ed5-4a81-a9a2-87863462148d',
            type: 'ACTION',
            action: {
              type: 'OPEN_INTERNAL_PAGE',
              slug: '/sports?bt-path=%2Fbasketball-2',
            },
            title: 'Basketball',
          },
          {
            iconCode: 'e-sports2',
            id: 'c801a5d1-f01b-45d6-b673-f30a14a8fb66',
            type: 'ACTION',
            action: {
              type: 'OPEN_INTERNAL_PAGE',
              slug: '/sports?bt-path=%2Fe_sport',
            },
            title: 'eSports',
          },
        ],
        chipType: 'RIGHT',
        action: {
          type: 'OPEN_INTERNAL_PAGE',
          slug: '/sports',
        },
        title: 'Sports',
      },
      {
        iconCode: 'in-play2',
        id: '3ae7e7fd-30e6-4935-ab09-dd274c1adc2d',
        type: 'ACTION',
        action: {
          type: 'OPEN_INTERNAL_PAGE',
          slug: '/sports?bt-path=%2Flive',
        },
        title: 'In Play',
      },
      {
        iconCode: 'my-bets22',
        id: 'bce59441-94f9-4bfb-9e7e-31d12dd12e9d',
        type: 'ACTION',
        action: {
          type: 'OPEN_INTERNAL_PAGE',
          slug: '/sports?bt-path=%2Fbets',
        },
        title: 'My Bets',
      },
      {
        iconCode: 'favorite',
        id: 'cf5226b8-9e08-4238-a086-bfdefbd45bb6',
        type: 'ACTION',
        action: {
          type: 'OPEN_INTERNAL_PAGE',
          slug: '/sports?bt-path=%2Ffavorites',
        },
        title: 'Favourites',
      },
      {
        id: 'c0acfd16-36f4-46b9-91c0-24f296aa9555',
        type: 'DIVIDER',
      },
      {
        iconCode: 'promotions2',
        id: '5ed9875c-5525-4bda-955d-db23e876a0f7',
        type: 'ACTION',
        action: {
          type: 'OPEN_INTERNAL_PAGE',
          slug: '/promotions',
        },
        title: 'Promotions',
      },
      {
        iconCode: 'telegram',
        id: '040e1dde-3b72-40a4-aa51-e5fcbb8c378b',
        type: 'ACTION',
        action: {
          type: 'OPEN_EXTERNAL_PAGE',
          url: 'https://t.me/coincasinotgbot',
          inSameTab: false,
          noFollow: false,
        },
        title: 'Telegram Casino',
      },
      {
        iconCode: 'buy-crypto2',
        id: '40a8b2ad-96dc-42fe-adbd-631b3214f28b',
        type: 'ACTION',
        action: {
          type: 'OPEN_INTERNAL_PAGE',
          slug: '/buy-crypto',
        },
        title: 'Buy Crypto',
      },
      {
        iconCode: 'faq',
        id: '292bd599-50d4-4092-9abe-151b4caefdc1',
        type: 'ACTION',
        action: {
          type: 'OPEN_INTERNAL_PAGE',
          slug: '/help',
        },
        title: 'Help',
      },
    ],
    navigationType: 'MAIN',
    verticalOriented: null,
    resolutionConfig: {
      XS: {
        viewType: 'ICON',
      },
      SM: {
        viewType: 'ICON',
      },
      MD: {
        viewType: 'ICON_TITLE',
      },
      LG: {
        viewType: 'ICON_TITLE',
      },
      XL: {
        viewType: 'ICON_TITLE',
      },
    },
  },
  id: '1388877e-0e92-42d6-a798-27a36f364a65',
  children: [],
  appearance: {
    resolutionConfig: {
      XS: {
        background: {},
        isVisible: true,
      },
      SM: {
        background: {},
        isVisible: true,
      },
      MD: {
        background: {},
        isVisible: true,
      },
      LG: {
        background: {},
        isVisible: true,
      },
      XL: {
        background: {},
        isVisible: true,
      },
    },
  },
}
