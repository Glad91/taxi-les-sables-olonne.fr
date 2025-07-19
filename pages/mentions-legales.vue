<template>
  <div class="pt-20 pb-16 bg-gray-50 min-h-screen">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
        <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
          Mentions Légales
        </h1>

        <div class="prose prose-lg max-w-none">
          <h2>Informations légales</h2>
          <p>
            <strong>Raison sociale :</strong>
            Taxi Les Sables d'Olonne
          </p>
          <p>
            <strong>Adresse :</strong>
            Place Napoléon III, 85100 Les Sables d'Olonne
          </p>
          <p>
            <strong>Téléphone :</strong>
            06 68 31 46 90
          </p>
          <p>
            <strong>Email :</strong>
            contact@taxi-les-sables-olonne.fr
          </p>
          <p>
            <strong>Site web :</strong>
            https://www.taxi-les-sables-olonne.fr
          </p>

          <h2>Activité</h2>
          <p>Transport de personnes par taxi. Service de transport médical conventionné.</p>

          <h2>Hébergement</h2>
          <p>Ce site est hébergé par un prestataire d'hébergement web.</p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit
            d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
          </p>

          <h2>Protection des données</h2>
          <p>
            Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au
            Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit
            d'accès, de rectification et de suppression des données vous concernant.
          </p>

          <h2>Contact</h2>
          <p>Pour toute question relative aux mentions légales, vous pouvez nous contacter :</p>
          <ul>
            <li>Par téléphone : 06 68 31 46 90</li>
            <li>Par email : contact@taxi-les-sables-olonne.fr</li>
          </ul>
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
  title: 'Mentions Légales - Taxi Les Sables d\'Olonne',
  description:
      'Mentions légales de Taxi Les Sables d\'Olonne. Informations légales, contact et conditions d\'utilisation.',
  
  // Open Graph
  ogTitle: 'Mentions Légales - Taxi Les Sables d\'Olonne',
  ogDescription: 'Mentions légales de Taxi Les Sables d\'Olonne. Informations légales, contact et conditions d\'utilisation.',
  ogImage: 'https://www.taxi-les-sables-olonne.fr/images/twitter_og.png',
  ogUrl: 'https://www.taxi-les-sables-olonne.fr/mentions-legales',
  ogType: 'website',
  ogSiteName: 'Taxi Les Sables d\'Olonne',
  
  // Twitter Card
  twitterTitle: 'Mentions Légales - Taxi Les Sables d\'Olonne',
  twitterDescription: 'Mentions légales de Taxi Les Sables d\'Olonne. Informations légales, contact et conditions d\'utilisation.',
  twitterImage: 'https://www.taxi-les-sables-olonne.fr/images/twitter_og.png',
  twitterCard: 'summary_large_image',
  
  canonicalUrl: 'https://www.taxi-les-sables-olonne.fr/mentions-legales',
  robots: 'noindex, nofollow',
})
</script>
