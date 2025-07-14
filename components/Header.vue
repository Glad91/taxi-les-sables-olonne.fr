<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 text-lg sm:text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors" aria-label="Retour à l'accueil - Taxi Les Sables d'Olonne">
          <div class="w-8 h-8 bg-taxi-yellow rounded-lg flex items-center justify-center" aria-hidden="true">
            🚕
          </div>
          <span class="block">Taxi Les Sables d'Olonne</span>
        </NuxtLink>

        <!-- Navigation Desktop -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            class="text-gray-800 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            :class="{ 'text-primary-600': $route.path === item.href }"
          >
            {{ item.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full" 
                  :class="{ 'w-full': $route.path === item.href }"></span>
          </NuxtLink>
        </nav>

        <!-- Bouton d'appel CTA -->
        <div class="hidden sm:flex items-center space-x-4">
          <a 
            href="tel:0668314690" 
            class="bg-primary-600 hover:bg-primary-700 text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-1 sm:space-x-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
            aria-label="Appeler le taxi au 06 68 31 46 90"
          >
            <PhoneIcon class="h-4 w-4" aria-hidden="true" />
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
          >
            <PhoneIcon class="h-5 w-5" aria-hidden="true" />
            <span class="sr-only">Téléphoner</span>
          </a>
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-800 hover:text-primary-600 transition-colors p-1"
            :aria-label="mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
            aria-expanded="mobileMenuOpen"
            aria-controls="mobile-menu"
          >
            <Bars3Icon v-if="!mobileMenuOpen" class="h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="h-6 w-6" aria-hidden="true" />
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
      <div v-if="mobileMenuOpen" id="mobile-menu" class="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
        <div class="px-4 py-6 space-y-4">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            @click="mobileMenuOpen = false"
            class="block text-gray-800 hover:text-primary-600 font-medium py-2 transition-colors"
            :class="{ 'text-primary-600': $route.path === item.href }"
          >
            {{ item.name }}
          </NuxtLink>
          <a 
            href="tel:0668314690" 
            class="block bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-lg font-medium transition-colors text-center"
            aria-label="Appeler le taxi au 06 68 31 46 90"
          >
            <span aria-hidden="true">📞</span> 06 68 31 46 90
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Tarifs', href: '/tarifs' },
  { name: 'Contact', href: '/contact' },
]

// Fermer le menu mobile quand on change de route
watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
})
</script>