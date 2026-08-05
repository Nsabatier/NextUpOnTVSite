# Next Up On TV — site vitrine

Site statique de présentation de l’application iPhone **Next Up On TV**.

- HTML, CSS et JavaScript simples
- aucune base de données
- aucun serveur
- responsive sur iPhone, tablette et ordinateur
- prêt pour Cloudflare Pages

## Fichiers utiles

```text
index.html             page d’accueil
privacy.html           politique de confidentialité
support.html           aide et questions fréquentes
assets/styles.css      apparence du site
assets/script.js       menu et année automatique
assets/app-icon.png    icône de l’application
assets/screenshots/    captures d’écran de l’application
```

Les autres fichiers présents dans le dépôt servent uniquement à produire
l’aperçu privé proposé pendant la création du site. Cloudflare Pages peut
publier directement les fichiers statiques ci-dessus.

## Éléments à compléter avant le lancement de l’app

1. Après l’acceptation et la publication de l’app, ajouter un bouton lié à
   `https://apps.apple.com/app/id6789129002`.
2. Relire la politique de confidentialité et vérifier qu’elle correspond
   exactement au fonctionnement publié de l’application.

## Mettre le site sur GitHub

1. Créer un nouveau dépôt GitHub, par exemple `next-up-on-tv-website`.
2. Ajouter tous les fichiers de ce dossier au dépôt.
3. Utiliser la branche `main`.
4. Envoyer les fichiers sur GitHub.

Chaque modification envoyée ensuite sur `main` pourra être automatiquement
publiée par Cloudflare Pages.

## Déployer gratuitement avec Cloudflare Pages

Dans le tableau de bord Cloudflare :

1. Ouvrir **Workers & Pages**.
2. Choisir **Create application**, puis **Pages** et **Connect to Git**.
3. Autoriser GitHub et sélectionner le dépôt `next-up-on-tv-website`.
4. Choisir la branche de production `main`.
5. Dans les réglages de construction :
   - **Framework preset** : `None`
   - **Build command** : laisser vide
   - **Build output directory** : `/`
6. Lancer le déploiement.

Cloudflare fournit alors une adresse temporaire du type
`next-up-on-tv.pages.dev`. Les prochains changements envoyés sur `main` seront
redéployés automatiquement.

Documentation officielle :
[intégration Git](https://developers.cloudflare.com/pages/get-started/git-integration/).

## Connecter `nextupontv.app`

Comme `nextupontv.app` est un domaine principal, il doit être ajouté à votre
compte Cloudflare et utiliser les serveurs DNS indiqués par Cloudflare.

1. Dans le projet Pages, ouvrir **Custom domains**.
2. Choisir **Set up a domain**.
3. Saisir `nextupontv.app`, puis continuer.
4. Si le domaine n’utilise pas encore les DNS Cloudflare, suivre l’assistant
   pour remplacer ses serveurs de noms chez le registrar.
5. Attendre l’activation du domaine et du certificat HTTPS.
6. Répéter l’opération avec `www.nextupontv.app` si cette adresse doit également
   fonctionner.

Ne pas créer seulement un enregistrement DNS à la main : le domaine doit
d’abord être associé dans l’écran **Custom domains** du projet Pages.

Documentation officielle :
[domaines personnalisés](https://developers.cloudflare.com/pages/configuration/custom-domains/).

## Tester localement sans outil particulier

Ouvrir `index.html` dans un navigateur suffit pour voir l’essentiel du site.
Pour vérifier tous les liens dans les mêmes conditions qu’en ligne, utiliser
n’importe quel petit serveur web statique depuis la racine du dossier.
