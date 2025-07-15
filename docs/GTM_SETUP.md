# Guide d'installation Google Tag Manager (GTM)

## 1. Configuration Google Tag Manager

### Étape 1 : Créer un compte GTM

1. Aller sur [tagmanager.google.com](https://tagmanager.google.com)
2. Créer un compte :
   - Nom du compte : `Taxi Les Sables d'Olonne`
   - Nom du conteneur : `taxi-les-sables-olonne.fr`
   - Plateforme cible : `Web`
3. Récupérer l'ID GTM (format : `GTM-XXXXXXX`)

### Étape 2 : Configuration environnement

Ajouter dans ton fichier `.env` :

```bash
NUXT_GTM_ID=GTM-XXXXXXX  # Remplace par ton ID
```

## 2. Balises recommandées dans GTM

### Google Analytics 4 (GA4)

```
Type de balise : Google Analytics - Configuration GA4
ID de mesure : G-XXXXXXXXXX
Déclencheur : All Pages
```

### Facebook Pixel

```
Type de balise : HTML personnalisé
Code HTML : <script>!function(f,b,e,v,n,t,s)...</script>
Déclencheur : All Pages
```

### Événements personnalisés configurés :

#### 1. Appels téléphoniques

```
Nom de l'événement : phone_call
Déclencheur : Clic sur tel:0668314690
Variables :
- event_category : engagement
- event_label : {{source}}
- phone_number : 0668314690
```

#### 2. Soumission formulaire

```
Nom de l'événement : form_submission
Déclencheur : Événement personnalisé form_submission
Variables :
- event_category : form
- event_label : {{form_name}}
- success : {{success_status}}
```

#### 3. Pages vues

```
Nom de l'événement : page_view
Déclencheur : Toutes les pages
Variables :
- event_category : navigation
- page_name : {{page_name}}
```

## 3. Utilisation dans le code

### Tracking des appels

```javascript
const { trackCall } = useGTM()

// Sur un bouton d'appel
@click="trackCall('header')"
```

### Tracking des formulaires

```javascript
const { trackFormSubmission } = useGTM()

// Succès
trackFormSubmission('contact_form', true)

// Échec
trackFormSubmission('contact_form', false)
```

### Événements personnalisés

```javascript
const { trackEvent } = useGTM()

trackEvent('custom_event', {
  category: 'engagement',
  label: 'button_click',
  value: 1,
})
```

## 4. Configuration avancée

### Variables GTM utiles

- `{{Page URL}}` - URL de la page
- `{{Page Title}}` - Titre de la page
- `{{Click URL}}` - URL du lien cliqué
- `{{Click Text}}` - Texte du lien cliqué

### Déclencheurs utiles

- `All Pages` - Toutes les pages
- `Page View` - Vue de page
- `Click - All Elements` - Tous les clics
- `Form Submission` - Soumission de formulaire

## 5. Test et débogage

### Mode Debug

- Activer `debug: true` dans la config Nuxt
- Utiliser l'extension GTM Preview
- Vérifier les événements dans la console

### Validation des données

```javascript
// Vérifier que GTM est chargé
if (window.dataLayer) {
  console.log('GTM chargé')
}

// Voir les événements
window.dataLayer.push({
  event: 'test_event',
  debug: true,
})
```

## 6. Événements spécifiques au taxi

### Réservation par téléphone

```javascript
trackEvent('booking_attempt', {
  method: 'phone',
  source: 'header_button',
})
```

### Demande de devis

```javascript
trackEvent('quote_request', {
  service_type: 'airport_transfer',
  form_location: 'contact_page',
})
```

### Navigation services

```javascript
trackEvent('service_view', {
  service_name: 'transport_medical',
  user_intent: 'information',
})
```

## 7. Intégration avec Google Analytics

### Objectifs recommandés :

1. **Appels téléphoniques** : Événement `phone_call`
2. **Formulaires soumis** : Événement `form_submission`
3. **Pages services vues** : Événement `page_view`
4. **Temps passé sur site** : Engagement
5. **Retour visiteur** : Fidélisation

### Audiences utiles :

- Visiteurs ayant appelé
- Visiteurs ayant soumis le formulaire
- Visiteurs pages services
- Visiteurs récurrents

## 8. Respect de la vie privée

### RGPD / Cookies

- Utiliser `respectDoNotTrack: true`
- Intégrer un banner de consentement
- Configurer les balises selon le consentement

### Données sensibles

- Ne pas tracker d'informations personnelles
- Anonymiser les données utilisateur
- Respecter les paramètres de confidentialité
