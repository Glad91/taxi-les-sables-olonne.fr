/* global defineNuxtPlugin, useRuntimeConfig */
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const gtmId = config.public.gtmId

  // Ne charge GTM que si l'ID est défini et n'est pas l'exemple
  if (!gtmId || gtmId === 'GTM-XXXXXXX') {
    // eslint-disable-next-line no-console
    console.warn('GTM ID non configuré. Ajoutez NUXT_GTM_ID dans votre fichier .env')
    return
  }

  // Initialiser le dataLayer
  window.dataLayer = window.dataLayer || []

  function gtag(...args) {
    window.dataLayer.push(args)
  }

  // Configuration initiale
  gtag('js', new Date())
  gtag('config', gtmId, {
    send_page_view: false, // Nous gérons les page views manuellement
  })

  // Injecter le script GTM
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gtmId}`
  document.head.appendChild(script)

  // Ajouter gtag à l'objet global pour debug
  if (process.env.NODE_ENV === 'development') {
    window.gtag = gtag
    // eslint-disable-next-line no-console
    console.log('GTM initialisé en mode debug', gtmId)
  }
})
