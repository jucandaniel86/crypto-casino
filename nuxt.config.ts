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

  runtimeConfig: {
    public: {
      baseURL: process.env.API_URL || 'https://api.example.com/',
    },
  },

  plugins: [
    { src: './plugins/i18n', mode: 'client' },
    { src: './plugins/walletconnect', mode: 'client' },
    { src: './plugins/wagmi', mode: 'client' },
  ],

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
