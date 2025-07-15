<template>
  <div class="pt-20 pb-16 bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-fade-in">
          <div
            class="inline-flex items-center px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm font-medium mb-6"
          >
            <HeartIcon class="h-4 w-4 mr-2" />
            Agréé par la Caisse Primaire d'Assurance Maladie (CPAM)
          </div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">
            Transport Médical Conventionné
          </h1>
          <p class="text-xl lg:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Votre taxi conventionné pour tous vos déplacements médicaux aux Sables d'Olonne et en
            Vendée.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0668314690"
              class="inline-flex items-center px-8 py-4 bg-taxi-yellow hover:bg-taxi-yellow-hover text-gray-900 font-bold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
              aria-label="Appeler pour un transport médical au 06 68 31 46 90"
            >
              <PhoneIcon
                class="h-5 w-5 mr-2"
                aria-hidden="true"
              />
              06 68 31 46 90
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contenu principal -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Colonne de gauche : Description -->
        <div class="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Un service de transport médical adapté et humain
          </h2>
          <p class="text-gray-700 mb-4">
            Nous sommes un service de
            <strong>taxi conventionné par la CPAM</strong>
            et toutes les caisses d'assurance maladie. Nous assurons vos transports pour des
            consultations, hospitalisations (entrées/sorties), séances de rééducation, et tout autre
            rendez-vous médical.
          </p>
          <p class="text-gray-700 mb-6">
            Notre mission est de vous offrir un transport confortable, ponctuel et serein. Nous vous
            accompagnons de votre domicile jusqu'au lieu de votre rendez-vous, en vous aidant dans
            vos démarches administratives si nécessaire.
          </p>

          <h3 class="text-xl font-bold text-gray-900 mb-4">
            Types de transports pris en charge
          </h3>
          <ul class="space-y-3 text-gray-700 mb-6">
            <li class="flex items-start">
              <CheckIcon class="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
              <span>
                <strong>Consultations et examens :</strong>
                Rendez-vous chez votre médecin, spécialiste, laboratoire d'analyses, etc.
              </span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
              <span>
                <strong>Hospitalisations :</strong>
                Entrées et sorties d'hôpital ou de clinique.
              </span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
              <span>
                <strong>Traitements en série :</strong>
                Chimiothérapie, radiothérapie, dialyse, kinésithérapie.
              </span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
              <span>
                <strong>Enfants et adolescents :</strong>
                Transports vers les centres médico-psycho-pédagogiques (CMPP).
              </span>
            </li>
          </ul>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h4 class="font-bold text-blue-800">
              Le saviez-vous ?
            </h4>
            <p class="text-blue-700">
              Avec une prescription médicale de transport (bon de transport), vous n'avez aucun
              frais à avancer pour votre transport médical. Nous nous occupons de tout avec votre
              caisse d'assurance maladie.
            </p>
          </div>
        </div>

        <!-- Colonne de droite : Informations pratiques -->
        <div class="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <h3 class="text-xl font-bold text-gray-900 text-center">
            Vos documents
          </h3>
          <div>
            <p class="font-semibold text-gray-800 mb-2">
              Pour bénéficier du tiers payant, veuillez vous munir de :
            </p>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Votre carte Vitale à jour</li>
              <li>Votre attestation de droits (moins d'un an)</li>
              <li>
                La prescription médicale de transport (bon de transport) signée par votre médecin
              </li>
            </ul>
          </div>
          <hr>
          <h3 class="text-xl font-bold text-gray-900 text-center">
            Destinations fréquentes
          </h3>
          <ul class="text-gray-700 space-y-1">
            <li>• CHD Vendée - La Roche-sur-Yon</li>
            <li>• Clinique Saint-Charles - La Roche-sur-Yon</li>
            <li>• Centre Hospitalier de Challans</li>
            <li>• Hôpital des Sables d'Olonne</li>
            <li>• Centres de rééducation de la région</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PhoneIcon, HeartIcon, CheckIcon } from '@heroicons/vue/24/outline'

// Schema.org Service pour la page transport médical
useSchemaOrg([
  {
    '@type': 'MedicalService',
    'name': 'Transport Médical Conventionné CPAM',
    'description': 'Service de taxi conventionné par la CPAM pour tous vos transports médicaux. Prise en charge directe selon prescription médicale.',
    'url': 'https://www.taxi-les-sables-olonne.fr/transport-medical',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Taxi Les Sables d\'Olonne',
      'telephone': '+33668314690',
      'url': 'https://www.taxi-les-sables-olonne.fr',
    },
    'serviceType': 'Transport médical conventionné',
    'medicalSpecialty': 'Transport sanitaire',
    'areaServed': [
      'Les Sables d\'Olonne',
      'Vendée',
      'CHD Vendée La Roche-sur-Yon',
      'Clinique Saint-Charles',
    ],
    'availableService': [
      'Consultations médicales',
      'Hospitalisations',
      'Traitements en série',
      'Radiothérapie',
      'Chimiothérapie',
      'Dialyse',
      'Kinésithérapie',
      'Transport CMPP',
    ],
    'paymentAccepted': ['CPAM', 'Tiers payant'],
    'isAcceptingNewPatients': true,
    'offers': {
      '@type': 'Offer',
      'name': 'Transport conventionné CPAM',
      'description': 'Prise en charge selon prescription médicale et droits CPAM',
      'priceCurrency': 'EUR',
      'seller': {
        '@type': 'LocalBusiness',
        'name': 'Taxi Les Sables d\'Olonne',
      },
    },
  },
])

useSeoMeta({
  title: 'Transport Médical Conventionné Taxi Les Sables d\'Olonne',
  description:
      'Service de taxi conventionné CPAM aux Sables d\'Olonne pour vos transports médicaux. Ponctualité, confort et aide administrative. Contactez-nous au 06 68 31 46 90.',
})
</script>
