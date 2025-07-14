<template>
  <div class="pt-20 pb-16 bg-gray-50 min-h-screen">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
        <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
        
        <div class="prose prose-lg max-w-none">
          <h2>Collecte des données</h2>
          <p>Nous collectons les données personnelles que vous nous fournissez volontairement lors de :</p>
          <ul>
            <li>Demandes de réservation via notre formulaire</li>
            <li>Appels téléphoniques pour nos services</li>
            <li>Correspondance par email</li>
          </ul>

          <h2>Utilisation des données</h2>
          <p>Vos données personnelles sont utilisées exclusivement pour :</p>
          <ul>
            <li>Traiter vos demandes de transport</li>
            <li>Vous contacter concernant nos services</li>
            <li>Assurer le suivi de nos prestations</li>
            <li>Respecter nos obligations légales</li>
          </ul>

          <h2>Conservation des données</h2>
          <p>Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées, conformément aux obligations légales.</p>

          <h2>Partage des données</h2>
          <p>Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, sauf :</p>
          <ul>
            <li>Si la loi l'exige</li>
            <li>Pour la fourniture de nos services de transport</li>
            <li>Avec votre consentement explicite</li>
          </ul>

          <h2>Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit d'effacement</li>
            <li>Droit d'opposition</li>
            <li>Droit à la portabilité</li>
          </ul>

          <h2>Cookies</h2>
          <p>Notre site utilise des cookies techniques nécessaires au bon fonctionnement du site. Aucun cookie de tracking ou publicitaire n'est utilisé.</p>

          <h2>Contact</h2>
          <p>Pour exercer vos droits ou pour toute question concernant cette politique :</p>
          <ul>
            <li>Téléphone : 06 68 31 46 90</li>
            <li>Email : contact@taxi-sables-olonne.fr</li>
            <li>Adresse : Place Napoléon III, 85100 Les Sables d'Olonne</li>
          </ul>

          <p class="text-sm text-gray-600 mt-8">Dernière mise à jour : Janvier 2024</p>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-200">
          <NuxtLink 
            to="/" 
            class="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            ← Retour à l'accueil
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Politique de Confidentialité - Taxi Les Sables d\'Olonne',
  description: 'Politique de confidentialité et protection des données de Taxi Les Sables d\'Olonne. RGPD et respect de votre vie privée.',
  robots: 'noindex, nofollow'
})
</script>