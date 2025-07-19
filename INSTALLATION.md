# Guide d'Installation et d'Utilisation - Lootopia

## Table des Matières
1. [Prérequis](#prérequis)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Démarrage du Projet](#démarrage-du-projet)
5. [Guide d'Utilisation](#guide-dutilisation)
6. [Développement](#développement)
7. [Déploiement](#déploiement)
8. [Dépannage](#dépannage)

## Prérequis

### Logiciels Requis
- **Node.js** version 18.0 ou supérieure
- **npm** version 8.0 ou supérieure (inclus avec Node.js)
- **Git** pour le contrôle de version
- Un éditeur de code (VS Code recommandé)

### Vérification des Prérequis
```bash
# Vérifier la version de Node.js
node --version

# Vérifier la version de npm
npm --version

# Vérifier Git
git --version
```

## Installation

### 1. Cloner le Projet
```bash
# Cloner le repository
git clone [URL_DU_REPOSITORY]
cd lootopia-frontend

# Ou si vous avez déjà le code source
cd lootopia-frontend
```

### 2. Installation des Dépendances
```bash
# Installer toutes les dépendances
npm install

# Ou utiliser npm ci pour une installation plus rapide en production
npm ci
```

### 3. Vérification de l'Installation
```bash
# Vérifier que toutes les dépendances sont installées
npm list --depth=0
```

## Configuration

### 1. Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet :

```bash
# Copier le fichier d'exemple (si disponible)
cp .env.example .env.local

# Ou créer le fichier manuellement
touch .env.local
```

Contenu du fichier `.env.local` :
```env
# URL du backend API
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000

# Configuration NextAuth
NEXTAUTH_SECRET=votre-secret-nextauth-tres-securise
NEXTAUTH_URL=http://localhost:3000

# Autres variables selon vos besoins
NODE_ENV=development
```

### 2. Configuration NextAuth

Le projet utilise NextAuth.js pour l'authentification. Assurez-vous que :
- `NEXTAUTH_SECRET` est défini avec une valeur sécurisée
- `NEXTAUTH_URL` correspond à l'URL de votre application

### 3. Configuration du Backend

Assurez-vous que votre backend API est configuré et accessible à l'URL spécifiée dans `NEXT_PUBLIC_BACKEND_URL`.

## Démarrage du Projet

### Mode Développement
```bash
# Démarrer le serveur de développement
npm run dev

# Ou avec Turbopack (plus rapide)
npm run dev --turbo
```

L'application sera accessible à : `http://localhost:3000`

### Mode Production
```bash
# Construire l'application pour la production
npm run build

# Démarrer l'application en mode production
npm run start
```

### Vérification du Linting
```bash
# Vérifier la qualité du code
npm run lint
```

## Guide d'Utilisation

### 1. Première Connexion

#### Inscription
1. Accédez à `http://localhost:3000`
2. Cliquez sur "Démarrer" ou "S'inscrire"
3. Remplissez le formulaire d'inscription :
   - Nom d'utilisateur (minimum 3 caractères)
   - Adresse email valide
   - Mot de passe (minimum 6 caractères)
   - Type de compte (Personnel recommandé)
4. Validez votre email via le lien reçu
5. Connectez-vous avec vos identifiants

#### Connexion
1. Cliquez sur "Connexion"
2. Saisissez votre email et mot de passe
3. Accédez au dashboard

### 2. Navigation dans l'Application

#### Dashboard Principal
- **Chasses en cours** : Vos participations actives
- **Chasses disponibles** : Nouvelles chasses à rejoindre
- **Chasses terminées** : Historique de vos participations
- **Mes chasses** : Chasses que vous avez créées

#### Menu de Navigation (Desktop)
- 📊 **Liste des chasses** : Vue d'ensemble
- 🧭 **Nouvelle chasse** : Créer une chasse
- 🏆 **Classements** : Voir les scores
- 📅 **Événements** : Événements spéciaux
- ⚙️ **Réglages** : Paramètres du compte
- 🚪 **Déconnexion**

### 3. Créer une Chasse au Trésor

#### Étape 1 : Informations de Base
1. Cliquez sur "Nouvelle chasse"
2. Remplissez les informations :
   - **Titre** : Nom de votre chasse (obligatoire)
   - **Description** : Description détaillée (obligatoire)
   - **Monde** : Cartographique (recommandé)
   - **Carte** : Définir la zone de jeu
   - **Participants** : Limite (0 = illimité)
   - **Date de fin** : Date limite (obligatoire)

#### Définir la Zone de Chasse
1. Cliquez sur l'icône carte
2. Utilisez l'outil rectangle (carré noir)
3. Dessinez la zone sur la carte
4. Validez la sélection

#### Étape 2 : Configuration des Caches
1. Cliquez sur "Ajouter une étape"
2. Pour chaque cache :
   - **Indication** : Indice pour trouver la cache
   - **Type de validation** :
     - *Découverte de cache* : Géolocalisation
     - *Passphrase* : Mot de passe à saisir
   - **Récompense** : Nombre de couronnes
   - **Obligatoire** : Cache requise pour terminer

#### Placement des Caches (Géolocalisation)
1. Sélectionnez "Découverte de cache"
2. Cliquez sur la carte pour placer la cache
3. La cache sera validée dans un rayon de 100m

#### Étape 3 : Récompenses
1. Définissez la récompense finale
2. Actuellement : Couronnes uniquement
3. Fonctionnalités futures : Objets spéciaux, récompenses personnalisées

### 4. Participer à une Chasse

#### Rejoindre une Chasse
1. Allez dans "Chasses disponibles"
2. Cliquez sur une chasse qui vous intéresse
3. Consultez les détails (description, récompense, participants)
4. Cliquez sur "Participer à la chasse"

#### Jouer à une Chasse
1. Accédez au "Playground" de la chasse
2. Consultez les indices disponibles
3. Activez le mode "Creuser"
4. Naviguez vers les emplacements supposés
5. Cliquez sur la carte pour creuser
6. Validez les caches trouvées

#### Validation des Caches
- **Cache géolocalisée** : Validation automatique si dans le rayon
- **Cache avec passphrase** : Saisir le mot de passe correct

### 5. Gestion du Profil

#### Paramètres du Compte
1. Cliquez sur l'icône ⚙️ (Réglages)
2. Sections disponibles :
   - **Email** : Modifier l'adresse email
   - **Pseudonyme** : Changer le nom d'affichage
   - **Mot de passe** : Sécurité du compte
   - **Export de données** : Télécharger vos données
   - **Suppression** : Supprimer définitivement le compte

#### Gestion des Couronnes
- Visualisation du solde en haut à droite
- Gain via la découverte de caches
- Utilisation future pour des achats in-app

## Développement

### Structure des Fichiers
```
lootopia-frontend/
├── app/                    # Pages et routes Next.js
│   ├── (auth)/            # Pages d'authentification
│   ├── dashboard/         # Interface utilisateur connecté
│   └── api/               # Routes API (NextAuth)
├── components/            # Composants React
│   ├── dashboard/         # Composants du dashboard
│   ├── homepage/          # Page d'accueil
│   └── ui/                # Composants UI réutilisables
├── services/              # Services et hooks
├── stores/                # Gestion d'état Zustand
├── lib/                   # Utilitaires
└── types/                 # Définitions TypeScript
```

### Commandes de Développement
```bash
# Démarrage avec rechargement automatique
npm run dev

# Vérification du code
npm run lint

# Construction pour production
npm run build

# Test de la version de production
npm run start
```

### Ajout de Nouvelles Fonctionnalités

#### Créer un Nouveau Composant
```bash
# Créer dans le bon répertoire
touch components/dashboard/MonNouveauComposant.tsx
```

#### Ajouter une Nouvelle Page
```bash
# Dans app/ pour les routes publiques
touch app/ma-nouvelle-page/page.tsx

# Dans app/dashboard/ pour les routes protégées
touch app/dashboard/ma-nouvelle-page/page.tsx
```

### Hooks Personnalisés Disponibles
- `useFetch` : Gestion des appels API
- `useAuth` : Authentification
- `useFormStore` : Gestion des formulaires de chasse

## Déploiement

### Préparation
```bash
# Vérifier que tout fonctionne
npm run build
npm run start

# Vérifier les variables d'environnement de production
```

### Variables d'Environnement de Production
```env
NEXT_PUBLIC_BACKEND_URL=https://votre-api-backend.com
NEXTAUTH_SECRET=secret-production-tres-securise
NEXTAUTH_URL=https://votre-domaine.com
NODE_ENV=production
```

### Déploiement sur Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Ou connecter via GitHub pour déploiement automatique
```

### Déploiement sur d'autres Plateformes
```bash
# Build de production
npm run build

# Les fichiers sont dans .next/
# Suivre la documentation de votre plateforme
```

## Dépannage

### Problèmes Courants

#### Erreur de Démarrage
```bash
# Nettoyer les dépendances
rm -rf node_modules package-lock.json
npm install

# Nettoyer le cache Next.js
rm -rf .next
npm run dev
```

#### Problèmes de Carte
- Vérifiez que les composants de carte sont bien en mode client
- Les cartes ne fonctionnent pas en SSR (Server-Side Rendering)

#### Erreurs d'Authentification
- Vérifiez `NEXTAUTH_SECRET` et `NEXTAUTH_URL`
- Assurez-vous que le backend API est accessible
- Vérifiez les CORS sur le backend

#### Problèmes de Build
```bash
# Vérifier les erreurs TypeScript
npx tsc --noEmit

# Vérifier le linting
npm run lint
```

### Logs et Débogage
```bash
# Activer les logs détaillés
DEBUG=* npm run dev

# Vérifier les logs du navigateur
# Ouvrir les DevTools (F12) > Console
```

### Support
- Vérifiez la documentation des dépendances
- Consultez les issues GitHub du projet
- Contactez l'équipe de développement

## Bonnes Pratiques

### Sécurité
- Ne jamais commiter les fichiers `.env*`
- Utiliser des secrets forts pour la production
- Valider toutes les entrées utilisateur

### Performance
- Utiliser les imports dynamiques pour les gros composants
- Optimiser les images avec Next.js
- Minimiser les re-renders inutiles

### Code
- Suivre les conventions TypeScript
- Utiliser les hooks personnalisés pour la logique réutilisable
- Maintenir une structure de composants claire

---

**Note** : Ce guide couvre l'installation et l'utilisation de base. Pour des fonctionnalités avancées ou des problèmes spécifiques, consultez la documentation technique du projet.