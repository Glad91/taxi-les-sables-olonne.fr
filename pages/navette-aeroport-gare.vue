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
          class="relative h-80 lg:h-auto lg:aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl"
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

    <!-- Section Destinations Gares -->
    <section class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Nos Destinations Gares SNCF
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Transport taxi vers toutes les gares SNCF de la région Pays de la Loire. 
            Navettes régulières, tarifs préférentiels et prise en charge garantie.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Gare Les Sables d'Olonne -->
          <div class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              Gare SNCF Les Sables d'Olonne
            </h3>
            <p class="text-gray-700 mb-4">
              Station ferroviaire locale avec <strong>liaisons TER vers Nantes</strong>. 
              Navette taxi depuis votre domicile en 5-15 minutes selon secteur.
            </p>
            <div class="flex items-center text-primary-600 font-semibold">
              <span class="text-2xl mr-2">🚉</span>
              Trajet local court
            </div>
          </div>

          <!-- Gare La Roche-sur-Yon -->
          <div class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              Gare TGV La Roche-sur-Yon
            </h3>
            <p class="text-gray-700 mb-4">
              Hub ferroviaire majeur avec <strong>TGV vers Paris</strong> et liaisons TER. 
              Navette taxi confortable, 30 minutes depuis Les Sables d'Olonne.
            </p>
            <div class="flex items-center text-primary-600 font-semibold">
              <span class="text-2xl mr-2">🚄</span>
              Accès TGV direct
            </div>
          </div>

          <!-- Gare Nantes -->
          <div class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              Gare SNCF Nantes
            </h3>
            <p class="text-gray-700 mb-4">
              Gare principale de Loire-Atlantique avec <strong>TGV, TER et Intercités</strong>. 
              Transport taxi longue distance, 1h15 de trajet confortable.
            </p>
            <div class="flex items-center text-primary-600 font-semibold">
              <span class="text-2xl mr-2">🚆</span>
              Hub régional
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Aéroport Nantes -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">
              Navette Aéroport Nantes Atlantique
            </h2>
            <p class="text-xl text-gray-600 mb-6">
              Service de navette taxi premium vers l'aéroport international de Nantes. 
              Départ depuis Les Sables d'Olonne avec <strong>suivi vol en temps réel</strong>.
            </p>

            <div class="space-y-4">
              <div class="flex items-start">
                <span class="text-2xl mr-4">✈️</span>
                <div>
                  <h4 class="font-bold text-gray-900">Vols Nationaux & Internationaux</h4>
                  <p class="text-gray-700">
                    Desserte aérienne vers Paris CDG/Orly, Lyon, Toulouse, Londres, Madrid, Rome...
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <span class="text-2xl mr-4">🕐</span>
                <div>
                  <h4 class="font-bold text-gray-900">Départ Anticipé</h4>
                  <p class="text-gray-700">
                    <strong>Temps de trajet : 1h30</strong> depuis Les Sables d'Olonne. 
                    Nous calculons l'heure de départ selon votre vol.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <span class="text-2xl mr-4">📱</span>
                <div>
                  <h4 class="font-bold text-gray-900">Suivi Vol Temps Réel</h4>
                  <p class="text-gray-700">
                    Surveillance des retards/avances de vol pour ajuster l'heure de retour. 
                    Service de navette retour flexible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">
              Tarifs Navettes 2024
            </h3>
            
            <div class="space-y-6">
              <div class="border-b border-gray-200 pb-4">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-semibold text-gray-900">Aéroport Nantes Atlantique</span>
                  <span class="text-2xl font-bold text-primary-600">230€</span>
                </div>
                <p class="text-sm text-gray-600">Trajet aller simple, 1-4 passagers</p>
              </div>

              <div class="border-b border-gray-200 pb-4">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-semibold text-gray-900">Gare TGV La Roche-sur-Yon</span>
                  <span class="text-2xl font-bold text-primary-600">83€</span>
                </div>
                <p class="text-sm text-gray-600">Trajet aller simple, tarif jour</p>
              </div>

              <div class="border-b border-gray-200 pb-4">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-semibold text-gray-900">Gare SNCF Les Sables</span>
                  <span class="text-2xl font-bold text-primary-600">15€</span>
                </div>
                <p class="text-sm text-gray-600">Trajet local, prise en charge rapide</p>
              </div>
            </div>

            <div class="mt-6 p-4 bg-amber-50 rounded-lg">
              <p class="text-sm text-amber-800">
                <strong>💡 Conseil :</strong> Réservez vos navettes retour à l'avance pour 
                bénéficier de <strong>10% de réduction</strong> sur l'aller-retour.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Navettes -->
    <section class="bg-white py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Questions Fréquentes Navettes
          </h2>
          <p class="text-xl text-gray-600">
            Tout savoir sur nos services de transport vers gares et aéroports
          </p>
        </div>

        <div class="space-y-8">
          <div class="bg-gray-50 rounded-xl p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              Combien de temps à l'avance réserver ma navette aéroport ?
            </h3>
            <p class="text-gray-700">
              Nous recommandons de <strong>réserver 24-48h à l'avance</strong> pour les navettes aéroport 
              Nantes. Pour les gares SNCF locales, une réservation <strong>2-4h avant</strong> suffit généralement. 
              Réservations d'urgence possibles selon disponibilité chauffeur.
            </p>
          </div>

          <div class="bg-gray-50 rounded-xl p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              Que se passe-t-il en cas de retard de vol ou train ?
            </h3>
            <p class="text-gray-700">
              Nous surveillons les <strong>horaires en temps réel</strong> via les applications 
              SNCF Connect et FlightRadar. Aucun surcoût en cas de retard de transport public. 
              Service de navette retour ajusté automatiquement selon les nouveaux horaires.
            </p>
          </div>

          <div class="bg-gray-50 rounded-xl p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              Vos véhicules sont-ils adaptés aux bagages volumineux ?
            </h3>
            <p class="text-gray-700">
              Nos taxis disposent de <strong>coffres spacieux</strong> pour valises, sacs de voyage 
              et équipements sportifs. Transport possible de <strong>4 passagers + bagages</strong> 
              confortablement. Véhicules 7 places disponibles pour groupes nombreux.
            </p>
          </div>

          <div class="bg-gray-50 rounded-xl p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              Proposez-vous des navettes partagées pour réduire les coûts ?
            </h3>
            <p class="text-gray-700">
              Oui, nous organisons des <strong>navettes partagées vers l'aéroport Nantes</strong> 
              sur demande. Tarif réduit de 30-40% par passager. Service disponible pour départs 
              matinaux groupés ou retours de soirée depuis l'aéroport.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { PhoneIcon, TruckIcon, CheckIcon } from '@heroicons/vue/24/outline'

