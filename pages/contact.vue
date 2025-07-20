<template>
  <div class="pt-20 pb-16 bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="">
          <div
            class="inline-flex items-center px-4 py-2 bg-taxi-yellow/20 border border-taxi-yellow/30 rounded-full text-taxi-yellow text-sm font-medium mb-6"
          >
            <PhoneIcon class="h-4 w-4 mr-2" />
            Service disponible 24h/24 - 7j/7
          </div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">
            Réservez votre Taxi aux Sables d'Olonne
          </h1>
          <p class="text-xl lg:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès maintenant • Réponse immédiate • Service professionnel garanti
          </p>
          <div
            class="relative w-full max-w-2xl mx-auto h-40 rounded-xl overflow-hidden shadow-lg mb-8"
          >
            <NuxtImg
              src="/images/sables-olonne-plage-immeubles.jpg"
              alt="Plage des Sables d'Olonne avec immeubles"
              class="w-full h-full object-cover"
              width="600"
              height="160"
              placeholder
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
            <div class="absolute bottom-3 left-4 text-white text-sm font-medium">
              🏖️ Plage des Sables d'Olonne
            </div>
          </div>
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
          </div>
        </div>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Informations de contact -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Nos coordonnées
          </h2>

          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <PhoneIcon class="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">
                  Téléphone
                </h3>
                <a
                  href="tel:0668314690"
                  class="text-lg font-bold text-primary-600 hover:text-primary-700"
                  aria-label="Appeler le taxi au 06 68 31 46 90"
                >
                  06 68 31 46 90
                </a>
                <p class="text-gray-700 text-sm">
                  Disponible 24h/24 - 7j/7
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <EnvelopeIcon class="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">
                  Email
                </h3>
                <a
                  href="mailto:contact@taxi-les-sables-olonne.fr"
                  class="text-primary-600 hover:text-primary-700"
                  aria-label="Envoyer un email à contact@taxi-les-sables-olonne.fr"
                >
                  contact@taxi-les-sables-olonne.fr
                </a>
                <p class="text-gray-700 text-sm">
                  Réponse sous 2h en moyenne
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <MapPinIcon class="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">
                  Adresse
                </h3>
                <p class="text-gray-900">
                  Place Napoléon III
                </p>
                <p class="text-gray-900">
                  85100 Les Sables d'Olonne
                </p>
                <p class="text-gray-700 text-sm">
                  Liaisons La Roche-sur-Yon, Nantes, Challans
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <ClockIcon class="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">
                  Horaires
                </h3>
                <p class="text-gray-900">
                  Service 24h/24 - 7j/7
                </p>
                <p class="text-gray-700 text-sm">
                  Réservation conseillée pour les trajets de nuit
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulaire de réservation -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Demande de réservation
          </h2>

          <!-- Messages de succès/erreur -->
          <div
            v-if="showSuccess"
            class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
          >
            <div class="flex items-center">
              <div class="text-green-600 mr-3">
                ✅
              </div>
              <div>
                <h3 class="text-green-800 font-semibold">
                  Demande envoyée avec succès !
                </h3>
                <p class="text-green-700 text-sm">
                  Nous vous recontacterons dans les plus brefs délais au numéro indiqué.
                </p>
              </div>
            </div>
          </div>

          <div
            v-if="showError"
            class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
          >
            <div class="flex items-center">
              <div class="text-red-600 mr-3">
                ❌
              </div>
              <div>
                <h3 class="text-red-800 font-semibold">
                  Erreur lors de l'envoi
                </h3>
                <p class="text-red-700 text-sm">
                  Veuillez réessayer ou nous appeler directement au 06 68 31 46 90.
                </p>
              </div>
            </div>
          </div>

          <form
            class="space-y-6"
            @submit.prevent="submitForm"
          >
            <div>
              <label
                for="service"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Type de service *
              </label>
              <select
                id="service"
                v-model="form.service"
                required
                class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                :class="formErrors.service ? 'border-red-300 bg-red-50' : 'border-gray-300'"
              >
                <option value="">
                  Sélectionnez un service
                </option>
                <option value="local">
                  Transport local (Sables, Olonne)
                </option>
                <option value="gare">
                  Liaison gare des Sables d'Olonne
                </option>
                <option value="longue">
                  Longue distance (La Roche, Nantes)
                </option>
                <option value="medical">
                  Transport médical conventionné
                </option>
                <option value="aeroport">
                  Aéroport Nantes
                </option>
              </select>
              <p
                v-if="formErrors.service"
                class="mt-1 text-sm text-red-600"
              >
                {{ formErrors.service }}
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  for="date"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Date *
                </label>
                <input
                  id="date"
                  v-model="form.date"
                  type="date"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
              </div>
              <div>
                <label
                  for="time"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Heure *
                </label>
                <input
                  id="time"
                  v-model="form.time"
                  type="time"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
              </div>
            </div>

            <div>
              <label
                for="pickup"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Adresse de prise en charge *
              </label>
              <input
                id="pickup"
                v-model="form.pickup"
                type="text"
                placeholder="Adresse complète de départ"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
            </div>

            <div>
              <label
                for="destination"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Destination *
              </label>
              <input
                id="destination"
                v-model="form.destination"
                type="text"
                placeholder="Adresse de destination"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
            </div>

            <div>
              <label
                for="passengers"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Nombre de passagers
              </label>
              <select
                id="passengers"
                v-model="form.passengers"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="1">
                  1 passager
                </option>
                <option value="2">
                  2 passagers
                </option>
                <option value="3">
                  3 passagers
                </option>
                <option value="4">
                  4 passagers
                </option>
                <option value="5+">
                  5 passagers ou plus
                </option>
              </select>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nom complet *
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
              </div>
              <div>
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Téléphone *
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-2"
              >Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
            </div>

            <div>
              <label
                for="notes"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Informations complémentaires
              </label>
              <textarea
                id="notes"
                v-model="form.notes"
                rows="4"
                placeholder="Prescription médicale, bagages, instructions particulières..."
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-500 focus:border-primary-500"
              />
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <span v-if="!isSubmitting">Envoyer la demande</span>
              <span
                v-else
                class="flex items-center"
              >
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Envoi en cours...
              </span>
            </button>
          </form>
        </div>
      </div>

      <!-- Zone de desserte détaillée -->
      <section class="mt-16 bg-white rounded-2xl shadow-lg p-8">
        <div class="text-center mb-8">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Nos zones de desserte
          </h2>
          <p class="text-lg text-gray-700">
            Service de taxi professionnel dans toute la Vendée et au-delà
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 text-center">
            <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPinIcon class="h-6 w-6 text-primary-600" />
            </div>
            <h3 class="font-bold text-gray-900 mb-3 text-lg">Zone Locale</h3>
            <ul class="text-sm text-gray-800 space-y-1">
              <li><strong>Les Sables d'Olonne</strong></li>
              <li>Olonne-sur-Mer</li>
              <li>Château d'Olonne</li>
              <li>La Chaume</li>
              <li>L'Île d'Olonne</li>
              <li>Sainte-Foy</li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-3 text-lg">Villes Vendée</h3>
            <ul class="text-sm text-gray-800 space-y-1">
              <li><strong>La Roche-sur-Yon</strong></li>
              <li>Challans</li>
              <li>Luçon</li>
              <li>Aizenay</li>
              <li>Saint-Gilles-Croix-de-Vie</li>
              <li>Talmont-Saint-Hilaire</li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 text-center">
            <div class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="h-6 w-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-3 text-lg">Gares & Aéroports</h3>
            <ul class="text-sm text-gray-800 space-y-1">
              <li><strong>Gare SNCF Sables d'Olonne</strong></li>
              <li>Gare TGV La Roche-sur-Yon</li>
              <li><strong>Aéroport Nantes Atlantique</strong></li>
              <li>Gare de Luçon</li>
              <li>Gare de Challans</li>
              <li>Correspondances TER</li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 text-center">
            <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-3 text-lg">Établissements Médicaux</h3>
            <ul class="text-sm text-gray-800 space-y-1">
              <li><strong>CHD Vendée La Roche-sur-Yon</strong></li>
              <li>Clinique Saint-Charles</li>
              <li>Centre hospitalier Challans</li>
              <li><strong>CHU de Nantes</strong></li>
              <li>Institut de Cancérologie</li>
              <li>Centres de rééducation</li>
            </ul>
          </div>
        </div>

        <div class="mt-8 p-6 bg-blue-50 rounded-xl text-center">
          <p class="text-blue-800 font-medium">
            <strong>Longues distances :</strong> Nantes, Angers, Poitiers, Niort, Bordeaux
          </p>
          <p class="text-blue-700 text-sm mt-2">
            Devis gratuit sur demande • Tarifs préférentiels pour trajets réguliers
          </p>
        </div>
      </section>

      <!-- FAQ Contact -->
      <section class="mt-16 bg-gray-50 rounded-2xl p-8">
        <div class="text-center mb-8">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Questions fréquentes sur les réservations
          </h2>
          <p class="text-lg text-gray-700">
            Tout ce que vous devez savoir pour réserver votre taxi
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="space-y-6">
            <article class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                Combien de temps à l'avance faut-il réserver ?
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Pour les courses locales, une réservation <strong>30 minutes à l'avance</strong> suffit généralement. Pour les transferts aéroport ou longues distances, nous recommandons de réserver <strong>24h à l'avance</strong>. En urgence, nous faisons notre maximum pour vous satisfaire.
              </p>
            </article>

            <article class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                Puis-je annuler ou modifier ma réservation ?
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Oui, les annulations et modifications sont possibles <strong>gratuitement jusqu'à 1h avant</strong> l'heure de prise en charge. Appelez-nous au 06 68 31 46 90 pour toute modification.
              </p>
            </article>

            <article class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                Comment sont calculés les tarifs ?
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Nos tarifs suivent <strong>la réglementation préfectorale de Vendée</strong>. Ils incluent la prise en charge, le kilométrage et les éventuels suppléments (nuit, dimanche, bagages). Devis gratuit sur demande.
              </p>
            </article>
          </div>

          <div class="space-y-6">
            <article class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                Quels moyens de paiement acceptez-vous ?
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Nous acceptons les <strong>espèces, cartes bancaires, chèques</strong> et le <strong>tiers payant CPAM</strong> pour les transports médicaux conventionnés. Paiement à bord ou facturation pour les entreprises.
              </p>
            </article>

            <article class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                Acceptez-vous les animaux de compagnie ?
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Oui, nous acceptons les <strong>animaux de compagnie</strong> dans nos véhicules. Merci de le préciser lors de votre réservation. Les animaux doivent être tenus en laisse ou dans un transporteur selon leur taille.
              </p>
            </article>

            <article class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                Que faire si mon vol/train a du retard ?
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Nous <strong>surveillons les horaires en temps réel</strong> pour les vols et trains. En cas de retard, votre taxi vous attendra sans supplément pendant 30 minutes. Au-delà, un forfait d'attente s'applique.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- Témoignages clients -->
      <section class="mt-16 bg-white rounded-2xl shadow-lg p-8">
        <div class="text-center mb-8">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p class="text-lg text-gray-700">
            Témoignages de satisfaction sur notre service de réservation
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
            <div class="flex items-center justify-center mb-4">
              <div class="text-yellow-400 text-xl">★★★★★</div>
            </div>
            <p class="text-gray-800 mb-4 italic leading-relaxed">
              "Réservation très simple par téléphone. Le chauffeur était à l'heure précise et très professionnel. Service impeccable pour mes trajets réguliers vers La Roche-sur-Yon."
            </p>
            <div class="text-sm text-gray-700">
              <strong>Christine M.</strong> - Cliente régulière
            </div>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center">
            <div class="flex items-center justify-center mb-4">
              <div class="text-yellow-400 text-xl">★★★★★</div>
            </div>
            <p class="text-gray-800 mb-4 italic leading-relaxed">
              "J'ai réservé pour un transfert à l'aéroport de Nantes. Malgré un changement d'horaire de dernière minute, ils ont su s'adapter. Très réactifs et compréhensifs."
            </p>
            <div class="text-sm text-gray-700">
              <strong>Marc D.</strong> - Transfert aéroport
            </div>
          </div>

          <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 text-center">
            <div class="flex items-center justify-center mb-4">
              <div class="text-yellow-400 text-xl">★★★★★</div>
            </div>
            <p class="text-gray-800 mb-4 italic leading-relaxed">
              "Service 24h/24 vraiment fiable. Appelé en urgence à 2h du matin, le taxi était là en 15 minutes. Merci pour votre disponibilité exceptionnelle !"
            </p>
            <div class="text-sm text-gray-700">
              <strong>Sophie L.</strong> - Urgence nocturne
            </div>
          </div>
        </div>

        <div class="mt-8 text-center">
          <p class="text-gray-600 text-sm">
            Plus de <strong>500 clients satisfaits</strong> nous font confiance chaque mois
          </p>
        </div>
      </section>

      <!-- Info supplémentaire -->
      <div
        class="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 lg:p-12 text-center"
      >
        <h2 class="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
          Réservation immédiate ou urgence ?
        </h2>
        <p class="text-lg mb-6 text-gray-700">
          Appelez-nous directement - Service 24h/24
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:0668314690"
            class="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-colors duration-200 transform hover:scale-105 shadow-lg"
            aria-label="Appeler le taxi au 06 68 31 46 90"
          >
            <PhoneIcon
              class="h-5 w-5 mr-2"
              aria-hidden="true"
            />
            06 68 31 46 90
          </a>
          <NuxtLink
            to="/tarifs"
            class="inline-flex items-center px-8 py-4 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold rounded-xl transition-all duration-200"
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
    </div>
  </div>
