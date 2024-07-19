# TestTechnique
Test technique pour Origins Digital qui consiste en réaliser une API permettant de se connecter à une base de données postgres.

# API de Gestion des Vidéos et des Tags

Cette API permet de gérer les vidéos et les tags associés à chaque vidéo dans une base de données PostgreSQL. Elle fournit des opérations CRUD complètes pour les vidéos, ainsi que la création, la suppression et la gestion des tags associés aux vidéos.

## Table des Matières

1. [Technologies Utilisées](#technologies-utilisées)
2. [Installation](#installation)
3. [Utilisation](#utilisation et démarrage)
4. [Points de Terminaison de l'API](#points-de-termination-de-lapi)
5. [Licence](#licence)

## Technologies Utilisées

- **Node.js** : Environnement d'exécution pour JavaScript côté serveur.
- **Express** : Framework web pour Node.js.
- **Sequelize** : ORM pour interagir avec la base de données.
- **PostgreSQL** : Base de données relationnelle.

## Installation

Pour configurer et exécuter ce projet sur votre machine locale, suivez les étapes ci-dessous :

1. **Clonez le dépôt** :

   ```bash
   git clone https://github.com/ton-utilisateur/ton-repository.git
   cd ton-repository

2. **Installez les dépendances** :
    npm install

3. **Configurez la base de données** :
    Modifiez les paramétres de connexion a la base de données dans le fichier "src/database/database.ts"

## Utilisation et démarrage
    npm run dev

## Points de terminaison de l'API
    Vidéos:

    GET /videos : Récupère la liste de vidéos.
    POST /videos : Crée une vidéo.
    PUT /videos/:id : Met à jour une vidéo.
    DELETE /videos/:id : Supprime une vidéo.

    Tags:
    POST /tags : Crée une tag.
    DELETE /tags/:id : Supprime une tag.

    Relation vidéos et tags:
    POST /videostags/:id : Ajoute un tag à une vidéo
    DELETE /videostags/:id/tags/:id_tag : Supprime une tag d'une vidéo.

## License

    Ce projet est sous la License MIT