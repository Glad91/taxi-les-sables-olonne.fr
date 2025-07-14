<template>
  <div class="pt-20 pb-16 bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-fade-in">
          <div class="inline-flex items-center px-4 py-2 bg-taxi-yellow/20 border border-taxi-yellow/30 rounded-full text-taxi-yellow text-sm font-medium mb-6">
            <CurrencyEuroIcon class="h-4 w-4 mr-2" />
            Tarifs réglementés Vendée 2025
          </div>
          <div class="relative w-full h-48 rounded-xl overflow-hidden shadow-lg mb-8">
            <NuxtImg 
              src="/images/sables-olonne-centre-ville.jpg" 
              alt="Centre-ville des Sables d'Olonne avec palmiers" 
              class="w-full h-full object-cover"
              width="600"
              height="200"
              placeholder
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
            <div class="absolute bottom-3 left-4 text-white text-sm font-medium">
              📍 Place Napoléon III - Notre adresse
            </div>
          </div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">
            Nos Tarifs Transparents
          </h1>
          <p class="text-xl lg:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Tarifs officiels réglementés • Transport médical conventionné CPAM • Pas de frais cachés
          </p>
        </div>
      </div>
    </section>

    <!-- Tarifs Standard -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Tarifs Réglementés Vendée</h2>
          <p class="text-xl text-gray-700">Grille tarifaire officielle 2025</p>
        </div>

        <div class="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div class="bg-gradient-to-r from-primary-600 to-primary-700 p-6">
            <h3 class="text-2xl font-bold text-white text-center">Tarifs Courses Standard</h3>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type de course</th>
                  <th class="px-6 py-4 text-center text-sm font-semibold text-gray-900">Prise en charge</th>
                  <th class="px-6 py-4 text-center text-sm font-semibold text-gray-900">Par kilomètre</th>
                  <th class="px-6 py-4 text-center text-sm font-semibold text-gray-900">Tarif horaire</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="hover:bg-gray-50 transition-colors">
                  <td class="px-6 py-4 text-gray-900 font-medium">Course jour (7h-19h)</td>
                  <td class="px-6 py-4 text-center text-green-600 font-bold">2,94 €</td>
                  <td class="px-6 py-4 text-center text-green-600 font-bold">2,16 €</td>
                  <td class="px-6 py-4 text-center text-green-600 font-bold">29,44 €/h</td>
                </tr>
                <tr class="hover:bg-gray-50 transition-colors">
                  <td class="px-6 py-4 text-gray-900 font-medium">Course nuit (19h-7h) & dimanche</td>
                  <td class="px-6 py-4 text-center text-amber-600 font-bold">2,94 €</td>
                  <td class="px-6 py-4 text-center text-amber-600 font-bold">3,24 €</td>
                  <td class="px-6 py-4 text-center text-amber-600 font-bold">29,44 €/h</td>
                </tr>
                <tr class="bg-green-50 hover:bg-green-100 transition-colors">
                  <td class="px-6 py-4 text-gray-900 font-medium flex items-center">
                    <ShieldCheckIcon class="h-5 w-5 text-green-600 mr-2" />
                    Transport médical conventionné
                  </td>
                  <td class="px-6 py-4 text-center text-green-700 font-bold">Pris en charge CPAM</td>
                  <td class="px-6 py-4 text-center text-green-700 font-bold">Selon prescription</td>
                  <td class="px-6 py-4 text-center text-green-700 font-bold">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Destinations Courantes -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Destinations Courantes</h2>
          <p class="text-xl text-gray-700">Exemples de tarifs selon destinations</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div 
            v-for="(destination, index) in destinations" 
            :key="destination.name"
            class="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-primary-300 hover:shadow-xl transition-all duration-300 animate-slide-up"
            :style="`animation-delay: ${index * 0.1}s`"
            :class="destination.popular ? 'ring-2 ring-primary-500 relative' : ''"
          >
            <div v-if="destination.popular" class="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span class="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Populaire
              </span>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <component :is="destination.icon" class="h-8 w-8 text-primary-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ destination.name }}</h3>
              <p class="text-gray-700 mb-4">{{ destination.description }}</p>
              
              <div class="space-y-3">
                <div class="bg-gray-50 rounded-lg p-4">
                  <div class="text-sm text-gray-700">Tarif jour</div>
                  <div class="text-2xl font-bold text-green-600">{{ destination.priceDay }}</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-4">
                  <div class="text-sm text-gray-700">Tarif nuit/dimanche</div>
                  <div class="text-xl font-bold text-amber-600">{{ destination.priceNight }}</div>
                </div>
              </div>
              
              <div class="mt-4 flex items-center justify-center text-sm text-gray-500">
                <ClockIcon class="h-4 w-4 mr-1" />
                {{ destination.duration }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Spéciaux -->
    <section class="py-20 bg-gradient-to-r from-gray-50 to-primary-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Services Spéciaux</h2>
          <p class="text-xl text-gray-700">Tarifications adaptées à vos besoins</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in specialServices" 
            :key="service.title"
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center animate-slide-up"
            :style="`animation-delay: ${index * 0.15}s`"
          >
            <div class="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <component :is="service.icon" class="h-8 w-8 text-green-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ service.title }}</h3>
            <div class="text-2xl font-bold text-green-600 mb-2">{{ service.price }}</div>
            <p class="text-gray-700 mb-4">{{ service.description }}</p>
            <ul class="text-left space-y-2">
              <li 
                v-for="feature in service.features" 
                :key="feature"
                class="flex items-center text-sm text-gray-700"
              >
                <CheckIcon class="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Informations Importantes -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-r from-blue-50 to-primary-50 rounded-3xl p-8 lg:p-12">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Informations Tarifaires</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCardIcon class="h-8 w-8 text-green-600" />
              </div>
              <h3 class="font-bold text-gray-900 mb-3">Moyens de paiement</h3>
              <ul class="space-y-1 text-sm text-gray-700">
                <li>Espèces</li>
                <li>Carte bancaire</li>
                <li>Chèque (sur accord)</li>
                <li>Tiers payant médical</li>
              </ul>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PlusIcon class="h-8 w-8 text-amber-600" />
              </div>
              <h3 class="font-bold text-gray-900 mb-3">Suppléments</h3>
              <ul class="space-y-1 text-sm text-gray-700">
                <li>Bagages volumineux : +2€</li>
                <li>Animal domestique : +3€</li>
                <li>Attente : 0,60€/min</li>
                <li>Péage : au prix réel</li>
              </ul>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TagIcon class="h-8 w-8 text-green-600" />
              </div>
              <h3 class="font-bold text-gray-900 mb-3">Réductions</h3>
              <ul class="space-y-1 text-sm text-gray-700">
                <li>Clients réguliers : -10%</li>
                <li>Seniors (+65 ans) : -5%</li>
                <li>Transport médical : CPAM</li>
                <li>Trajets retour : -15%</li>
              </ul>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <InformationCircleIcon class="h-8 w-8 text-blue-600" />
              </div>
              <h3 class="font-bold text-gray-900 mb-3">À savoir</h3>
              <ul class="space-y-1 text-sm text-gray-700">
                <li>Tarifs TTC</li>
                <li>Devis gratuit</li>
                <li>Facturation possible</li>
                <li>Réservation gratuite</li>
              </ul>
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
        <p class="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Contactez-nous pour obtenir un devis gratuit adapté à vos besoins spécifiques.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:0668314690" 
            class="inline-flex items-center px-8 py-4 bg-taxi-yellow hover:bg-taxi-yellow-hover text-gray-900 font-bold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            aria-label="Appel gratuit au 06 68 31 46 90 pour un devis personnalisé"
          >
            <PhoneIcon class="h-5 w-5 mr-2" aria-hidden="true" />
            Appel gratuit : 06 68 31 46 90
          </a>
          <NuxtLink 
            to="/contact" 
            class="inline-flex items-center px-8 py-4 bg-white/20 hover:bg-white/30 border-2 border-white/40 text-white font-semibold rounded-xl transition-all duration-200 backdrop-blur-sm"
            aria-label="Aller au formulaire de contact pour demander un devis"
          >
            Demander un devis
            <CalculatorIcon class="h-5 w-5 ml-2" aria-hidden="true" />
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
  ClockIcon,
  CheckIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  PlusIcon,
  TagIcon,
  InformationCircleIcon,
  CalculatorIcon,
  TruckIcon,
  BuildingOffice2Icon,
  MapPinIcon,
  HeartIcon
} from '@heroicons/vue/24/outline'

