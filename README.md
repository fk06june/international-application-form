# international-application-form

Formulaire de candidature international autonome en HTML et JavaScript.

## Fonctionnement pays et universités

Le champ **Pays** charge la liste complète des pays depuis FIRST API. Après la sélection d’un pays, son code ISO à deux lettres est envoyé à OpenAlex afin de récupérer les établissements d’enseignement associés. Le champ **Université / Établissement** reste désactivé pendant le chargement et propose une saisie manuelle si aucun résultat n’est disponible.

Les API utilisées sont publiques et ne nécessitent pas de clé pour cette utilisation frontend :

- Pays : `https://api.first.org/data/v1/countries?limit=250`
- Établissements : `https://api.openalex.org/institutions?filter=type:education,country_code:XX&per-page=100`

Le code prévoit un délai maximal de 12 secondes, un état de chargement, une gestion des erreurs et une protection contre les réponses obsolètes lorsqu’un utilisateur change rapidement de pays.

## Déploiement Vercel

Importez ce dépôt depuis GitHub avec le framework **Other**. Comme le projet est un fichier HTML autonome, laissez les commandes de build et le répertoire de sortie vides. Vercel servira directement `index.html`.
