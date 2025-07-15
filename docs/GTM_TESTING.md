# 🧪 Guide de test GTM complet

## 1. Configuration initiale

### A. Créer un compte GTM de test

1. Va sur [tagmanager.google.com](https://tagmanager.google.com)
2. Créer un compte de test : `Taxi Test - Les Sables d'Olonne`
3. Conteneur web : `localhost-test`
4. Récupère l'ID : `GTM-XXXXXXX`

### B. Configurer l'environnement local

```bash
# Dans ton fichier .env.local
NUXT_GTM_ID=GTM-XXXXXXX  # Ton vrai ID de test
```

## 2. Tests manuels

### A. Test avec fichier HTML

1. Ouvre `test-gtm.html` dans ton navigateur
2. Clique sur "Vérifier GTM"
3. Teste chaque type d'événement
4. Vérifie que les événements apparaissent dans DataLayer

### B. Test sur ton site Nuxt

1. Lance `npm run dev`
2. Va sur `http://localhost:3000`
3. Ouvre la console (F12)
4. Vérifie que GTM est chargé :

```javascript
console.log(window.dataLayer)
console.log('GTM chargé:', !!window.dataLayer)
```

## 3. Tests des événements spécifiques

### A. Test des appels téléphoniques

```javascript
// Dans la console du navigateur
// Clique sur n'importe quel bouton d'appel sur le site
// Vérifie dans la console :
console.log(window.dataLayer.filter(item => item.event === 'phone_call'))
```

### B. Test des pages vues

```javascript
// Navigue entre les pages du site
// Vérifie dans la console :
console.log(window.dataLayer.filter(item => item.event === 'page_view'))
```

### C. Test du formulaire de contact

1. Va sur `/contact`
2. Remplis le formulaire
3. Soumets-le
4. Vérifie dans la console :

```javascript
console.log(window.dataLayer.filter(item => item.event === 'form_submission'))
```

## 4. Configuration GTM (dans l'interface)

### A. Balises à créer dans GTM

#### 1. Balise Google Analytics 4

```
Type : Google Analytics - Configuration GA4
ID de mesure : G-XXXXXXXXXX
Déclencheurs : All Pages
```

#### 2. Balise événement appel téléphonique

```
Type : Google Analytics - Événement GA4
Nom de l'événement : phone_call
Paramètres :
- event_category : {{DLV - event_category}}
- event_label : {{DLV - event_label}}
- phone_number : {{DLV - phone_number}}
Déclencheur : phone_call_trigger
```

#### 3. Balise événement formulaire

```
Type : Google Analytics - Événement GA4
Nom de l'événement : form_submission
Paramètres :
- event_category : {{DLV - event_category}}
- form_name : {{DLV - event_label}}
- success : {{DLV - success}}
Déclencheur : form_submission_trigger
```

### B. Variables à créer

#### Variables DataLayer (DLV)

- `DLV - event_category` → `event_category`
- `DLV - event_label` → `event_label`
- `DLV - phone_number` → `phone_number`
- `DLV - service_type` → `service_type`
- `DLV - success` → `success`

### C. Déclencheurs à créer

#### 1. Déclencheur appel téléphonique

```
Type : Événement personnalisé
Nom de l'événement : phone_call
```

#### 2. Déclencheur formulaire

```
Type : Événement personnalisé
Nom de l'événement : form_submission
```

#### 3. Déclencheur intérêt service

```
Type : Événement personnalisé
Nom de l'événement : service_interest
```

## 5. Tests avec GTM Preview

### A. Activer le mode preview

1. Dans GTM, clique sur "Preview"
2. Entre ton URL : `http://localhost:3000`
3. Une nouvelle fenêtre s'ouvre avec le debugger

### B. Tester les événements

1. Navigue sur ton site
2. Clique sur les boutons d'appel
3. Soumets le formulaire
4. Vérifie dans GTM Preview que les événements se déclenchent

## 6. Tests automatisés

### A. Script de test complet

```javascript
// test-all-events.js
function testAllGTMEvents() {
  const tests = [
    () => testPhoneCall('header_desktop'),
    () => testPhoneCall('contact_page'),
    () => testPageView('homepage'),
    () => testPageView('services'),
    () => testServiceClick('medical_transport'),
    () => testFormSubmission(true),
    () => testFormSubmission(false),
  ]

  tests.forEach((test, index) => {
    setTimeout(test, index * 1000) // 1 seconde entre chaque test
  })
}

function testPhoneCall(source) {
  window.dataLayer.push({
    event: 'phone_call',
    event_category: 'engagement',
    event_label: source,
    phone_number: '0668314690',
  })
  console.log('✅ Test phone_call:', source)
}

function testPageView(page) {
  window.dataLayer.push({
    event: 'page_view',
    event_category: 'navigation',
    page_name: page,
  })
  console.log('✅ Test page_view:', page)
}

function testServiceClick(service) {
  window.dataLayer.push({
    event: 'service_interest',
    event_category: 'engagement',
    service_type: service,
    source: 'test',
  })
  console.log('✅ Test service_interest:', service)
}

function testFormSubmission(success) {
  window.dataLayer.push({
    event: 'form_submission',
    event_category: 'form',
    event_label: 'contact_form',
    success: success,
  })
  console.log('✅ Test form_submission:', success)
}

// Lancer tous les tests
testAllGTMEvents()
```

## 7. Vérification en production

### A. Checklist avant mise en prod

- [ ] GTM ID configuré en variable d'environnement
- [ ] Toutes les balises configurées dans GTM
- [ ] Tests manuels réussis
- [ ] GTM Preview validé
- [ ] Respect RGPD (consentement cookies)

### B. Monitoring post-déploiement

1. Vérifier dans Google Analytics que les événements arrivent
2. Contrôler les taux de conversion
3. Analyser les sources d'appels les plus performantes

## 8. Dépannage

### Problèmes courants

#### GTM ne se charge pas

```javascript
// Vérifier dans la console
console.log('DataLayer:', window.dataLayer)
console.log('GTM ID:', 'GTM-XXXXXXX') // Remplace par ton ID
```

#### Événements non trackés

```javascript
// Vérifier que les fonctions existent
console.log('useGTM disponible:', typeof useGTM)
// Vérifier dans le composable
console.log(window.dataLayer.filter(item => item.event))
```

#### Erreurs de console

- Vérifier que l'ID GTM est correct
- S'assurer que le plugin GTM est chargé
- Contrôler les bloqueurs de pub (AdBlock, etc.)

## 9. Objectifs de conversion

### Événements clés à surveiller

1. **Appels téléphoniques** (conversion primaire)
2. **Soumissions formulaire** (leads)
3. **Intérêt services** (engagement)
4. **Pages tarifs** (intention)
5. **Retours visiteurs** (fidélisation)

### KPIs recommandés

- Taux de conversion appel/visite
- Source d'appel la plus performante
- Taux de complétion formulaire
- Pages les plus engageantes
