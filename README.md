Lien vers le backend du projet : https://github.com/PriscilH/Vinted-Backend

# 🛍️ Vinted Frontend Clone

Ce projet est la partie **frontend** d’un clone de la plateforme Vinted.  
Il a été réalisé avec **React** et utilise un design moderne grâce à **TailwindCSS**.  
L’objectif est de permettre aux utilisateurs de consulter, publier et acheter des articles, avec intégration de paiement via **Stripe**.

---

## 🚀 Fonctionnalités

- ✅ Authentification et gestion des sessions (via cookies)
- ✅ Parcourir la liste des articles disponibles
- ✅ Filtrer les produits par prix via un slider
- ✅ Ajouter une annonce avec upload d’image (drag & drop)
- ✅ Gestion des paiements avec **Stripe**
- ✅ Interface utilisateur moderne et responsive (TailwindCSS)

---

## 🛠️ Technologies utilisées

- **React 18** — bibliothèque principale pour construire l’interface utilisateur
- **React Router DOM 6** — gestion de la navigation côté client
- **TailwindCSS 3** — framework CSS utilitaire pour un design rapide et responsive
- **Axios** — client HTTP pour communiquer avec l’API backend
- **React Dropzone** — gestion du drag & drop pour l’upload d’images
- **React Range** — création de sliders interactifs (ex : filtres de prix)
- **js-cookie** — gestion des cookies (authentification, sessions, préférences)
- **Font Awesome** (`@fortawesome/...`) — icônes vectorielles pour l’UI
- **Stripe** (`@stripe/react-stripe-js`, `@stripe/stripe-js`) — intégration du paiement en ligne
- **Testing Library** (`@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`) — tests unitaires et fonctionnels
- **Web Vitals** — mesures de performance et qualité web

---

## ⚙️ Installation et démarrage

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/PriscilH/Vinted-front.git
   cd Vinted-front
   ```

2. **Installer les dépendances**

    ```bash
     npm install
    # ou
     yarn install
    ```

3. **Lancer le projet**

    ```bash
     npm start
    # ou
     yarn start
    ```
4. **L’application sera accessible sur http://localhost:3000**
