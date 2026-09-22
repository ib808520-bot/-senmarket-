# SENMARKET PRO V1.0

Première version full-stack de SENMARKET, pensée pour être testée sans paiement en ligne.

## Fonctionnalités
- Catalogue réel depuis l'API + SQLite
- Recherche et catégories
- Inscription / connexion JWT + bcrypt
- Panier côté navigateur
- Commande réelle enregistrée dans SQLite
- Paiement V1 : **à la livraison uniquement**
- Stock décrémenté lors d'une commande
- Comptes `customer`, `seller`, `admin`
- Gestion des produits via API vendeur/admin
- Gestion des statuts de commande
- Statistiques admin
- PWA responsive

## Démarrage
Prérequis : Node.js 18+.

```bash
npm install
npm start
```

Puis ouvrir : `http://localhost:3000`

## Rôles
Un nouvel inscrit est `customer`.
Un administrateur peut promouvoir un compte en `seller` ou `admin` via `POST /api/admin/promote`.
Pour le premier administrateur, il faut initialiser un compte directement dans la base ou ajouter une procédure d'administration sécurisée avant déploiement public.

## Production
Définir au minimum :
- `JWT_SECRET` : une longue valeur aléatoire secrète
- `PORT` si nécessaire

Ne jamais publier les secrets dans le frontend ou dans Git.

## Paiements
La V1 ne branche aucun paiement en ligne. Wave / Orange Money seront ajoutés plus tard avec les accès officiels des prestataires.
