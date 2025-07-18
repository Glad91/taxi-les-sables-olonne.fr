<template>
  <div class="pt-20 pb-16 bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-amber-500 to-amber-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-fade-in">
          <div
            class="inline-flex items-center px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm font-medium mb-6"
          >
            <TruckIcon class="h-4 w-4 mr-2" />
            Ponctualité et Sérénité Garanties
          </div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">
            Navette Gare & Aéroport
          </h1>
          <p class="text-xl lg:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Vos transferts depuis Les Sables d'Olonne vers la Gare SNCF et l'Aéroport de Nantes
            Atlantique.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0668314690"
              class="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
              aria-label="Réserver une navette au 06 68 31 46 90"
            >
              <PhoneIcon
                class="h-5 w-5 mr-2"
                aria-hidden="true"
              />
              Réserver une navette
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contenu principal -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Colonne de gauche : Image -->
        <div
          class="relative h-96 lg:h-auto lg:aspect-w-1 lg:aspect-h-1 rounded-2xl overflow-hidden shadow-2xl"
        >
          <NuxtImg
            src="/images/gare-sables-olonne-batiment.webp"
            alt="Bâtiment voyageurs de la gare SNCF des Sables d'Olonne"
            class="w-full h-full object-cover"
            width="1200"
            height="800"
            placeholder
          />
        </div>

        <!-- Colonne de droite : Description -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Voyagez l'esprit tranquille
          </h2>
          <p class="text-gray-700 mb-4">
            Évitez le stress des transports en commun et le coût des parkings longue durée. Notre
            service de navette taxi vous assure un trajet
            <strong>direct, rapide et confortable</strong>
            vers votre gare ou aéroport de départ.
          </p>

          <h3 class="text-xl font-bold text-gray-900 mb-4">
            Nos engagements pour vos transferts
          </h3>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <CheckIcon class="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
              <span>
                <strong>Ponctualité :</strong>
                Nous suivons les horaires de votre train ou vol en temps réel pour nous adapter à
                tout changement.
              </span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
              <span>
                <strong>Accueil personnalisé :</strong>
                Nous vous attendons avec une pancarte à votre nom à la sortie du terminal ou sur le
                quai.
              </span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
              <span>
                <strong>Bagages :</strong>
                Nous vous aidons à porter vos bagages et disposons de véhicules spacieux.
              </span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
              <span>
                <strong>Tarif fixe :</strong>
                Le prix est convenu à l'avance, sans surprise, même en cas de trafic dense.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PhoneIcon, TruckIcon, CheckIcon } from '@heroicons/vue/24/outline'

// Schema.org Service pour la page navette aéroport gare
useSchemaOrg([
  {
    '@type': 'Service',
    'name': 'Navette Gare & Aéroport',
    'description':
        'Service de navette taxi spécialisé vers gares SNCF et aéroports. Tarifs fixes, ponctualité garantie et suivi en temps réel.',
    'url': 'https://www.taxi-les-sables-olonne.fr/navette-aeroport-gare',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Taxi Les Sables d\'Olonne',
      'telephone': '+33668314690',
      'url': 'https://www.taxi-les-sables-olonne.fr',
    },
    'serviceType': ['Navette aéroport', 'Navette gare'],
    'areaServed': [
      'Les Sables d\'Olonne',
      'Aéroport Nantes Atlantique',
      'Gare SNCF Les Sables d\'Olonne',
      'Gare TGV La Roche-sur-Yon',
    ],
    'availableService': [
      'Transfert aéroport Nantes',
      'Transfert gare SNCF',
      'Suivi horaires temps réel',
      'Accueil personnalisé',
      'Aide aux bagages',
    ],
    'serviceOutput': {
      '@type': 'Service',
      'name': 'Transport sécurisé et ponctuel',
      'description': 'Arrivée garantie à l\'heure pour vos vols et trains',
    },
    'offers': [
      {
        '@type': 'Offer',
        'name': 'Navette Aéroport Nantes',
        'description': 'Transfert vers/depuis aéroport Nantes Atlantique',
        'price': '230',
        'priceCurrency': 'EUR',
        'seller': {
          '@type': 'LocalBusiness',
          'name': 'Taxi Les Sables d\'Olonne',
        },
      },
      {
        '@type': 'Offer',
        'name': 'Navette Gare SNCF',
        'description': 'Transfert vers/depuis gares SNCF et TGV',
        'priceCurrency': 'EUR',
        'seller': {
          '@type': 'LocalBusiness',
          'name': 'Taxi Les Sables d\'Olonne',
        },
      },
    ],
  },
])

useSeoMeta({
  title: 'Navette Gare & Aéroport - Taxi Les Sables d\'Olonne',
  description:
      'Service de navette taxi pour la gare SNCF des Sables d\'Olonne et l\'aéroport de Nantes. Tarif fixe, ponctualité et confort. Réservez au 06 68 31 46 90.',
})
</script>
