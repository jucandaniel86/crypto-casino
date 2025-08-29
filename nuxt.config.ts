// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'CoinCasino',
    },
  },

  css: ['~/assets/css/app.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    'vuetify-nuxt-module',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],
  typescript: {
    typeCheck: true,
  },
  build: {
    transpile: ['vuetify'],
  },

  vuetify: {
    vuetifyOptions: './vuetify.config.ts',
  },

  pinia: {
    storesDirs: ['./core/store/**'],
  },

  ssr: false,
})
