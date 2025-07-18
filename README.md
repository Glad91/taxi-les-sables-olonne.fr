# Taxi Les Sables d'Olonne

Site web officiel du service de taxi à Les Sables d'Olonne, spécialisé dans les transports locaux, médicaux et navettes aéroport/gare.

## 🚕 À propos

Service de taxi professionnel basé aux Sables d'Olonne en Vendée, proposant :
- Transports locaux et longue distance
- Transport médical conventionné CPAM
- Navettes aéroport et gares
- Disponible 24h/24, 7j/7

**Téléphone :** 06 68 31 46 90

## 🛠️ Stack technique

- **Framework :** Nuxt 3 avec rendu SSR
- **Styling :** Tailwind CSS avec palette de couleurs personnalisée
- **Icônes :** Heroicons Vue
- **Email :** Nodemailer avec SMTP Gmail
- **SEO :** @nuxtjs/seo avec balisage Schema.org complet
- **Images :** @nuxt/image pour l'optimisation
- **Polices :** Google Fonts (Inter, Poppins)

## 🚀 Installation

Installer les dépendances :

```bash
npm install
# ou
pnpm install
```

## 🔧 Configuration

Créer un fichier `.env` avec les variables suivantes :

```env
NUXT_EMAIL_SMTP_HOST=smtp.gmail.com
NUXT_EMAIL_SMTP_PORT=587
NUXT_EMAIL_SMTP_USER=votre-email@gmail.com
NUXT_EMAIL_SMTP_PASSWORD=votre-mot-de-passe-app
NUXT_PUBLIC_EMAIL_SENDER=votre-email@gmail.com
EMAIL_RECIPIENT=destinataire@gmail.com
```

## 💻 Développement

Lancer le serveur de développement sur `http://localhost:3000` :

```bash
npm run dev
# ou
pnpm dev
```

## 🏗️ Production

Construire l'application pour la production :

```bash
npm run build
# ou
pnpm build
```

Prévisualiser la version de production :

```bash
npm run preview
# ou
pnpm preview
```

Générer un site statique :

```bash
npm run generate
# ou
pnpm generate
```

## 📁 Structure du projet

```
├── assets/          # Images et ressources
├── components/      # Composants Vue réutilisables
├── pages/           # Pages du site
├── server/          # API serveur (envoi d'emails)
├── public/          # Fichiers statiques
└── nuxt.config.ts   # Configuration Nuxt
```

## 🎨 Palette de couleurs

- **Bleu principal :** `#2563eb` (primary-600)
- **Jaune taxi :** `#f59e0b` (taxi-yellow)
- Échelles de couleurs personnalisées définies dans `tailwind.config.js`

## 📄 Pages principales

- `/` - Page d'accueil avec présentation des services
- `/services` - Page des services principaux
- `/transport-medical` - Transport médical conventionné
- `/navette-aeroport-gare` - Navettes aéroport/gare
- `/tarifs` - Informations tarifaires
- `/contact` - Formulaire de contact avec intégration email

## 📧 Système d'email

- Point d'entrée API : `/server/api/send-email.ts`
- Utilise Nodemailer avec SMTP Gmail
- Templates HTML avec formatage français
- Validation et gestion d'erreurs

## 🔍 SEO

Configuration SEO complète :
- Balisage Schema.org pour organisation locale
- Configuration locale française
- Génération automatique sitemap et robots.txt
- URL du site : `https://www.taxi-les-sables-olonne.fr`

## 📱 Responsive Design

- Design mobile-first avec Tailwind CSS
- Navigation responsive avec menu hamburger
- Attributs d'accessibilité intégrés
- Affichage optimisé sur tous les écrans
