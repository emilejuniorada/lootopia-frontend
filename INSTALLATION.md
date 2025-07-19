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

### Installation de Node.js (si nécessaire)
```bash
# Sur Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Sur macOS avec Homebrew
brew install node

# Sur Windows, télécharger depuis https://nodejs.org/
```

## Installation

### 1. Cloner le Projet
```bash
# Cloner le repository
git clone https://github.com/votre-username/lootopia-frontend.git
cd lootopia-frontend

# Ou si vous avez déjà le code source
cd lootopia-frontend

# Vérifier que vous êtes dans le bon répertoire
ls -la
# Vous devriez voir package.json, next.config.ts, etc.
```

### 2. Installation des Dépendances
```bash
# Nettoyer le cache npm (optionnel mais recommandé)
npm cache clean --force

# Installer toutes les dépendances
npm install

# Alternative : installation plus rapide et déterministe
npm ci

# Vérifier l'installation
echo "Installation terminée !"
```

### 3. Vérification de l'Installation
```bash
# Vérifier que toutes les dépendances sont installées
npm list --depth=0

# Vérifier les vulnérabilités
npm audit

# Corriger les vulnérabilités automatiquement (optionnel)
npm audit fix
```

## Configuration

### 1. Variables d'Environnement

```bash
# Vérifier si un fichier d'exemple existe
ls -la | grep env

# Copier le fichier d'exemple (si disponible)
cp .env.example .env.local

# Sinon, créer le fichier manuellement
touch .env.local

# Ouvrir le fichier pour édition
nano .env.local
# ou avec votre éditeur préféré
code .env.local
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

```bash
# Générer un secret sécurisé pour NextAuth
openssl rand -base64 32
# Copiez le résultat dans NEXTAUTH_SECRET

# Ou utiliser Node.js pour générer un secret
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 2. Configuration NextAuth

Le projet utilise NextAuth.js pour l'authentification. Assurez-vous que :
- `NEXTAUTH_SECRET` est défini avec une valeur sécurisée
- `NEXTAUTH_URL` correspond à l'URL de votre application

```bash
# Vérifier que les variables sont bien définies
grep -E "NEXTAUTH_SECRET|NEXTAUTH_URL" .env.local

# Tester la configuration
echo "Configuration NextAuth vérifiée"
```

### 3. Configuration du Backend

Assurez-vous que votre backend API est configuré et accessible à l'URL spécifiée dans `NEXT_PUBLIC_BACKEND_URL`.

```bash
# Tester la connexion au backend (remplacez l'URL par la vôtre)
curl -I http://localhost:8000/api/health
# ou
wget --spider http://localhost:8000/api/health

# Si le backend n'est pas encore démarré, vous obtiendrez une erreur
# C'est normal à cette étape
```

## Démarrage du Projet

### Mode Développement
```bash
# Première vérification avant démarrage
npm run lint

# Démarrer le serveur de développement
npm run dev

# Alternative : avec Turbopack (plus rapide, déjà configuré)
# Le projet utilise déjà --turbopack dans package.json

# Vérifier que le serveur démarre correctement
echo "Serveur démarré sur http://localhost:3000"

# Ouvrir automatiquement dans le navigateur (optionnel)
# Sur macOS
open http://localhost:3000
# Sur Linux
xdg-open http://localhost:3000
# Sur Windows
start http://localhost:3000
```

L'application sera accessible à : `http://localhost:3000`

### Mode Production
```bash
# Nettoyer les builds précédents
rm -rf .next

# Construire l'application pour la production
npm run build

# Vérifier que le build s'est bien passé
echo "Build terminé avec succès"

# Démarrer l'application en mode production
npm run start

# L'application sera accessible sur http://localhost:3000
```

### Vérification du Linting
```bash
# Vérifier la qualité du code
npm run lint

# Corriger automatiquement les erreurs de linting
npm run lint -- --fix

# Vérifier TypeScript
npx tsc --noEmit
```

## Guide d'Utilisation

### 1. Première Connexion

```bash
# Assurez-vous que l'application fonctionne
curl -I http://localhost:3000

# Vérifier les logs du serveur de développement
# Les logs apparaîtront dans le terminal où vous avez lancé npm run dev
```

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
# Installer les dépendances de développement
npm install --only=dev

