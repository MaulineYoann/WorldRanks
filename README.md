# WorldRanks

WorldRanks est une application web qui permet d’explorer les pays du monde et de comparer leurs principales informations démographiques et géographiques.

**Démo :** [globerank.netlify.app](https://globerank.netlify.app/)

## Fonctionnalités

- Parcourir les pays avec leur drapeau, leur nom, leur population, leur superficie et leur région.
- Rechercher un pays par nom, région ou sous-région.
- Trier les résultats par population, superficie ou ordre alphabétique.
- Filtrer les pays par région, appartenance aux Nations Unies et indépendance.
- Ouvrir une fiche détaillée avec la capitale, la sous-région, les langues, les monnaies, les continents et les pays voisins.

## Technologies

- React 18 et TypeScript
- Vite
- React Router
- Zustand pour l’état des filtres et du tri
- Tailwind CSS
- [REST Countries API v3.1](https://restcountries.com/)

## Lancer le projet en local

Prérequis : Node.js et npm.

```bash
git clone https://github.com/MaulineYoann/WorldRanks.git
cd WorldRanks
npm install
npm run dev
```

Vite affiche ensuite l’adresse locale à ouvrir dans le navigateur.

## Scripts disponibles

| Commande | Description |
| --- | --- |
| `npm run dev` | Lance le serveur de développement Vite. |
| `npm run build` | Vérifie les types TypeScript et génère la version de production. |
| `npm run preview` | Sert localement la version de production générée. |
| `npm run lint` | Vérifie le code avec ESLint. |

## Données

Les données des pays sont récupérées depuis REST Countries au chargement de l’application. Une connexion Internet est donc nécessaire pour afficher la liste et les fiches détaillées.

## À propos

WorldRanks est un projet personnel réalisé avec React et TypeScript. L’interface de l’application est actuellement en anglais.
