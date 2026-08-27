# international-application-form

Formulaire de candidature international autonome en HTML et JavaScript.

## Fonctionnement pays et établissements d’enseignement

Le champ **Pays** charge la liste complète des pays depuis FIRST API. Après la sélection d’un pays, son code ISO à deux lettres est envoyé à OpenAlex avec le filtre `type:education` afin de récupérer les universités, collèges et autres établissements d’enseignement associés. Le champ **Université, collège ou établissement d’enseignement** reste désactivé pendant le chargement et propose une saisie manuelle si aucun résultat n’est disponible.

Les API utilisées sont publiques et ne nécessitent pas de clé pour cette utilisation frontend :

- Pays : `https://api.first.org/data/v1/countries?limit=250`
- Universités, collèges et établissements éducatifs : `https://api.openalex.org/institutions?filter=type:education,country_code:XX&per-page=100`

Le code prévoit un délai maximal de 12 secondes, un état de chargement, une gestion des erreurs et une protection contre les réponses obsolètes lorsqu’un utilisateur change rapidement de pays.

## Dépôt de documents

Le champ **Documents de candidature** accepte plusieurs fichiers à la fois, notamment le CV, la lettre de motivation et les documents complémentaires. Les fichiers peuvent être déposés par glisser-déposer ou sélectionnés avec le navigateur de fichiers. Chaque fichier est limité à 5 Mo, les doublons sont ignorés et chaque élément peut être retiré avant l’envoi. Les formats acceptés sont PDF, DOC, DOCX, ODT et TXT. Google Sheets reçoit les informations textuelles, le nombre de documents et leurs noms ; les fichiers binaires ne sont pas stockés dans la feuille.

## Connexion Google Sheets

La soumission envoie les données vers la Web App Apps Script configurée dans `index.html`, via la constante `GOOGLE_SHEETS_ENDPOINT`. Le script doit lire les paramètres reçus avec `e.parameter` et ajouter une ligne dans la feuille. Les colonnes recommandées sont : `submittedAt`, `firstName`, `lastName`, `email`, `phone`, `country`, `university`, `degree`, `motivation`, `documentFileNames`, `documentCount` et `status`. L’URL `/exec` actuellement configurée est dédiée aux candidatures et répond avec `International applications Sheets connected` en GET. Après déploiement, effectuez une soumission réelle depuis le formulaire et vérifiez la nouvelle ligne dans Google Sheets.

## Déploiement Vercel

Importez ce dépôt depuis GitHub avec le framework **Other**. Comme le projet est un fichier HTML autonome, laissez les commandes de build et le répertoire de sortie vides. Vercel servira directement `index.html`.