# Démarrage avec rechargement automatique
npm run dev

# Vérification du code
npm run lint

# Correction automatique du linting
npm run lint -- --fix

# Vérification TypeScript
npx tsc --noEmit

# Construction pour production
npm run build

# Test de la version de production
npm run start

# Analyser la taille du bundle
npx @next/bundle-analyzer

# Nettoyer les fichiers de build
rm -rf .next
```

### Ajout de Nouvelles Fonctionnalités

#### Créer un Nouveau Composant
```bash
# Créer dans le bon répertoire
touch components/dashboard/MonNouveauComposant.tsx

# Créer avec un template de base
cat > components/dashboard/MonNouveauComposant.tsx << 'EOF'
import React from "react";

const MonNouveauComposant = () => {
  return <div>Mon nouveau composant</div>;
};

export default MonNouveauComposant;
EOF
```

#### Ajouter une Nouvelle Page
```bash
# Dans app/ pour les routes publiques
mkdir -p app/ma-nouvelle-page
touch app/ma-nouvelle-page/page.tsx

# Dans app/dashboard/ pour les routes protégées
mkdir -p app/dashboard/ma-nouvelle-page
touch app/dashboard/ma-nouvelle-page/page.tsx

# Créer avec un template de base
cat > app/ma-nouvelle-page/page.tsx << 'EOF'
import React from "react";

export default function MaNouvellePagePage() {
  return (
    <div>
      <h1>Ma Nouvelle Page</h1>
    </div>
  );
}
EOF
```

### Commandes Git pour le Développement
```bash
# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit"

# Créer une nouvelle branche pour une fonctionnalité
git checkout -b feature/ma-nouvelle-fonctionnalite

# Voir le statut
git status

# Voir les différences
git diff

# Commit des changements
git add .
git commit -m "Ajout de ma nouvelle fonctionnalité"

# Pousser vers le repository
git push origin feature/ma-nouvelle-fonctionnalite
```

### Hooks Personnalisés Disponibles
- `useFetch` : Gestion des appels API
- `useAuth` : Authentification
- `useFormStore` : Gestion des formulaires de chasse

## Déploiement

### Préparation
```bash
# Nettoyer le projet
rm -rf .next node_modules
npm install

# Vérifier que tout fonctionne
npm run build
npm run start

# Tester en local
curl -I http://localhost:3000

# Vérifier les variables d'environnement de production
echo "Variables d'environnement à configurer en production :"
grep -v "^#" .env.local | grep -v "^$"
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

# Se connecter à Vercel
vercel login

# Déployer
vercel

# Déploiement en production
vercel --prod

# Voir les logs de déploiement
vercel logs

# Ou connecter via GitHub pour déploiement automatique
# 1. Pusher le code sur GitHub
git remote add origin https://github.com/votre-username/lootopia-frontend.git
git push -u origin main

# 2. Connecter sur vercel.com avec GitHub
```

### Déploiement sur d'autres Plateformes
```bash
# Créer un fichier Dockerfile (optionnel)
cat > Dockerfile << 'EOF'
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
EOF

# Build de production
npm run build

# Créer une archive pour déploiement
tar -czf lootopia-frontend.tar.gz .next public package.json package-lock.json

# Les fichiers sont dans .next/
# Suivre la documentation de votre plateforme
```

### Déploiement avec Docker
```bash
# Construire l'image Docker
docker build -t lootopia-frontend .

# Lancer le conteneur
docker run -p 3000:3000 -e NEXTAUTH_SECRET=your-secret lootopia-frontend

# Avec docker-compose
cat > docker-compose.yml << 'EOF'
version: '3.8'
services:
  frontend:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXTAUTH_SECRET=your-secret
      - NEXTAUTH_URL=http://localhost:3000
      - NEXT_PUBLIC_BACKEND_URL=http://backend:8000
EOF

docker-compose up -d
```

## Dépannage

### Problèmes Courants

#### Erreur de Démarrage
```bash
# Nettoyer les dépendances
rm -rf node_modules package-lock.json
npm install

# Vérifier la version de Node.js
node --version
# Doit être >= 18.0

# Nettoyer le cache Next.js
rm -rf .next

# Nettoyer le cache npm
npm cache clean --force

