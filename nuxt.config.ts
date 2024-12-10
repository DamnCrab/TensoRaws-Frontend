// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@formkit/auto-animate',
    'dayjs-nuxt',
    'nuxt-lodash',
    '@primevue/nuxt-module',
    '@nuxt/eslint'
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  },
  i18n: {
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'zh', language: 'zh-CN' }
    ],
    defaultLocale: 'zh',
  }
})
