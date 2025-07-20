import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/seo', '@nuxtjs/tailwindcss', '@nuxt/image'],
  ssr: true,
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      // Le titre et la description par défaut seront gérés par le module SEO via la config `site`
      // et `useSeoMeta` dans les pages individuelles.
      meta: [
        {
          name: 'description',
          content: 'Votre service de taxi de confiance aux Sables d\'Olonne et en Vendée.',
        },
        { name: 'theme-color', content: '#007bff' },
        // Les balises Open Graph et Twitter Card seront générées par le module SEO
        // si elles ne sont pas spécifiées via useSeoMeta dans les pages.
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon-48x48.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-256x256.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
    },
  },
  css: ['~/assets/css/accessibility.css'],
  site: {
    url: 'https://www.taxi-les-sables-olonne.fr',
    name: 'Taxi Les Sables d\'Olonne',
    description:
      'Votre service de taxi de confiance aux Sables d\'Olonne et en Vendée. Transport médical conventionné, liaisons gare-aéroport, courses locales et longues distances.',
    defaultLocale: 'fr', // default locale of your site
  },
  runtimeConfig: {
    emailSmtpHost: process.env.NUXT_EMAIL_SMTP_HOST,
    emailSmtpPort: process.env.NUXT_EMAIL_SMTP_PORT,
    emailSmtpUser: process.env.NUXT_EMAIL_SMTP_USER,
    emailSmtpPassword: process.env.NUXT_EMAIL_SMTP_PASSWORD,
    public: {
      emailSender: process.env.NUXT_PUBLIC_EMAIL_SENDER,
    },
  },
  compatibilityDate: '2025-05-15',
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
    experimental: {
      wasm: true
    },
    routeRules: {
      '/**': {
        headers: {
          'X-Powered-By': '',
        },
      },
    },
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      Poppins: [400, 500, 600, 700],
    },
    display: 'swap',
  },
  schemaOrg: {
    host: 'https://www.taxi-les-sables-olonne.fr',
    defaults: {
      // Désactiver les schemas par défaut pour éviter les doublons
      WebSite: false,
      Organization: false,
    },
  },
  seo: {
    // Options globales pour le module SEO
    // Activer le sitemap et robots.txt automatiques
    sitemap: {
      enabled: true,
      // Plus d\'options si nécessaire
    },
    robots: {
      enabled: true,
      // Plus d\'options si nécessaire
    },
    // Activer le vérificateur de liens (utile en dev/build)
    linkChecker: {
      enabled: true,
      // Plus d\'options si nécessaire
    },
  },
})