# Redémarrer
npm run dev
```

#### Problèmes de Permissions
```bash
# Sur Linux/macOS, problèmes de permissions npm
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules

# Ou utiliser un gestionnaire de versions Node.js
# Installer nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18
```

#### Problèmes de Carte
```bash
# Vérifier que les dépendances de carte sont installées
npm list leaflet react-leaflet leaflet-draw

# Réinstaller si nécessaire
npm install leaflet react-leaflet leaflet-draw leaflet-defaulticon-compatibility
```

- Vérifiez que les composants de carte sont bien en mode client
- Les cartes ne fonctionnent pas en SSR (Server-Side Rendering)

#### Erreurs d'Authentification
```bash
# Vérifier les variables d'environnement
echo $NEXTAUTH_SECRET
echo $NEXTAUTH_URL

# Tester la connexion au backend
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password"}'
```

- Vérifiez `NEXTAUTH_SECRET` et `NEXTAUTH_URL`
- Assurez-vous que le backend API est accessible
- Vérifiez les CORS sur le backend

#### Problèmes de Build
```bash
# Vérifier les erreurs TypeScript
npx tsc --noEmit

# Voir les erreurs détaillées
npm run build -- --debug

# Vérifier le linting
npm run lint

# Analyser les dépendances
npm audit
npm audit fix

# Vérifier l'espace disque
df -h

# Nettoyer complètement
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Logs et Débogage
```bash
# Activer les logs détaillés
DEBUG=* npm run dev

# Logs spécifiques à Next.js
DEBUG=next:* npm run dev

# Voir les logs en temps réel
tail -f .next/trace

# Vérifier les logs du navigateur
# Ouvrir les DevTools (F12) > Console

# Logs du serveur
npm run dev 2>&1 | tee server.log
```

### Tests de Connectivité
```bash
# Tester la connectivité réseau
ping google.com

# Tester les ports
netstat -tulpn | grep :3000

# Tester l'application
curl -I http://localhost:3000
curl -I http://localhost:3000/api/auth/session

# Vérifier les processus Node.js
ps aux | grep node

# Tuer les processus Node.js si nécessaire
pkill -f node
```

### Support
- Vérifiez la documentation des dépendances
- Consultez les issues GitHub du projet
- Contactez l'équipe de développement

```bash
# Créer un rapport de bug avec informations système
cat > bug-report.txt << EOF
Date: $(date)
OS: $(uname -a)
Node.js: $(node --version)
npm: $(npm --version)

Erreur:
[Coller l'erreur ici]

Étapes pour reproduire:
1. 
2. 
3. 
EOF
```

## Bonnes Pratiques

### Sécurité
- Ne jamais commiter les fichiers `.env*`
- Utiliser des secrets forts pour la production
- Valider toutes les entrées utilisateur

```bash
# Ajouter .env* au .gitignore
echo ".env*" >> .gitignore

# Vérifier qu'aucun secret n'est committé
git log --all --full-history -- .env*

# Scanner les secrets dans le code
grep -r "password\|secret\|key" --exclude-dir=node_modules .
```

### Performance
- Utiliser les imports dynamiques pour les gros composants
- Optimiser les images avec Next.js
- Minimiser les re-renders inutiles

```bash
# Analyser les performances
npm run build
npx @next/bundle-analyzer

# Optimiser les images
# Les images sont automatiquement optimisées par Next.js
```

### Code
- Suivre les conventions TypeScript
- Utiliser les hooks personnalisés pour la logique réutilisable
- Maintenir une structure de composants claire

```bash
# Formater le code automatiquement
npx prettier --write .

# Vérifier la qualité du code
npm run lint

# Analyser la complexité du code
npx complexity-report --format json src/
```

## Commandes de Maintenance

```bash
# Mise à jour des dépendances
npm update

# Vérifier les dépendances obsolètes
npm outdated

# Mise à jour interactive
npx npm-check-updates -i

# Nettoyer les dépendances inutilisées
npx depcheck

# Analyser la sécurité
npm audit

# Sauvegarder la configuration
cp package.json package.json.backup
cp package-lock.json package-lock.json.backup
```

---

**Note** : Ce guide couvre l'installation et l'utilisation de base. Pour des fonctionnalités avancées ou des problèmes spécifiques, consultez la documentation technique du projet.