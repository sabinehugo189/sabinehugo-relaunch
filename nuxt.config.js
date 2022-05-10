import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['@vueuse/nuxt'],
  typescript: {
    shim: false,
  },
  ssr: false,
  nitro: {
    prerender: {
      routes: ['/form'],
    },
  },
});
