<template>
  <div class="pt-20 pb-16 bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-fade-in">
          <div
            class="inline-flex items-center px-4 py-2 bg-taxi-yellow/20 border border-taxi-yellow/30 rounded-full text-taxi-yellow text-sm font-medium mb-6"
          >
            <CurrencyEuroIcon class="h-4 w-4 mr-2" />
            Tarifs réglementés Vendée 2025
          </div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">
            Nos Tarifs Transparents
          </h1>
          <p class="text-xl lg:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Une tarification claire, réglementée et sans surprise pour l'ensemble de nos services.
          </p>
        </div>
      </div>
    </section>

    <!-- Grille de tarifs -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div
            v-for="(category, index) in pricingCategories"
            :key="index"
            class="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary-300/50 transition-all duration-300 animate-slide-up shadow-lg hover:shadow-xl flex flex-col"
            :style="`animation-delay: ${index * 0.1}s`"
          >
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-primary-100 rounded-xl">
                <component
                  :is="category.icon"
                  class="w-6 h-6 text-primary-600"
                />
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900">
                  {{ category.title }}
                </h3>
                <p class="text-sm text-gray-500">
                  {{ category.description }}
                </p>
              </div>
            </div>
            <div class="space-y-4 flex-grow">
              <div
                v-for="(price, priceIndex) in category.prices"
                :key="priceIndex"
                class="flex justify-between items-center border-b border-gray-100 pb-3 pt-1"
              >
                <span class="text-gray-800">{{ price.label }}</span>
                <span class="font-semibold text-primary-700 text-right">{{ price.price }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Contenu SEO -->
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">
            Une tarification juste pour votre taxi aux Sables d'Olonne
          </h2>
          <p class="text-gray-700 leading-relaxed">
            La transparence est au cœur de notre service. Que ce soit pour une course locale aux
            Sables d'Olonne, un
            <strong>transfert vers l'aéroport de Nantes</strong>
            ou un
            <strong>transport médical conventionné</strong>
            , nos tarifs sont clairs et conformes à la réglementation en vigueur en Vendée. Pour les
            trajets plus longs, n'hésitez pas à demander un
            <strong>devis pour votre taxi toutes distances</strong>
            . Nous vous fournirons un prix fixe et garanti, sans aucun frais caché. Votre confiance
            est notre priorité.
          </p>
        </div>

        <!-- Informations importantes -->
        <div class="bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-lg">
          <div class="text-center">
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">
              Votre Sérénité, Notre Priorité
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div class="flex items-start gap-3">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div class="text-left">
                  <p class="font-medium text-gray-800">
                    Paiements Acceptés
                  </p>
                  <p class="text-sm text-gray-600">
                    Espèces et toutes cartes bancaires.
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div class="text-left">
                  <p class="font-medium text-gray-800">
                    Facturation Professionnelle
                  </p>
                  <p class="text-sm text-gray-600">
                    Facture détaillée sur demande pour vos notes de frais.
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div class="text-left">
                  <p class="font-medium text-gray-800">
                    Transport Conventionné
                  </p>
                  <p class="text-sm text-gray-600">
                    Agréé CPAM. Le tiers payant est appliqué selon vos droits.
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div class="text-left">
                  <p class="font-medium text-gray-800">
                    Devis Gratuit
                  </p>
                  <p class="text-sm text-gray-600">
                    Pour les longues distances, demandez un devis fixe et garanti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-primary-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
          Besoin d'un devis personnalisé ?
        </h2>
        <p class="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Contactez-nous pour obtenir un devis gratuit et sans engagement pour votre trajet.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:0668314690"
            class="inline-flex items-center px-8 py-4 bg-taxi-yellow hover:bg-taxi-yellow-hover text-gray-900 font-bold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <PhoneIcon class="h-5 w-5 mr-2" />
            Appeler pour un devis
          </a>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 border-2 border-white text-primary-600 font-semibold rounded-xl transition-all duration-200"
          >
            Demander en ligne
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  PhoneIcon,
  CurrencyEuroIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  MapPinIcon,
  InformationCircleIcon,
} from '@heroicons/vue/24/outline'
import { defineOffer } from 'nuxt-schema-org/schema'

