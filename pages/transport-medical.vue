<template>
  <div class="pt-20 pb-16 bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="">
          <div
            class="inline-flex items-center px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm font-medium mb-6"
          >
            <HeartIcon class="h-4 w-4 mr-2" />
            Agréé par la Caisse Primaire d'Assurance Maladie (CPAM)
          </div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">
            Transport Médical Conventionné Taxi Les Sables d'Olonne
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
          <header>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              Service de transport médical conventionné CPAM
            </h2>
          </header>
          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 mb-4">
              <strong>Taxi Les Sables d'Olonne est conventionné par la CPAM</strong> et toutes les caisses d'assurance maladie. Nous assurons vos transports médicaux pour consultations, hospitalisations, séances de rééducation et rendez-vous médicaux.
            </p>
            <p class="text-gray-700 mb-6">
              <strong>Service 24h/24 et 7j/7</strong> : transport confortable, ponctuel et serein. Nous vous accompagnons de votre domicile jusqu'au lieu de votre rendez-vous avec aide administrative si nécessaire.
            </p>
          </div>

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
              <li>Votre attestation de mutuelle</li>
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
            <li>• <strong>CHU de Nantes</strong></li>
            <li>• <strong>Institut de Cancérologie de l'Ouest - Nantes</strong></li>
            <li>• <strong>Clinique Brétéché - Nantes</strong></li>
            <li>• <strong>Clinique Sourdille - Nantes</strong></li>
            <li>• Centres de rééducation de la région</li>
          </ul>
        </div>
      </div>

      <!-- Section FAQ optimisée pour l'IA -->
      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Questions fréquentes sur le transport médical
            </h2>
            <p class="text-lg text-gray-600">
              Réponses claires et directes pour vos déplacements médicaux
            </p>
          </header>

          <div class="space-y-8">
            <article class="bg-gray-50 rounded-xl p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Qu'est-ce que le transport médical conventionné ?
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Le transport médical conventionné est un service de taxi agréé par la CPAM. Il permet aux patients de se rendre à leurs rendez-vous médicaux sans avancer de frais, sur prescription médicale.
              </p>
            </article>

            <article class="bg-gray-50 rounded-xl p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Qui peut bénéficier du transport médical conventionné ?
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Toute personne avec une prescription médicale de transport peut bénéficier du service. Les patients en ALD (Affection Longue Durée), les femmes enceintes, et les personnes à mobilité réduite sont prioritaires.
              </p>
            </article>

            <article class="bg-gray-50 rounded-xl p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Quels documents faut-il présenter ?
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Vous devez présenter votre carte Vitale à jour, votre attestation de droits (moins d'un an), votre attestation de mutuelle, et la prescription médicale de transport signée par votre médecin. Ces documents garantissent la prise en charge par la CPAM et votre mutuelle.
              </p>
            </article>

            <article class="bg-gray-50 rounded-xl p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Combien coûte le transport médical conventionné ?
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Le transport médical conventionné est pris en charge par la CPAM selon vos droits. Avec le tiers payant, vous n'avancez aucun frais. Le tarif est réglementé et transparent.
              </p>
            </article>

            <article class="bg-gray-50 rounded-xl p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Comment réserver un transport médical ?
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Appelez le 06 68 31 46 90 pour réserver votre transport médical. Notre service est disponible 24h/24 et 7j/7. Nous vous conseillons de réserver à l'avance pour garantir votre prise en charge.
              </p>
            </article>

            <article class="bg-gray-50 rounded-xl p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Vers quels établissements de santé nous nous rendons ?
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Nous desservons tous les établissements de santé de Vendée et de Loire-Atlantique : CHD Vendée La Roche-sur-Yon, Clinique Saint-Charles, Centre Hospitalier de Challans, Hôpital des Sables d'Olonne, et les principaux hôpitaux de Nantes (CHU de Nantes, Institut de Cancérologie de l'Ouest, Clinique Brétéché, Clinique Sourdille). Nous assurons également les trajets vers les centres de rééducation.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { PhoneIcon, HeartIcon, CheckIcon } from '@heroicons/vue/24/outline'

