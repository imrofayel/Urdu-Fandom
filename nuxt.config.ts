import { navbarData, seoData } from './data'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: navbarData.homeTitle,
      titleTemplate: `%s - ${navbarData.homeTitle}`,
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },

  site: {
    url: seoData.mySite,
    identity: {
      type: 'Person',
    },
    twitter: seoData.twitterHandle,
  },

  typescript: {
    strict: true,
  },

  ssr: false,

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ],
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },

  modules: [
    'nuxt-icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/fontaine',
    '@nuxtjs/color-mode',
    'nuxt-simple-sitemap',
    '@nuxtjs/tailwindcss',
    '@stefanobartoletti/nuxt-social-share',
    "@nuxthq/studio",
    "@nuxt/fonts"
  ],

  content: {
    highlight: {
      theme: {
        default: "light-plus",
        dark: "github-dark",
      },

      langs: [
        'c', 'cpp', 'java', 'dart', 'c#', 'py', 'python'
      ]
    },

    experimental: {
      search: {
      }
    }
  },

  devtools: {
    enabled: true,
  },

  css: [
    'assets/css/fonts.css'
  ],

  compatibilityDate: '2024-08-04',
})