</template>

<script setup>
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CurrencyEuroIcon,
} from '@heroicons/vue/24/outline'

const form = ref({
  service: '',
  date: '',
  time: '',
  pickup: '',
  destination: '',
  passengers: '1',
  name: '',
  phone: '',
  email: '',
  notes: '',
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

const formErrors = ref({})

// Validation du formulaire
const validateForm = () => {
  const errors = {}

  if (!form.value.service) errors.service = 'Le type de service est requis'
  if (!form.value.date) errors.date = 'La date est requise'
  if (!form.value.time) errors.time = 'L\'heure est requise'
  if (!form.value.pickup) errors.pickup = 'L\'adresse de prise en charge est requise'
  if (!form.value.destination) errors.destination = 'La destination est requise'
  if (!form.value.name) errors.name = 'Le nom est requis'
  if (!form.value.phone) errors.phone = 'Le téléphone est requis'

  // Validation email si fourni
  if (form.value.email && !/^[^@]+@[^@][^.@]*\.[^@]+$/.test(form.value.email)) {
    errors.email = 'Format d\'email invalide'
  }

  // Validation téléphone français
  if (
    form.value.phone
    && !/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(form.value.phone)
  ) {
    errors.phone = 'Format de téléphone invalide'
  }

  formErrors.value = errors
  return Object.keys(errors).length === 0
}

const submitForm = async () => {
  if (!validateForm()) {
    console.log(formErrors)
    return
  }

  isSubmitting.value = true
  showSuccess.value = false
  showError.value = false
  formErrors.value = {}

  try {
    await $fetch('/api/send-email', {
      method: 'POST',
      body: form.value,
    })

    showSuccess.value = true

    // Reset du formulaire après succès
    setTimeout(() => {
      form.value = {
        service: '',
        date: '',
        time: '',
        pickup: '',
        destination: '',
        passengers: '1',
        name: '',
        phone: '',
        email: '',
        notes: '',
      }
      showSuccess.value = false
    }, 5000)
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.error('Erreur lors de l\'envoi:', error)
    showError.value = true

    setTimeout(() => {
      showError.value = false
    }, 5000)
  }
  finally {
    isSubmitting.value = false
  }
}

// Schema.org ContactPage pour la page contact
useSchemaOrg([
  {
    '@type': 'ContactPage',
    'name': 'Contact Taxi Les Sables d\'Olonne',
    'description':
        'Page de contact pour réservations et informations. Service 24h/24, transport médical, navettes aéroport et gare.',
    'url': 'https://www.taxi-les-sables-olonne.fr/contact',
    'mainEntity': {
      '@type': 'LocalBusiness',
      'name': 'Taxi Les Sables d\'Olonne',
      'telephone': '+33668314690',
      'email': 'contact@taxi-les-sables-olonne.fr',
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
      'openingHours': 'Mo-Su 00:00-23:59',
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'telephone': '+33668314690',
          'contactType': 'réservations',
          'areaServed': 'FR',
          'availableLanguage': 'French',
          'hoursAvailable': 'Mo-Su 00:00-23:59',
        },
        {
          '@type': 'ContactPoint',
          'email': 'contact@taxi-les-sables-olonne.fr',
          'contactType': 'customer service',
          'areaServed': 'FR',
          'availableLanguage': 'French',
        },
      ],
    },
    'potentialAction': {
      '@type': 'CommunicateAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': 'https://www.taxi-les-sables-olonne.fr/contact',
        'actionPlatform': 'http://schema.org/WebSite',
      },
    },
  },
  // Schema.org FAQ pour les questions de réservation
  {
    '@type': 'FAQPage',
    'name': 'Questions fréquentes sur les réservations de taxi',
    'description': 'Réponses aux questions les plus fréquentes sur les réservations de taxi aux Sables d\'Olonne',
    'url': 'https://www.taxi-les-sables-olonne.fr/contact',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Combien de temps à l\'avance faut-il réserver ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pour les courses locales, une réservation 30 minutes à l\'avance suffit généralement. Pour les transferts aéroport ou longues distances, nous recommandons de réserver 24h à l\'avance. En urgence, nous faisons notre maximum pour vous satisfaire.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Puis-je annuler ou modifier ma réservation ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Oui, les annulations et modifications sont possibles gratuitement jusqu\'à 1h avant l\'heure de prise en charge. Appelez-nous au 06 68 31 46 90 pour toute modification.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Comment sont calculés les tarifs ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Nos tarifs suivent la réglementation préfectorale de Vendée. Ils incluent la prise en charge, le kilométrage et les éventuels suppléments (nuit, dimanche, bagages). Devis gratuit sur demande.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Quels moyens de paiement acceptez-vous ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Nous acceptons les espèces, cartes bancaires, chèques et le tiers payant CPAM pour les transports médicaux conventionnés. Paiement à bord ou facturation pour les entreprises.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Acceptez-vous les animaux de compagnie ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Oui, nous acceptons les animaux de compagnie dans nos véhicules. Merci de le préciser lors de votre réservation. Les animaux doivent être tenus en laisse ou dans un transporteur selon leur taille.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Que faire si mon vol/train a du retard ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Nous surveillons les horaires en temps réel pour les vols et trains. En cas de retard, votre taxi vous attendra sans supplément pendant 30 minutes. Au-delà, un forfait d\'attente s\'applique.',
        },
      },
    ],
  },
])

