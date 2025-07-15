# Configuration EmailJS pour le formulaire de contact

## Étapes de configuration

### 1. Créer un compte EmailJS

1. Aller sur [EmailJS.com](https://www.emailjs.com/)
2. Créer un compte gratuit
3. Vérifier votre email

### 2. Connecter votre Gmail

1. Dans le dashboard EmailJS, aller dans "Email Services"
2. Cliquer sur "Add New Service"
3. Sélectionner "Gmail"
4. Autoriser EmailJS à accéder à votre Gmail
5. Nommer votre service (ex: "service_taxi_contact")

### 3. Créer un template d'email

1. Aller dans "Email Templates"
2. Cliquer sur "Create New Template"
3. Utiliser ce template :

**Subject:** Nouvelle demande de réservation taxi - {{from_name}}

**Content:**

```
Nouvelle demande de réservation de taxi aux Sables d'Olonne

INFORMATIONS CLIENT:
- Nom: {{from_name}}
- Téléphone: {{from_phone}}
- Email: {{from_email}}

DÉTAILS DE LA RÉSERVATION:
- Type de service: {{service_type}}
- Date: {{pickup_date}}
- Heure: {{pickup_time}}
- Adresse de prise en charge: {{pickup_address}}
- Destination: {{destination_address}}
- Nombre de passagers: {{passenger_count}}

NOTES SUPPLÉMENTAIRES:
{{additional_notes}}

---
Cette demande a été envoyée depuis le site www.taxi-les-sables-olonne.fr
```

4. Sauvegarder avec l'ID "template_taxi_booking"

### 4. Obtenir vos clés

1. Noter votre **Service ID** (ex: service_taxi_contact)
2. Noter votre **Template ID** (ex: template_taxi_booking)
3. Aller dans "Account" > "General" pour obtenir votre **Public Key**

### 5. Mettre à jour le code

Dans `pages/contact.vue`, remplacer les valeurs dans `emailConfig`:

```javascript
const emailConfig = {
  serviceId: 'VOTRE_SERVICE_ID', // Remplacer par votre Service ID
  templateId: 'VOTRE_TEMPLATE_ID', // Remplacer par votre Template ID
  publicKey: 'VOTRE_PUBLIC_KEY', // Remplacer par votre Public Key
}
```

### 6. Test

1. Remplir le formulaire de contact
2. Vérifier que l'email arrive dans votre Gmail
3. Vérifier les données reçues

## Limites du plan gratuit

- 200 emails/mois
- Parfait pour un site de taxi local

## Template de confirmation client (optionnel)

Pour envoyer une confirmation automatique au client :

**Subject:** Confirmation de votre demande de taxi - {{to_name}}

**Content:**

```
Bonjour {{to_name}},

Nous avons bien reçu votre demande de réservation de taxi pour le {{pickup_date}} à {{pickup_time}}.

Service demandé: {{service_type}}

Nous vous recontacterons rapidement au numéro que vous avez indiqué pour confirmer votre réservation et vous donner tous les détails.

En cas d'urgence, vous pouvez nous joindre 24h/24 au {{contact_phone}}.

Merci de votre confiance,
L'équipe Taxi Les Sables d'Olonne

---
www.taxi-les-sables-olonne.fr
```

## Sécurité

- Pas de données sensibles exposées côté client
- EmailJS gère l'authentification Gmail
- Les clés publiques sont sécurisées
- Validation côté client implémentée
- Gestion des erreurs et feedback utilisateur

## Fonctionnalités incluses

- ✅ Envoi d'email au taxi avec tous les détails
- ✅ Email de confirmation optionnel au client
- ✅ Validation complète du formulaire
- ✅ Messages d'erreur et de succès
- ✅ Validation téléphone français
- ✅ Validation email
- ✅ Interface utilisateur responsive
