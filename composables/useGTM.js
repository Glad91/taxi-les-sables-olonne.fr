// Composable pour Google Tag Manager
export const useGTM = () => {
  // Envoyer un événement personnalisé
  const trackEvent = (eventName, parameters = {}) => {
    if (import.meta.client && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...parameters,
      })
    }
  }

  // Tracker les clics sur les boutons d'appel
  const trackCall = (source = 'unknown') => {
    trackEvent('phone_call', {
      event_category: 'engagement',
      event_label: source,
      phone_number: '0668314690',
    })
  }

  // Tracker les soumissions de formulaire
  const trackFormSubmission = (formName, success = true) => {
    trackEvent('form_submission', {
      event_category: 'form',
      event_label: formName,
      success: success,
    })
  }

  // Tracker les pages vues
  const trackPageView = (pageName) => {
    trackEvent('page_view', {
      event_category: 'navigation',
      page_name: pageName,
    })
  }

  // Tracker les clics sur les services
  const trackServiceClick = (serviceName, source = 'unknown') => {
    trackEvent('service_interest', {
      event_category: 'engagement',
      service_type: serviceName,
      source: source,
    })
  }

  // Tracker les demandes de devis
  const trackQuoteRequest = (serviceType, method = 'form') => {
    trackEvent('quote_request', {
      event_category: 'lead_generation',
      service_type: serviceType,
      method: method,
    })
  }

  // Tracker la navigation vers les tarifs
  const trackPricingView = (source = 'unknown') => {
    trackEvent('pricing_interest', {
      event_category: 'engagement',
      source: source,
    })
  }

  // Tracker les réservations tentées
  const trackBookingAttempt = (method, serviceType = 'general') => {
    trackEvent('booking_attempt', {
      event_category: 'conversion',
      method: method, // 'phone', 'form'
      service_type: serviceType,
    })
  }

  return {
    trackEvent,
    trackCall,
    trackFormSubmission,
    trackPageView,
    trackServiceClick,
    trackQuoteRequest,
    trackPricingView,
    trackBookingAttempt,
  }
}
