<template>
  <div class="pt-20 pb-16 bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-fade-in">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">
            Nos Services de Transport
          </h1>
          <p class="text-xl lg:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Un service complet adapté à tous vos besoins de déplacement aux Sables d'Olonne et en
            Vendée
          </p>
          <div
            class="inline-flex items-center px-6 py-3 bg-taxi-yellow/20 border border-taxi-yellow/30 rounded-full text-taxi-yellow font-semibold"
          >
            <span class="w-2 h-2 bg-taxi-yellow rounded-full mr-2 animate-pulse" />
            Disponible 24h/24 - 7j/7
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <NuxtLink
            v-for="(service, index) in services"
            :key="service.title"
            :to="service.href"
            class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up block"
            :style="`animation-delay: ${index * 0.1}s`"
          >
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <component
                    :is="service.icon"
                    class="h-8 w-8 text-white"
                  />
                </div>
              </div>
              <div class="flex-grow">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ service.title }}</h3>
                <p class="text-gray-700 leading-relaxed mb-6">{{ service.description }}</p>
                <ul class="space-y-2">
                  <li
                    v-for="feature in service.features"
                    :key="feature"
                    class="flex items-center text-gray-700"
                  >
                    <CheckIcon class="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
                <div
                  v-if="service.badge"
                  class="mt-4"
                >
                  <span
                    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                  >
                    <ShieldCheckIcon class="h-4 w-4 mr-1" />
                    {{ service.badge }}
                  </span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Avantages Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir nos services ?
          </h2>
          <p class="text-xl text-gray-700">
            Les garanties de votre taxi de confiance
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(advantage, index) in advantages"
            :key="advantage.title"
            class="text-center group animate-slide-up"
            :style="`animation-delay: ${index * 0.1}s`"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <component
                :is="advantage.icon"
                class="h-10 w-10 text-primary-600"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              {{ advantage.title }}
            </h3>
            <p class="text-gray-700">
              {{ advantage.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Zone de couverture -->
    <section class="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-fade-in">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Notre zone de
              <span class="text-primary-600">couverture</span>
            </h2>
            <p class="text-lg text-gray-700 mb-8">
              Nous desservons Les Sables d'Olonne et toute la région vendéenne avec des liaisons
              vers les principales destinations.
            </p>

            <div class="grid grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">
                  Zone locale
                </h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Les Sables d'Olonne</li>
                  <li>• Olonne-sur-Mer</li>
                  <li>• Château d'Olonne</li>
                  <li>• La Chaume</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">
                  Longues distances
                </h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• La Roche-sur-Yon</li>
                  <li>• Nantes</li>
                  <li>• Challans</li>
                  <li>• Luçon</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="relative animate-fade-in">
            <div class="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              <NuxtImg
                src="/images/sables-olonne-port-real.jpg"
                alt="Port des Sables d'Olonne avec bateaux de pêche"
                class="w-full h-full object-cover"
                width="800"
                height="400"
                placeholder
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div class="absolute bottom-4 left-4 text-white">
                <div class="text-sm font-medium">
                  📍 Les Sables d'Olonne, Vendée
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
          Prêt à réserver votre course ?
        </h2>
        <p class="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Contactez-nous dès maintenant pour tous vos besoins de transport. Service rapide et
          professionnel garanti.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:0668314690"
            class="inline-flex items-center px-8 py-4 bg-taxi-yellow hover:bg-taxi-yellow-hover text-gray-900 font-bold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            aria-label="Appeler le taxi au 06 68 31 46 90"
          >
            <PhoneIcon
              class="h-5 w-5 mr-2"
              aria-hidden="true"
            />
            06 68 31 46 90
          </a>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center px-8 py-4 bg-white/20 hover:bg-white/30 border-2 border-white/40 text-white font-semibold rounded-xl transition-all duration-200 backdrop-blur-sm"
            aria-label="Aller au formulaire de contact"
          >
            Formulaire de contact
            <ArrowRightIcon
              class="h-5 w-5 ml-2"
              aria-hidden="true"
            />
          </NuxtLink>
          <NuxtLink
            to="/tarifs"
            class="inline-flex items-center px-8 py-4 bg-white/20 hover:bg-white/30 border-2 border-white/40 text-white font-semibold rounded-xl transition-all duration-200 backdrop-blur-sm"
            aria-label="Consulter la page des tarifs"
          >
            Voir nos tarifs
            <CurrencyEuroIcon
              class="h-5 w-5 ml-2"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  PhoneIcon,
  ArrowRightIcon,
  CheckIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyEuroIcon,
  TruckIcon,
  BuildingOffice2Icon,
  HeartIcon,
  MapPinIcon,
} from '@heroicons/vue/24/outline'

const services = [
  {
    icon: HeartIcon,
    title: 'Transport Médical Conventionné',
    description:
        'Transport médical agréé par l\'Assurance Maladie. Prise en charge selon prescription médicale vers tous établissements de santé.',
    features: [
      'Conventionné toutes caisses CPAM',
      'Aide à la montée/descendre',
      'Véhicules adaptés PMR disponibles',
      'Facturation directe possible',
    ],
    badge: 'Conventionné CPAM',
    href: '/transport-medical',
  },
  {
    icon: BuildingOffice2Icon,
    title: 'Liaison Gare-Aéroport',
    description:
        'Service spécialisé pour vos transferts vers les gares et aéroports. Suivi des horaires en temps réel pour garantir votre ponctualité.',
    features: [
      'Suivi des horaires de trains/vols',
      'Accueil personnalisé en gare',
      'Véhicules spacieux pour bagages',
      'Service de réservation à l\'avance',
    ],
    href: '/navette-aeroport-gare',
  },
  {
    icon: TruckIcon,
    title: 'Transport Local',
    description:
        'Déplacements dans Les Sables d\'Olonne et communes voisines. Idéal pour vos trajets quotidiens, courses, rendez-vous médicaux et sorties.',
    features: [
      'Prise en charge immédiate ou programmée',
      'Trajets optimisés en temps réel',
      'Tarifs réglementés transparents',
      'Véhicules climatisés et confortables',
    ],
    href: '/contact',
  },
  {
    icon: MapPinIcon,
    title: 'Longues Distances',
    description:
        'Transport vers La Roche-sur-Yon, Nantes, et autres destinations régionales. Tarification préférentielle pour les trajets réguliers.',
    features: [
      'Devis gratuit sur demande',
      'Tarifs dégressifs clients réguliers',
      'Réservation jusqu\'à 30 jours à l\'avance',
      'Suivi en temps réel du trajet',
    ],
    href: '/contact',
  },
]

const advantages = [
  {
    icon: ClockIcon,
    title: 'Service 24h/24',
    description: 'Disponible jour et nuit, même les week-ends et jours fériés.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Chauffeur Agréé',
    description: 'Chauffeur professionnel licencié avec carte professionnelle VTC.',
  },
  {
    icon: CurrencyEuroIcon,
    title: 'Tarifs Officiels',
    description: 'Tarifs réglementés de la Vendée, transparents et compétitifs.',
  },
  {
    icon: PhoneIcon,
    title: 'Réponse Rapide',
    description: 'Temps de réponse moyen de 5 minutes, prise en charge sous 15 min.',
  },
]

// Schema.org Service pour la page services
useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Services de Transport Taxi Les Sables d\'Olonne',
    description: 'Services complets de transport professionnel : local, médical conventionné CPAM, navettes aéroport et gare, longues distances.',
    url: 'https://www.taxi-les-sables-olonne.fr/services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Taxi Les Sables d\'Olonne',
      telephone: '+33668314690',
      url: 'https://www.taxi-les-sables-olonne.fr'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Les Sables d\'Olonne',
        addressCountry: 'FR'
      },
      {
        '@type': 'State',
        name: 'Vendée',
        addressCountry: 'FR'
      }
    ],
    serviceType: [
      'Transport médical conventionné',
      'Navette aéroport',
      'Navette gare SNCF',
      'Transport local',
      'Longues distances'
    ],
    offers: [
      {
        '@type': 'Offer',
        name: 'Transport Médical Conventionné',
        description: 'Service agréé CPAM avec prise en charge directe',
        category: 'Transport médical'
      },
      {
        '@type': 'Offer',
        name: 'Navette Aéroport Nantes',
        description: 'Transfert vers aéroport de Nantes Atlantique',
        category: 'Navette aéroport'
      },
      {
        '@type': 'Offer',
        name: 'Navette Gare SNCF',
        description: 'Transfert vers gares SNCF et TGV',
        category: 'Navette gare'
      },
      {
        '@type': 'Offer',
        name: 'Transport Local',
        description: 'Courses locales aux Sables d\'Olonne et communes',
        category: 'Transport local'
      }
    ],
    availableChannel: {
      '@type': 'ServiceChannel',
      name: 'Réservation téléphonique',
      servicePhone: '+33668314690',
      availableLanguage: 'French'
    }
  }
])

useSeoMeta({
  title: 'Services Taxi Les Sables d\'Olonne - Transport local, médical, gare',
  description:
      'Services Taxi Les Sables d\'Olonne : transport local, médical conventionné CPAM, liaisons gare-aéroport. Service 24h/24, 06 68 31 46 90.',
})
</script>