// Schema.org Service et FAQ pour la page navette aéroport gare
useSchemaOrg([
  {
    '@type': 'Service',
    'name': 'Navette Taxi Gare & Aéroport Nantes - Les Sables d\'Olonne',
    'description':
        'Service navette taxi premium vers aéroport Nantes Atlantique et gares SNCF. Transport TGV La Roche-sur-Yon, gare Nantes, suivi temps réel, tarifs fixes.',
    'url': 'https://www.taxi-les-sables-olonne.fr/navette-aeroport-gare',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Taxi Les Sables d\'Olonne',
      'telephone': '+33668314690',
      'url': 'https://www.taxi-les-sables-olonne.fr',
    },
    'serviceType': [
      'Navette aéroport Nantes',
      'Transport gare SNCF',
      'Navette TGV',
      'Transfert ferroviaire',
      'Shuttle airport',
    ],
    'areaServed': [
      'Les Sables d\'Olonne',
      'Aéroport Nantes Atlantique',
      'Gare SNCF Les Sables d\'Olonne',
      'Gare TGV La Roche-sur-Yon',
      'Gare SNCF Nantes',
      'Pays de la Loire',
      'Vendée',
      'Loire-Atlantique',
    ],
    'availableService': [
      'Transfert aéroport Nantes Atlantique',
      'Transport gare TGV La Roche-sur-Yon',
      'Navette gare SNCF Nantes',
      'Suivi vol temps réel',
      'Surveillance horaires train',
      'Accueil personnalisé terminal',
      'Aide bagages aéroport',
      'Navettes partagées',
      'Réservation 24h/24',
    ],
    'serviceOutput': {
      '@type': 'Service',
      'name': 'Transport sécurisé ponctuel gares aéroports',
      'description': 'Arrivée garantie à l\'heure pour vols internationaux et trains TGV/TER',
    },
    'offers': [
      {
        '@type': 'Offer',
        'name': 'Navette Aéroport Nantes Atlantique',
        'description': 'Transport taxi premium vers aéroport international Nantes, suivi vol temps réel',
        'price': '230',
        'priceCurrency': 'EUR',
        'priceValidUntil': '2024-12-31',
        'seller': {
          '@type': 'LocalBusiness',
          'name': 'Taxi Les Sables d\'Olonne',
        },
      },
      {
        '@type': 'Offer',
        'name': 'Navette Gare TGV La Roche-sur-Yon',
        'description': 'Transport vers gare TGV, liaisons Paris et grandes métropoles',
        'price': '83',
        'priceCurrency': 'EUR',
        'priceValidUntil': '2024-12-31',
        'seller': {
          '@type': 'LocalBusiness',
          'name': 'Taxi Les Sables d\'Olonne',
        },
      },
      {
        '@type': 'Offer',
        'name': 'Navette Gare SNCF Les Sables',
        'description': 'Transport local vers gare SNCF, liaisons TER régionales',
        'price': '15',
        'priceCurrency': 'EUR',
        'priceValidUntil': '2024-12-31',
        'seller': {
          '@type': 'LocalBusiness',
          'name': 'Taxi Les Sables d\'Olonne',
        },
      },
    ],
  },
  {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Comment réserver une navette taxi vers l\'aéroport Nantes ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Réservez 24-48h à l\'avance par téléphone au 06 68 31 46 90. Pour gares SNCF locales, 2-4h suffisent. Réservations urgence possibles selon disponibilité chauffeur.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Quel est le tarif pour une navette vers l\'aéroport Nantes Atlantique ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '230€ aller simple pour 1-4 passagers. Réduction 10% sur aller-retour réservé à l\'avance. Navettes partagées disponibles avec tarif réduit 30-40%.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Que se passe-t-il en cas de retard de vol ou train ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Suivi temps réel via SNCF Connect et FlightRadar. Aucun surcoût retard transport public. Service navette retour ajusté automatiquement nouveaux horaires.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Quelles gares SNCF desservez-vous depuis Les Sables d\'Olonne ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Gare SNCF Les Sables (15€), Gare TGV La Roche-sur-Yon (83€), Gare SNCF Nantes (tarif sur demande). Transport toutes gares Pays de la Loire.',
        },
      },
    ],
  },
])

useSeoMeta({
  title: 'Navette Taxi Aéroport Nantes & Gares SNCF - Les Sables d\'Olonne',
  description:
      'Transport navette taxi vers aéroport Nantes Atlantique, gare TGV La Roche-sur-Yon et gares SNCF. Suivi temps réel, tarifs fixes. Réservation 06 68 31 46 90.',
  keywords: 'navette aéroport Nantes, taxi gare SNCF, transport TGV La Roche-sur-Yon, navette Sables Olonne, transfert aéroport, shuttle Nantes Atlantique',
})
</script>
