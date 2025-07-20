<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section principale -->
      <div class="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Informations entreprise -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-taxi-yellow rounded-lg flex items-center justify-center">
              🚕
            </div>
            <span class="text-xl font-bold">Taxi Les Sables d'Olonne</span>
          </div>
          <p class="text-gray-300 text-sm">
            Votre service de taxi de confiance aux Sables d'Olonne et dans toute la Vendée.
            Transport médical conventionné et liaisons longue distance.
          </p>
        </div>

        <!-- Contact rapide -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-taxi-yellow">
            Contact
          </h3>
          <div class="space-y-2 text-sm">
            <a
              href="tel:0668314690"
              class="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <PhoneIcon class="h-4 w-4" />
              <span>06 68 31 46 90</span>
            </a>
            <a
              href="mailto:contact@taxi-sables-olonne.fr"
              class="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <EnvelopeIcon class="h-4 w-4" />
              <span>contact@taxi-sables-olonne.fr</span>
            </a>
            <div class="flex items-center space-x-2 text-gray-300">
              <ClockIcon class="h-4 w-4" />
              <span>Service 24h/24 - 7j/7</span>
            </div>
          </div>
        </div>

        <!-- Zone de service -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-taxi-yellow">
            Zone de service
          </h3>
          <ul class="space-y-1 text-sm text-gray-300">
            <li>Place Napoléon III, Les Sables d'Olonne</li>
            <li>Olonne-sur-Mer</li>
            <li>Château d'Olonne</li>
            <li>La Roche-sur-Yon</li>
            <li>Nantes (sur réservation)</li>
          </ul>
          
          <!-- Liens utiles -->
          <div class="pt-2 border-t border-gray-800">
            <h4 class="text-sm font-medium text-taxi-yellow mb-2">Liens utiles</h4>
            <div class="space-y-1 text-xs text-gray-400">
              <a 
                href="https://www.ot-lessablesdolonne.fr/" 
                target="_blank" 
                rel="noopener"
                class="block hover:text-white transition-colors"
              >
                Office de Tourisme Les Sables d'Olonne
              </a>
              <a 
                href="https://www.lessablesdolonne.fr/" 
                target="_blank" 
                rel="noopener"
                class="block hover:text-white transition-colors"
              >
                Mairie des Sables d'Olonne
              </a>
            </div>
          </div>
        </div>

        <!-- Services -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-taxi-yellow">
            Services
          </h3>
          <ul class="space-y-1 text-sm text-gray-300">
            <li>Transport médical conventionné</li>
            <li>Liaison gare-aéroport</li>
            <li>Courses locales</li>
            <li>Longues distances</li>
            <li>Réservation 24h/24</li>
          </ul>
        </div>
      </div>

      <!-- Barre de copyright -->
      <div class="border-t border-gray-800 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 Taxi Les Sables d'Olonne. Tous droits réservés.</p>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <NuxtLink
              to="/mentions-legales"
              class="hover:text-white transition-colors"
            >
              Mentions légales
            </NuxtLink>
            <NuxtLink
              to="/confidentialite"
              class="hover:text-white transition-colors"
            >
              Confidentialité
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/vue/24/outline'
</script>
