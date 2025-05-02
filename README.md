# Système de Réservation de Billets

Cette application Angular 19 permet de réserver des billets et de stocker les données localement en utilisant IndexedDB, géré via la bibliothèque Dexie.js. L'interface utilisateur est conçue avec Tailwind CSS pour une expérience moderne et réactive.

## Fonctionnalités

- **Formulaire de réservation de billet** : Permet aux utilisateurs de créer de nouvelles réservations avec validation des champs.
- **Affichage de la liste des réservations** : Visualisation de toutes les réservations effectuées.
- **Fonction pour annuler une réservation** : Possibilité de supprimer une réservation existante.
- **Stockage local avec IndexedDB** : Fonctionne hors connexion grâce à Dexie.js.
- **Interface utilisateur moderne** : Conçue avec Tailwind CSS pour une expérience utilisateur optimale.

## Technologies utilisées

- Angular 19
- Tailwind CSS
- Dexie.js (pour IndexedDB)
- TypeScript
- HTML/SCSS

## Installation

1. Clonez ce dépôt
2. Installez les dépendances :

```bash
npm install
```

3. Démarrez l'application :

```bash
ng serve
```

4. Ouvrez votre navigateur à l'adresse `http://localhost:4200/`

## Structure du projet

- `src/app/components/ticket-form` : Composant pour la création de réservations
- `src/app/components/ticket-list` : Composant pour l'affichage et l'annulation des réservations
- `src/app/services/database.service.ts` : Service pour la gestion de la base de données IndexedDB
- `src/app/models/ticket.ts` : Modèle de données pour les réservations

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