// Schema.org LocalBusiness avec service médical pour la page transport médical
useSchemaOrg([
  {
    '@type': 'LocalBusiness',
    'name': 'Taxi Les Sables d\'Olonne',
    'description': 'Service de taxi conventionné CPAM pour transport médical aux Sables d\'Olonne',
    'telephone': '+33668314690',
    'url': 'https://www.taxi-les-sables-olonne.fr',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Place Napoléon III',
      'addressLocality': 'Les Sables d\'Olonne',
      'postalCode': '85100',
      'addressRegion': 'Vendée',
      'addressCountry': 'FR',
    },
    'priceRange': '€€',
    'image': 'https://www.taxi-les-sables-olonne.fr/images/sables-olonne-port-real.jpg',
    'areaServed': [
      {
        '@type': 'City',
        'name': 'Les Sables d\'Olonne',
        'addressCountry': 'FR',
      },
      {
        '@type': 'State',
        'name': 'Vendée',
        'addressCountry': 'FR',
      },
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Transport Médical Conventionné',
      'itemListElement': [
        {
          '@type': 'Offer',
          'name': 'Transport conventionné CPAM',
          'description': 'Prise en charge selon prescription médicale et droits CPAM',
          'priceCurrency': 'EUR',
          'validFrom': '2025-01-01',
          'validThrough': '2025-12-31',
          'itemOffered': {
            '@type': 'MedicalService',
            'name': 'Transport Médical Conventionné CPAM',
            'description': 'Service conventionné pour consultations, hospitalisations, traitements',
            'serviceType': 'Transport médical conventionné',
            'medicalSpecialty': 'Transport sanitaire',
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
            'category': 'Transport médical',
          },
        },
      ],
    },
    'paymentAccepted': ['CPAM', 'Tiers payant'],
  },
  // Schema.org FAQ pour les questions fréquentes
  {
    '@type': 'FAQPage',
    'name': 'Questions fréquentes sur le transport médical conventionné',
    'description': 'Réponses aux questions les plus fréquentes sur notre service de transport médical conventionné CPAM',
    'url': 'https://www.taxi-les-sables-olonne.fr/transport-medical',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Qu\'est-ce que le transport médical conventionné ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Le transport médical conventionné est un service de taxi agréé par la CPAM. Il permet aux patients de se rendre à leurs rendez-vous médicaux sans avancer de frais, sur prescription médicale.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Qui peut bénéficier du transport médical conventionné ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Toute personne avec une prescription médicale de transport peut bénéficier du service. Les patients en ALD (Affection Longue Durée), les femmes enceintes, et les personnes à mobilité réduite sont prioritaires.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Quels documents faut-il présenter ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Vous devez présenter votre carte Vitale à jour, votre attestation de droits (moins d\'un an), votre attestation de mutuelle, et la prescription médicale de transport signée par votre médecin. Ces documents garantissent la prise en charge par la CPAM et votre mutuelle.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Combien coûte le transport médical conventionné ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Le transport médical conventionné est pris en charge par la CPAM selon vos droits. Avec le tiers payant, vous n\'avancez aucun frais. Le tarif est réglementé et transparent.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Comment réserver un transport médical ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Appelez le 06 68 31 46 90 pour réserver votre transport médical. Notre service est disponible 24h/24 et 7j/7. Nous vous conseillons de réserver à l\'avance pour garantir votre prise en charge.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Vers quels établissements de santé nous nous rendons ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Nous desservons tous les établissements de santé de Vendée et de Loire-Atlantique : CHD Vendée La Roche-sur-Yon, Clinique Saint-Charles, Centre Hospitalier de Challans, Hôpital des Sables d\'Olonne, et les principaux hôpitaux de Nantes (CHU de Nantes, Institut de Cancérologie de l\'Ouest, Clinique Brétéché, Clinique Sourdille). Nous assurons également les trajets vers les centres de rééducation.',
        },
      },
    ],
  },
])

useSeoMeta({
  title: 'Transport Médical Conventionné Taxi Les Sables d\'Olonne - CPAM',
  description:
      'Transport médical conventionné CPAM aux Sables d\'Olonne. Service agréé pour consultations, hospitalisations, dialyse, chimiothérapie. Tiers payant, aucun frais à avancer. Réservation 24h/24 au 06 68 31 46 90.',
  
  // Open Graph
  ogTitle: 'Transport Médical Conventionné Taxi Les Sables d\'Olonne - CPAM',
  ogDescription: 'Transport médical conventionné CPAM aux Sables d\'Olonne. Service agréé pour consultations, hospitalisations, dialyse, chimiothérapie. Tiers payant, aucun frais à avancer.',
  ogImage: 'https://www.taxi-les-sables-olonne.fr/images/twitter_og.png',
  ogUrl: 'https://www.taxi-les-sables-olonne.fr/transport-medical',
  ogType: 'website',
  ogSiteName: 'Taxi Les Sables d\'Olonne',
  
  // Twitter Card
  twitterTitle: 'Transport Médical Conventionné Taxi Les Sables d\'Olonne - CPAM',
  twitterDescription: 'Transport médical conventionné CPAM aux Sables d\'Olonne. Service agréé, tiers payant, aucun frais à avancer. 06 68 31 46 90.',
  twitterImage: 'https://www.taxi-les-sables-olonne.fr/images/twitter_og.png',
  twitterCard: 'summary_large_image',
})
</script>