const pricingCategories = [
  {
    icon: ShieldCheckIcon,
    title: 'Tarifs Réglementés',
    description: 'Conformes à l\'arrêté préfectoral de la Vendée.',
    prices: [
      { label: 'Prise en charge', price: '2,90 €' },
      { label: 'Tarif A (jour, semaine)', price: '2,16 € / km' },
      { label: 'Tarif B (nuit, dimanche)', price: '3,24 € / km' },
      { label: 'Heure d\'attente', price: '29,44 €' },
    ],
  },
  {
    icon: MapPinIcon,
    title: 'Forfaits Aéroports',
    description: 'Prix fixes, sans surprise, jour et nuit.',
    prices: [
      { label: 'Nantes Atlantique (NTE)', price: 'dès 230 €' },
      { label: 'La Rochelle-Île de Ré (LRH)', price: 'dès 220 €' },
      { label: 'Autres destinations', price: 'Devis sur demande' },
    ],
  },
  {
    icon: InformationCircleIcon,
    title: 'Informations Utiles',
    description: 'Ce qui est inclus dans nos prestations.',
    prices: [
      { label: 'Bagages (2 par pers.)', price: 'Inclus' },
      { label: 'Péages sur trajet', price: 'Inclus' },
      { label: 'Attente gare/aéroport', price: 'Inclus (15 min)' },
    ],
  },
]

// Schema.org Offer pour la page tarifs
useSchemaOrg([
  defineOffer({
    '@type': 'Offer',
    'name': 'Tarifs Taxi Les Sables d\'Olonne',
    'description': 'Tarifs réglementés et forfaits fixes pour tous nos services de transport. Prix transparents conformes à la réglementation Vendée.',
    'url': 'https://www.taxi-les-sables-olonne.fr/tarifs',
    'priceCurrency': 'EUR',
    'priceRange': '2.90-230',
    'validFrom': '2025-01-01',
    'validThrough': '2025-12-31',
    'seller': {
      '@type': 'LocalBusiness',
      'name': 'Taxi Les Sables d\'Olonne',
      'telephone': '+33668314690',
      'url': 'https://www.taxi-les-sables-olonne.fr',
    },
    'itemOffered': [
      {
        '@type': 'Service',
        'name': 'Transport local réglementé',
        'description': 'Tarifs officiels Vendée : prise en charge 2,90€, tarif A 2,16€/km, tarif B 3,24€/km',
      },
      {
        '@type': 'Service',
        'name': 'Forfait Aéroport Nantes',
        'description': 'Transfert vers aéroport Nantes Atlantique',
        'offers': {
          '@type': 'Offer',
          'price': '230',
          'priceCurrency': 'EUR',
          'description': 'Prix fixe dès 230€',
        },
      },
      {
        '@type': 'Service',
        'name': 'Forfait Aéroport La Rochelle',
        'description': 'Transfert vers aéroport La Rochelle-Île de Ré',
        'offers': {
          '@type': 'Offer',
          'price': '220',
          'priceCurrency': 'EUR',
          'description': 'Prix fixe dès 220€',
        },
      },
      {
        '@type': 'Service',
        'name': 'Transport médical conventionné',
        'description': 'Prise en charge CPAM selon droits et prescription médicale',
      },
    ],
    'paymentAccepted': ['Cash', 'CreditCard'],
    'priceValidUntil': '2025-12-31',
    'areaServed': {
      '@type': 'City',
      'name': 'Les Sables d\'Olonne',
      'addressCountry': 'FR',
    },
  }),
])

useSeoMeta({
  title: 'Tarifs Taxi Les Sables d\'Olonne - Prix réglementés Vendée 2025',
  description:
      'Consultez les tarifs de votre taxi aux Sables d\'Olonne. Prix au km, forfaits aéroports Nantes et La Rochelle, et devis gratuit pour toutes distances en Vendée.',
})
</script>
