<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
  >
    <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="flex items-center space-x-2 text-lg sm:text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
          aria-label="Retour à l'accueil - Taxi Les Sables d'Olonne"
        >
          <div
            class="w-8 h-8 bg-taxi-yellow rounded-lg flex items-center justify-center"
            aria-hidden="true"
          >
            🚕
          </div>
          <span class="block">Taxi Les Sables d'Olonne</span>
        </NuxtLink>

        <!-- Navigation Desktop -->
        <nav class="hidden md:flex items-center space-x-8">
          <div
            v-for="item in navigation"
            :key="item.name"
            class="relative group"
          >
            <NuxtLink
              :to="item.href"
              class="flex items-center text-gray-800 hover:text-primary-600 font-medium transition-colors duration-200"
              :class="{ 'text-primary-600': $route.path.startsWith(item.href) }"
            >
              <span>{{ item.name }}</span>
              <ChevronDownIcon
                v-if="item.children"
                class="h-5 w-5 ml-1 text-gray-400 group-hover:text-primary-600 transition-transform duration-200 group-hover:rotate-180"
              />
            </NuxtLink>
            <div
              v-if="item.children"
              class="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-all duration-200 invisible group-hover:visible z-10"
            >
              <div class="p-2">
                <NuxtLink
                  v-for="child in item.children"
                  :key="child.name"
                  :to="child.href"
                  class="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg"
                >
                  <p class="font-semibold">{{ child.name }}</p>
                  <p class="text-xs text-gray-500">{{ child.description }}</p>
                </NuxtLink>
              </div>
            </div>
          </div>
        </nav>

        <!-- Bouton d'appel CTA -->
        <div class="hidden sm:flex items-center space-x-4">
          <a
            href="tel:0668314690"
            class="bg-primary-600 hover:bg-primary-700 text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-1 sm:space-x-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
            aria-label="Appeler le taxi au 06 68 31 46 90"
            @click="trackCall('header_desktop')"
          >
            <PhoneIcon
              class="h-4 w-4"
              aria-hidden="true"
            />
            <span class="hidden md:block">06 68 31 46 90</span>
            <span class="md:hidden sr-only">Appeler</span>
          </a>
        </div>

        <!-- Actions mobiles -->
        <div class="flex items-center space-x-3 md:hidden">
          <a
            href="tel:0668314690"
            class="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-all duration-200 shadow-lg"
            aria-label="Appeler le taxi au 06 68 31 46 90"
            @click="trackCall('header_mobile')"
          >
            <PhoneIcon
              class="h-5 w-5"
              aria-hidden="true"
            />
            <span class="sr-only">Téléphoner</span>
          </a>
          <button
            class="text-gray-800 hover:text-primary-600 transition-colors p-1"
            :aria-label="mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-menu"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <Bars3Icon
              v-if="!mobileMenuOpen"
              class="h-6 w-6"
              aria-hidden="true"
            />
            <XMarkIcon
              v-else
              class="h-6 w-6"
              aria-hidden="true"
            />
            <span class="sr-only">{{ mobileMenuOpen ? 'Fermer' : 'Ouvrir' }} le menu</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu mobile overlay -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="mobileMenuOpen"
        id="mobile-menu"
        class="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg"
      >
        <div class="px-4 py-6 space-y-2">
          <div
            v-for="item in navigation"
            :key="item.name"
          >
            <NuxtLink
              v-if="!item.children"
              :to="item.href"
              class="block text-gray-800 hover:text-primary-600 font-medium py-2 transition-colors"
              :class="{ 'text-primary-600': $route.path === item.href }"
              @click="mobileMenuOpen = false"
            >
              {{ item.name }}
            </NuxtLink>
            <div v-else>
              <NuxtLink
                :to="item.href"
                class="block text-gray-800 hover:text-primary-600 font-medium py-2 transition-colors"
                :class="{ 'text-primary-600': $route.path.startsWith(item.href) }"
                @click="mobileMenuOpen = false"
              >
                {{ item.name }}
              </NuxtLink>
              <div class="pl-4 mt-2 space-y-1 border-l-2 border-gray-200">
                <NuxtLink
                  v-for="child in item.children"
                  :key="child.name"
                  :to="child.href"
                  class="block text-gray-600 hover:text-primary-600 py-2 transition-colors"
                  :class="{ 'text-primary-600': $route.path === child.href }"
                  @click="mobileMenuOpen = false"
                >
                  {{ child.name }}
                </NuxtLink>
              </div>
            </div>
          </div>
          <a
            href="tel:0668314690"
            class="block bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-lg font-medium transition-colors text-center mt-4"
            aria-label="Appeler le taxi au 06 68 31 46 90"
            @click="trackCall('mobile_menu')"
          >
            <span aria-hidden="true">📞</span>
            06 68 31 46 90
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { PhoneIcon, Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)

// GTM tracking
const { trackCall } = useGTM()

const navigation = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Services',
    href: '/services',
    children: [
      {
        name: 'Transport Médical',
        href: '/transport-medical',
        description: 'Service conventionné CPAM, ponctualité et confort.',
      },
      {
        name: 'Navette Gare & Aéroport',
        href: '/navette-aeroport-gare',
        description: 'Transferts fiables vers la gare et l\'aéroport de Nantes.',
      },
    ],
  },
  { name: 'Tarifs', href: '/tarifs' },
  { name: 'Contact', href: '/contact' },
]

// Fermer le menu mobile quand on change de route
watch(
  () => useRoute().path,
  () => {
    mobileMenuOpen.value = false
  },
)
</script>
