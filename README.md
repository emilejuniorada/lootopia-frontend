<div align="center">
  <img src="public/logo.png" alt="Lootopia Logo" width="120" height="120">
  
  # 🏴‍☠️ LOOTOPIA
  
  **La plateforme de référence pour créer et participer à des chasses au trésor immersives**
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.0.0--rc.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  
  [🚀 Demo Live](#) • [📖 Documentation](INSTALLATION.md) • [🐛 Signaler un Bug](#) • [💡 Demander une Fonctionnalité](#)
</div>

---

## 🌟 Aperçu

**Lootopia** transforme la réalité en terrain de jeu ! Créez des chasses au trésor interactives avec géolocalisation, participez à des aventures créées par la communauté, et découvrez un monde d'exploration gamifiée.

### ✨ Fonctionnalités Principales

- 🗺️ **Cartes Interactives** - Intégration OpenStreetMap avec outils de dessin
- 📍 **Géolocalisation Précise** - Validation des caches dans un rayon de 100m
- 👥 **Multijoueur** - Créez et participez à des chasses communautaires
- 🏆 **Système de Récompenses** - Gagnez des couronnes et débloquez des achievements
- 📱 **Responsive Design** - Expérience optimisée mobile et desktop
- 🔐 **Authentification Sécurisée** - Gestion complète des comptes utilisateurs
- 🎯 **Deux Modes de Validation** - Géolocalisation ou phrase de passe
- 📊 **Suivi des Progrès** - Tableaux de bord détaillés et statistiques

## 🚀 Démarrage Rapide

### Prérequis

- **Node.js** ≥ 18.0.0
- **npm** ≥ 8.0.0
- **Git**

### Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/lootopia-frontend.git
cd lootopia-frontend

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos configurations

# Lancer le serveur de développement
npm run dev
```

🎉 **L'application est maintenant accessible sur [http://localhost:3000](http://localhost:3000)**

## 🏗️ Architecture Technique

### Stack Technologique

| Catégorie | Technologies |
|-----------|-------------|
| **Frontend** | Next.js 15, React 19, TypeScript |
| **Styling** | Tailwind CSS 4, Radix UI, shadcn/ui |
| **État** | Zustand, React Hook Form |
| **Cartes** | Leaflet, React Leaflet, Leaflet Draw |
| **Auth** | NextAuth.js v4, JWT |
| **HTTP** | Axios, Custom Hooks |
| **UI/UX** | Lucide Icons, Sonner Toasts |

### Structure du Projet

```
lootopia-frontend/
├── 📁 app/                    # App Router (Next.js 13+)
│   ├── 📁 (auth)/            # Pages d'authentification
│   ├── 📁 dashboard/         # Interface utilisateur connecté
│   └── 📁 api/               # Routes API (NextAuth)
├── 📁 components/            # Composants React
│   ├── 📁 dashboard/         # Composants du dashboard
│   ├── 📁 homepage/          # Page d'accueil
│   └── 📁 ui/                # Composants UI réutilisables
├── 📁 services/              # Services et hooks personnalisés
├── 📁 stores/                # Gestion d'état Zustand
├── 📁 lib/                   # Utilitaires et helpers
└── 📁 types/                 # Définitions TypeScript
```

## 🎮 Guide d'Utilisation

### 1. Créer une Chasse au Trésor

```bash
# Accéder à la création
Dashboard → "Nouvelle chasse"

# Étapes de création :
1. 📝 Informations générales (titre, description, zone)
2. 📍 Placement des caches sur la carte
3. 🏆 Configuration des récompenses
```

### 2. Participer à une Chasse

```bash
# Découvrir les chasses
Dashboard → "Chasses disponibles"

# Gameplay :
1. 🔍 Consulter les indices
2. 📱 Activer le mode "Creuser"
3. 📍 Se déplacer vers les emplacements
4. ✅ Valider les caches trouvées
```

### 3. Gestion du Profil

```bash
# Paramètres utilisateur
Dashboard → ⚙️ "Réglages"

# Options disponibles :
- 📧 Modifier l'email
- 👤 Changer le pseudonyme
- 🔒 Mettre à jour le mot de passe
- 📥 Exporter ses données
- 🗑️ Supprimer le compte
```

## 🛠️ Développement

### Commandes Disponibles

```bash
# Développement
npm run dev          # Serveur de développement avec Turbopack
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification du code

# Maintenance
npm audit            # Audit de sécurité
npm update           # Mise à jour des dépendances
```

### Variables d'Environnement

```bash
# .env.local
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
NEXTAUTH_SECRET=votre-secret-securise
NEXTAUTH_URL=http://localhost:3000
NODE_ENV=development
```

### Ajout de Nouvelles Fonctionnalités

```bash
# Créer un nouveau composant
touch components/dashboard/MonComposant.tsx

# Ajouter une nouvelle page
mkdir app/dashboard/ma-page
touch app/dashboard/ma-page/page.tsx

# Créer un hook personnalisé
touch services/useMonHook.ts
```

## 🚀 Déploiement

### Déploiement sur Vercel (Recommandé)

```bash
# Installation de Vercel CLI
npm i -g vercel

# Déploiement
vercel login
vercel --prod
```

### Déploiement avec Docker

```bash
# Build de l'image
docker build -t lootopia-frontend .

# Lancement du conteneur
docker run -p 3000:3000 lootopia-frontend
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment participer :

1. **Fork** le projet
2. **Créer** une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. **Commit** vos changements (`git commit -m 'Add some AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. **Ouvrir** une Pull Request

### Standards de Code

- ✅ TypeScript strict
- ✅ ESLint + Prettier
- ✅ Tests unitaires
- ✅ Documentation des composants

## 📋 Roadmap

- [ ] 🔮 **Mode Réalité Augmentée** - Intégration AR native
- [ ] 🌐 **Mode Hors-ligne** - Fonctionnalités offline
- [ ] 🎨 **Éditeur Visuel** - Interface drag & drop pour créer des chasses
- [ ] 🏪 **Marketplace** - Achat/vente de chasses premium
- [ ] 🤖 **IA Générative** - Création automatique d'indices
- [ ] 📱 **Application Mobile** - App native iOS/Android

## 🐛 Problèmes Connus

- Les cartes ne fonctionnent pas en mode SSR (solution : composants dynamiques)
- Limitation à 100m pour la validation des caches (configurable)
- Mode partenaire en développement

## 📄 Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- [Next.js](https://nextjs.org/) pour le framework
- [Leaflet](https://leafletjs.com/) pour les cartes
- [Radix UI](https://www.radix-ui.com/) pour les composants accessibles
- [Vercel](https://vercel.com/) pour l'hébergement
- La communauté open source pour les outils fantastiques

## 📞 Support

- 📧 **Email** : contact@lootopia.com
- 💬 **Discord** : [Rejoindre notre serveur](#)
- 📖 **Documentation** : [Guide complet](INSTALLATION.md)
- 🐛 **Issues** : [GitHub Issues](#)

---

<div align="center">
  <p>Fait avec ❤️ par l'équipe Lootopia</p>
  <p>⭐ N'oubliez pas de mettre une étoile si ce projet vous plaît !</p>
</div>
