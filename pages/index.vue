<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden"
    >
      <!-- Background patterns -->
      <div class="absolute inset-0 bg-black/20" />
      <div class="absolute inset-0 opacity-5">
        <div
          class="w-full h-full"
          style="
            background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
          "
        />
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div class="animate-fade-in text-center lg:text-left">
            <div
              class="inline-flex items-center px-4 py-2 bg-taxi-yellow/20 border border-taxi-yellow/30 rounded-full text-taxi-yellow text-sm font-medium mb-6"
            >
              <span class="w-2 h-2 bg-taxi-yellow rounded-full mr-2 animate-pulse" />
              Service 24h/24 - 7j/7
            </div>

            <h1
              class="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 animate-slide-up leading-tight"
            >
              <span class="text-taxi-yellow">Taxi Les Sables d'Olonne</span>
            </h1>

            <p
              class="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-8 animate-slide-up leading-relaxed"
              style="animation-delay: 0.2s"
            >
              Votre
              <strong>taxi professionnel aux Sables d'Olonne</strong>
              . Transport rapide et fiable 24h/24 en Vendée vers gares, aéroports et établissements
              médicaux.
            </p>

            <div
              class="flex flex-col sm:flex-row gap-4 animate-slide-up"
              style="animation-delay: 0.4s"
            >
              <a
                href="tel:0668314690"
                class="inline-flex items-center justify-center px-8 py-4 bg-taxi-yellow hover:bg-taxi-yellow-hover text-gray-900 font-bold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                aria-label="Appeler maintenant le taxi au 06 68 31 46 90"
              >
                <PhoneIcon
                  class="h-5 w-5 mr-2"
                  aria-hidden="true"
                />
                Appeler maintenant
              </a>
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 border-2 border-white text-primary-600 font-semibold rounded-xl transition-all duration-200"
                aria-label="Aller à la page de contact pour réserver en ligne"
              >
                Réserver en ligne
                <ArrowRightIcon
                  class="h-5 w-5 ml-2"
                  aria-hidden="true"
                />
              </NuxtLink>
            </div>
          </div>

          <div
            class="relative animate-fade-in"
            style="animation-delay: 0.6s"
          >
            <div class="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
              <NuxtImg
                src="/images/sables-olonne-remblai.jpg"
                alt="Les Sables d'Olonne - Remblai et plage"
                class="w-full h-full object-cover"
                width="800"
                height="500"
                loading="eager"
                placeholder
              />
              <div class="absolute bottom-4 left-4 z-20 text-white">
                <div class="text-sm font-medium">
                  📍 Les Sables d'Olonne
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4">
            Services de Taxi aux Sables d'Olonne
          </h2>
          <p class="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto px-4 leading-relaxed">
            Transport professionnel en
            <strong>Vendée</strong>
            : courses locales,
            <NuxtLink
              to="/navette-aeroport-gare"
              class="text-primary-600 hover:underline"
            >
              transferts gare SNCF et aéroport Nantes
            </NuxtLink>
            , et
            <NuxtLink
              to="/transport-medical"
              class="text-primary-600 hover:underline"
            >
              transport médical conventionné CPAM
            </NuxtLink>
            .
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <NuxtLink
            v-for="(service, index) in services"
            :key="service.title"
            :to="service.href"
            class="group bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center block"
            :class="`animate-slide-up`"
            :style="`animation-delay: ${index * 0.1}s`"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto"
            >
              {{ service.icon }}
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-3">{{ service.title }}</h3>
            <p class="text-sm sm:text-base text-gray-800 leading-relaxed">
              {{ service.description }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Pourquoi nous choisir -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4">
            Pourquoi nous choisir ?
          </h2>
          <p class="text-lg sm:text-xl text-gray-800 px-4">
            Votre confiance, notre priorité
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div
            v-for="(advantage, index) in advantages"
            :key="advantage.title"
            class="text-center animate-slide-up px-4"
            :style="`animation-delay: ${index * 0.2}s`"
          >
            <div
              class="w-16 sm:w-20 h-16 sm:h-20 bg-primary-100 rounded-full flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-4 sm:mb-6"
            >
              {{ advantage.icon }}
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-3">
              {{ advantage.title }}
            </h3>
            <p class="text-sm sm:text-base text-gray-800 leading-relaxed">
              {{ advantage.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Zone de desserte détaillée -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4">
            Zones Desservies par notre Taxi
          </h2>
          <p class="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 px-4">
            Service de taxi professionnel dans toute la Vendée
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div
            class="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-4 sm:p-6 text-center"
          >
            <h3 class="font-bold text-gray-900 mb-3 text-sm sm:text-base">
              Zone Locale
            </h3>
            <ul class="text-xs sm:text-sm text-gray-800 space-y-1">
              <li>
                •
                <strong>Les Sables d'Olonne</strong>
              </li>
              <li>• Olonne-sur-Mer</li>
              <li>• Château d'Olonne</li>
              <li>• La Chaume</li>
              <li>• L'Île d'Olonne</li>
            </ul>
          </div>

          <div
            class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 text-center"
          >
            <h3 class="font-bold text-gray-900 mb-3 text-sm sm:text-base">
              Transports Gares
            </h3>
            <ul class="text-xs sm:text-sm text-gray-800 space-y-1">
              <li>
                •
                <strong>Gare SNCF Sables d'Olonne</strong>
              </li>
              <li>• Gare TGV La Roche-sur-Yon</li>
              <li>• Gare de Luçon</li>
              <li>• Gare de Challans</li>
              <li>• Correspondances TER</li>
            </ul>
          </div>

          <div
            class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-4 sm:p-6 text-center"
          >
            <h3 class="font-bold text-gray-900 mb-3 text-sm sm:text-base">
              Aéroports
            </h3>
            <ul class="text-xs sm:text-sm text-gray-800 space-y-1">
              <li>
                •
                <strong>Aéroport Nantes Atlantique</strong>
              </li>
              <li>• Terminal 1 & 2</li>
              <li>• Parking longue durée</li>
              <li>• Zone dépose-minute</li>
              <li>• Suivi des vols en temps réel</li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 sm:p-6 text-center">
            <h3 class="font-bold text-gray-900 mb-3 text-sm sm:text-base">
              Établissements Médicaux
            </h3>
            <ul class="text-xs sm:text-sm text-gray-800 space-y-1">
              <li>
                •
                <strong>CHD Vendée La Roche-sur-Yon</strong>
              </li>
              <li>• Clinique Saint-Charles</li>
              <li>• Centre hospitalier Challans</li>
              <li>• Maisons de santé</li>
              <li>• Transport conventionné CPAM</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Témoignages clients -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4">
            Avis Clients - Taxi Les Sables d'Olonne
          </h2>
          <p class="text-lg sm:text-xl text-gray-700 px-4">
            La satisfaction de nos clients, notre priorité
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div class="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
            <div class="flex items-center justify-center mb-4">
              <div class="text-yellow-400 text-base sm:text-lg">
                ★★★★★
              </div>
            </div>
            <p class="text-sm sm:text-base text-gray-800 mb-4 italic leading-relaxed">
              "Service impeccable pour mes rendez-vous médicaux. Chauffeur ponctuel et véhicule très
              propre. Je recommande !"
            </p>
            <div class="text-xs sm:text-sm text-gray-700">
              <strong>Marie D.</strong>
              - Transport médical
            </div>
          </div>

          <div class="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
            <div class="flex items-center justify-center mb-4">
              <div class="text-yellow-400 text-base sm:text-lg">
                ★★★★★
              </div>
            </div>
            <p class="text-sm sm:text-base text-gray-800 mb-4 italic leading-relaxed">
              "Excellent taxi pour l'aéroport de Nantes. Suivi du vol en temps réel, aucun stress.
              Tarif transparent annoncé à l'avance."
            </p>
            <div class="text-xs sm:text-sm text-gray-700">
              <strong>Jean-Pierre L.</strong>
              - Transfert aéroport
            </div>
          </div>

          <div class="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
            <div class="flex items-center justify-center mb-4">
              <div class="text-yellow-400 text-base sm:text-lg">
                ★★★★★
              </div>
            </div>
            <p class="text-sm sm:text-base text-gray-800 mb-4 italic leading-relaxed">
              "Service 24h/24 très pratique. Intervention rapide même tard le soir. Chauffeur
              professionnel et courtois."
            </p>
            <div class="text-xs sm:text-sm text-gray-700">
              <strong>Sophie M.</strong>
              - Course de nuit
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mots-clés SEO Local -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 px-4">
          Votre Taxi de Confiance aux Sables d'Olonne et en Vendée
        </h2>
        <div class="max-w-4xl mx-auto text-gray-800 leading-relaxed px-4">
          <p class="mb-4 sm:mb-6 text-sm sm:text-base">
            <strong>Taxi Les Sables d'Olonne</strong>
            est votre partenaire transport de confiance en
            <strong>Vendée</strong>
            . Situés
            <strong>Place Napoléon III aux Sables d'Olonne</strong>
            , nous assurons vos déplacements 24h/24 et 7j/7 vers toutes destinations.
          </p>
          <p class="mb-4 sm:mb-6 text-sm sm:text-base">
            Spécialisés dans le
            <strong>transport médical conventionné</strong>
            , nos chauffeurs professionnels vous accompagnent vers les établissements de santé avec
            prise en charge
            <strong>CPAM</strong>
            . Service de
            <strong>taxi gare SNCF Les Sables d'Olonne</strong>
            et transferts
            <strong>aéroport Nantes</strong>
            avec suivi des horaires en temps réel.
          </p>
          <p class="text-sm sm:text-base">
            Courses locales
            <strong>Olonne-sur-Mer</strong>
            ,
            <strong>Château d'Olonne</strong>
            ,
            <strong>La Chaume</strong>
            et longues distances vers
            <strong>La Roche-sur-Yon</strong>
            ,
            <strong>Nantes</strong>
            ,
            <strong>Challans</strong>
            . Tarifs réglementés Vendée, véhicules climatisés, réservation par téléphone au
            <strong>06 68 31 46 90</strong>
            .
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-primary-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 px-4">
          Réservez votre Taxi aux Sables d'Olonne
        </h2>
        <p
          class="text-lg sm:text-xl text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed"
        >
          <strong>Service 24h/24</strong>
          • Réservation immédiate au
          <strong>06 68 31 46 90</strong>
          • Transport médical, gare SNCF, aéroport Nantes • Tarifs réglementés Vendée
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <a
            href="tel:0668314690"
            class="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-taxi-yellow hover:bg-taxi-yellow-hover text-gray-900 font-bold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            aria-label="Appeler le taxi au 06 68 31 46 90"
          >
            <PhoneIcon
              class="h-4 sm:h-5 w-4 sm:w-5 mr-2"
              aria-hidden="true"
            />
            06 68 31 46 90
          </a>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-100 border-2 border-white text-primary-600 font-semibold rounded-xl transition-all duration-200 text-sm sm:text-base"
            aria-label="Aller à la page de contact pour réserver en ligne"
          >
            Réserver en ligne
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { PhoneIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import { defineLocalBusiness } from 'nuxt-schema-org/schema'

const services = [
  {
    icon: '🏙️',
    title: 'Taxi Local Les Sables d\'Olonne',
    description:
        'Courses locales aux Sables d\'Olonne, Olonne-sur-Mer, Château d\'Olonne, La Chaume. Service taxi rapide 24h/24 pour vos trajets quotidiens en Vendée.',
    href: '/services',
  },
  {
    icon: '🚅',
    title: 'Taxi Gare SNCF & Aéroport',
    description:
        'Transferts taxi vers gare SNCF Les Sables d\'Olonne, TGV La Roche-sur-Yon et aéroport Nantes. Suivi horaires temps réel, ponctualité garantie.',
    href: '/navette-aeroport-gare',
  },
  {
    icon: '🏥',
    title: 'Transport Médical Conventionné',
    description:
        'Taxi médical agréé CPAM toutes caisses. Transport vers CHD Vendée, cliniques, centres de soins. Facturation directe possible.',
    href: '/transport-medical',
  },
]

const advantages = [
  {
    icon: '⏰',
    title: 'Taxi 24h/24 - 7j/7',
    description:
        'Service taxi aux Sables d\'Olonne disponible jour et nuit, week-ends et jours fériés. Réservation urgente acceptée.',
  },
  {
    icon: '💰',
    title: 'Tarifs Réglementés Vendée',
    description:
        'Tarifs officiels préfecture Vendée. Transport médical conventionné CPAM, Mutuelle. Devis gratuit longues distances.',
  },
  {
    icon: '🌡️',
    title: 'Véhicules Modernes',
    description:
        'Flotte taxi récente climatisée. Véhicules adaptés PMR disponibles. Confort garanti courtes et longues distances.',
  },
]

// Schema.org LocalBusiness pour la page d'accueil
useSchemaOrg([
  defineLocalBusiness({
    name: 'Taxi Les Sables d\'Olonne',
    description:
        'Service de taxi professionnel aux Sables d\'Olonne et en Vendée. Transport médical conventionné CPAM, liaisons gare-aéroport, courses locales et longues distances.',
    url: 'https://www.taxi-les-sables-olonne.fr',
    telephone: '+33668314690',
    email: 'contact@taxi-les-sables-olonne.fr',
    image: 'https://www.taxi-les-sables-olonne.fr/images/sables-olonne-remblai.jpg',
    logo: 'https://www.taxi-les-sables-olonne.fr/favicon.svg',
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: ['Cash', 'CreditCard'],
    address: {
      '@type': 'PostalAddress',
      'streetAddress': 'Place Napoléon III',
      'addressLocality': 'Les Sables d\'Olonne',
      'postalCode': '85100',
      'addressCountry': 'FR',
      'addressRegion': 'Vendée',
    },
    geo: {
      '@type': 'GeoCoordinates',
      'latitude': 46.4958,
      'longitude': -1.7833,
    },
    openingHours: 'Mo-Su 00:00-23:59',
    areaServed: [
      'Les Sables d\'Olonne',
      'Olonne-sur-Mer',
      'Château d\'Olonne',
      'La Chaume',
      'Vendée',
    ],
    serviceType: ['Taxi local', 'Transport médical', 'Navette aéroport', 'Navette gare'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      'name': 'Services de Transport',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Transport médical conventionné CPAM',
            'description': 'Service de transport médical agréé par la CPAM',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Navette aéroport Nantes',
            'description': 'Transfert vers l\'aéroport de Nantes Atlantique',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Navette gare SNCF',
            'description': 'Transfert vers les gares SNCF et TGV',
          },
        },
      ],
    },
  }),
])

useSeoMeta({
  title: 'Taxi Les Sables d\'Olonne - Service 24h/24 Vendée | 06 68 31 46 90',
  description:
      'Taxi Les Sables d\'Olonne ⭐ Service 24h/24 au 06 68 31 46 90. Transport médical conventionné CPAM, gare SNCF, aéroport Nantes. Tarifs réglementés Vendée. Place Napoléon III.',
  ogTitle: 'Taxi Les Sables d\'Olonne - Service 24h/24 Vendée | 06 68 31 46 90',
  ogDescription:
    'Taxi Les Sables d\'Olonne ⭐ Service 24h/24 au 06 68 31 46 90. Transport médical conventionné CPAM, gare SNCF, aéroport Nantes. Tarifs réglementés Vendée. Place Napoléon III.',
  ogImage: 'https://www.taxi-les-sables-olonne.fr/images/twitter_og.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Taxi Les Sables d\'Olonne - Service 24h/24 Vendée | 06 68 31 46 90',
  twitterDescription:
    'Taxi Les Sables d\'Olonne ⭐ Service 24h/24 au 06 68 31 46 90. Transport médical conventionné CPAM, gare SNCF, aéroport Nantes. Tarifs réglementés Vendée. Place Napoléon III.',
  twitterImage: 'https://www.taxi-les-sables-olonne.fr/images/twitter_og.png',
})
</script>
