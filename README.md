Titre du Projet
Application de gestion de produits (Full-Stack)

Description
Cette application permet de gérer une liste de produits via une interface utilisateur développée en Angular et un backend basé sur Node.js, Express, et MongoDB.

Prérequis
Node.js (version >= 14)
Angular CLI (version >= 14)
MongoDB installé et configuré

Installation et Exécution

Backend:
-cd backend
-npm install
-npm start

Frontend
-cd frontend
-npm install
-ng serve

Fonctionnalités
Ajouter un produit.
Voir la liste des produits.
Modifier un produit existant.
Supprimer un produit.
Voir les détails d’un produit.

Tests
Backend
Utilisez Postman pour tester les routes de l'API :
GET /api/produits
POST /api/produits
PUT /api/produits/:id
DELETE /api/produits/:id
Frontend
Vérifiez que chaque fonctionnalité (ajout, modification, suppression, etc.) fonctionne correctement via l’interface utilisateur.
