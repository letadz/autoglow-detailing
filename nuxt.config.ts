// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  app: {
    head: {
      title: 'AutoGlow Detailing — Premium Luxury Automotive Care',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'AutoGlow Detailing offers bespoke automotive detailing, ceramic coatings, paint correction, and luxury vehicle preservation.'
        },
        { name: 'theme-color', content: '#0A0A0A' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap'
        }
      ]
    }
  },
  image: {
    quality: 85,
    format: ['webp']
  }
})