useSeoMeta({
  title: 'Contact - Réservation 06 68 31 46 90',
  description:
      'Contact Taxi Les Sables d\'Olonne - Réservation 06 68 31 46 90. Service 24h/24, Place Napoléon III. Transport médical conventionné, gare, aéroport.',
  
  // Open Graph
  ogTitle: 'Contact Taxi Les Sables d\'Olonne - Réservation 06 68 31 46 90',
  ogDescription: 'Contact Taxi Les Sables d\'Olonne - Réservation 06 68 31 46 90. Service 24h/24, Place Napoléon III. Transport médical conventionné, gare, aéroport.',
  ogImage: 'https://www.taxi-les-sables-olonne.fr/images/twitter_og.png',
  ogUrl: 'https://www.taxi-les-sables-olonne.fr/contact',
  ogType: 'website',
  ogSiteName: 'Taxi Les Sables d\'Olonne',
  
  // Twitter Card
  twitterTitle: 'Contact Taxi Les Sables d\'Olonne - Réservation 06 68 31 46 90',
  twitterDescription: 'Contact Taxi Les Sables d\'Olonne - Réservation 06 68 31 46 90. Service 24h/24, transport médical, gare, aéroport.',
  twitterImage: 'https://www.taxi-les-sables-olonne.fr/images/twitter_og.png',
  twitterCard: 'summary_large_image',
})
</script>
