// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  googleFonts: {
    families: {
      'Inter': [400, 500, 600, 700],
      'Poppins': [400, 500, 600, 700]
    },
    display: 'swap'
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Taxi Les Sables d\'Olonne - Service 24h/24 en Vendée',
      meta: [
        { name: 'description', content: 'Taxi Les Sables d\'Olonne - Service 24h/24 en Vendée. Transport médical conventionné, liaisons gare-aéroport. Réservation 06 68 31 46 90. Place Napoléon III.' },
        { name: 'keywords', content: 'taxi les sables olonne, taxi sables d olonne, taxi vendée, transport médical sables olonne, gare sables olonne, aéroport nantes taxi' },
        { name: 'theme-color', content: '#007bff' },
        { property: 'og:title', content: 'Taxi Les Sables d\'Olonne - Service 24h/24 en Vendée' },
        { property: 'og:description', content: 'Taxi Les Sables d\'Olonne - Service 24h/24. Transport médical conventionné, liaisons gare-aéroport. 06 68 31 46 90.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon-48x48.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-256x256.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  },
  css: [
    '~/assets/css/accessibility.css'
  ]
})