const destinations = [
  {
    name: 'Gare SNCF Sables d\'Olonne',
    description: 'Centre-ville → Gare',
    priceDay: '15-19 €',
    priceNight: '22-26 €',
    duration: '10 min',
    icon: TruckIcon,
    popular: true
  },
  {
    name: 'La Roche-sur-Yon',
    description: 'Gare TGV + Centre-ville',
    priceDay: '112-118 €',
    priceNight: '125-128 €',
    duration: '45 min',
    icon: BuildingOffice2Icon
  },
  {
    name: 'Aéroport Nantes Atlantique',
    description: 'Terminal 1 & 2',
    priceDay: '180-200 €',
    priceNight: '220-240 €',
    duration: '1h 30min',
    icon: MapPinIcon
  }
]

const specialServices = [
  {
    title: 'Transport Médical',
    price: 'Pris en charge CPAM',
    description: 'Transport conventionné selon prescription médicale',
    icon: HeartIcon,
    features: [
      'Conventionné toutes caisses',
      'Facturation directe possible',
      'Véhicules adaptés PMR',
      'Aide à la montée/descente'
    ]
  },
  {
    title: 'Longues Distances',
    price: 'Sur devis',
    description: 'Tarification préférentielle pour trajets réguliers',
    icon: MapPinIcon,
    features: [
      'Devis gratuit personnalisé',
      'Tarifs dégressifs',
      'Réservation à l\'avance',
      'Paiement différé possible'
    ]
  },
  {
    title: 'Service 24h/24',
    price: 'Tarif nuit',
    description: 'Disponible jour et nuit, week-ends et jours fériés',
    icon: ClockIcon,
    features: [
      'Service de nuit majoré',
      'Réservation conseillée',
      'Prise en charge rapide',
      'Urgences médicales'
    ]
  }
]

useSeoMeta({
  title: 'Tarifs Taxi Les Sables d\'Olonne - Prix réglementés Vendée 2025',
  description: 'Tarifs Taxi Les Sables d\'Olonne - Prix réglementés Vendée 2025. Transport médical conventionné CPAM, gare, aéroport Nantes. 06 68 31 46 90.',
  ogTitle: 'Tarifs Taxi Les Sables d\'Olonne - Prix réglementés',
  ogDescription: 'Découvrez nos tarifs transparents pour tous vos déplacements. Tarifs fixes aéroport, réductions clients fidèles.',
  ogUrl: 'https://www.taxi-les-sables-olonne.fr/tarifs',
  canonicalUrl: 'https://www.taxi-les-sables-olonne.fr/tarifs'
})

useSchemaOrg([
  defineOrganization({
    name: 'Taxi Les Sables d\'Olonne',
    description: 'Grille tarifaire pour services de taxi en Vendée',
    url: 'https://www.taxi-les-sables-olonne.fr',
    telephone: '+33668314690',
    email: 'contact@taxi-les-sables-olonne.fr',
    areaServed: 'Vendée'
  })
])
</script>