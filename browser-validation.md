# Validation navigateur

Le fichier `index.html` s’ouvre correctement en local. Après le chargement, la liste des pays FIRST API affiche les pays avec leur code ISO, notamment `Burundi (BI)`.

Après sélection du Burundi, le champ est renommé **Université, collège ou établissement d’enseignement** et affiche l’état **Chargement des universités, collèges et établissements...** avant la réponse OpenAlex. La syntaxe JavaScript a également été validée avec `node --check`.

Une vérification réseau en ligne a été plus lente que le délai du terminal, mais le code conserve son propre délai applicatif de 12 secondes, son état d’erreur et la saisie manuelle de secours.

## Vérification après refonte visuelle

La page refondue s’affiche avec une colonne de contexte bleu nuit et une colonne de formulaire ivoire, une hiérarchie de sections numérotées, des contrôles aérés et des boutons cohérents. La console du navigateur ne signale aucune erreur JavaScript. Les règles responsive prévues empilent les colonnes sous 820 px et passent les champs en une seule colonne sous 560 px.

## Simplification et dépôt de documents

La composition affiche désormais uniquement le formulaire centré ; le panneau « Votre prochaine étape commence ici » n’est plus présent. La zone **Documents de candidature** accepte plusieurs fichiers et une simulation navigateur avec `CV-candidat.pdf` et `Lettre-motivation.docx` affiche bien deux éléments avec un bouton **Retirer** pour chacun.

## Interaction de retrait

Après défilement, la zone drag-and-drop et la liste des documents restent lisibles. Un clic sur **Retirer** supprime le fichier ciblé de la liste tout en conservant l’autre document et les actions du formulaire.

## Google Sheets

La Web App Apps Script fournie répond publiquement avec le message `MomoPay Sheets connecté`. Après remplacement de l’endpoint de démonstration, le formulaire se recharge correctement et la console du navigateur ne signale aucune erreur. La soumission utilise désormais un payload URL-encoded et transmet les champs de candidature ainsi que les noms et le nombre de documents, sans envoyer les fichiers binaires au tableur.

## Vérification non destructive de l’endpoint

Un contrôle GET de la Web App Apps Script a été réalisé depuis le navigateur sans envoyer de candidature ni créer de ligne de test. L’intégration frontend utilise un POST simple en mode compatible cross-origin, avec les champs textuels et les noms de documents.
