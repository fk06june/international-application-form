# Validation navigateur

Le fichier `index.html` s’ouvre correctement en local. Après le chargement, la liste des pays FIRST API affiche les pays avec leur code ISO, notamment `Burundi (BI)`.

Après sélection du Burundi, le champ est renommé **Université, collège ou établissement d’enseignement** et affiche l’état **Chargement des universités, collèges et établissements...** avant la réponse OpenAlex. La syntaxe JavaScript a également été validée avec `node --check`.

Une vérification réseau en ligne a été plus lente que le délai du terminal, mais le code conserve son propre délai applicatif de 12 secondes, son état d’erreur et la saisie manuelle de secours.

## Vérification après refonte visuelle

La page refondue s’affiche avec une colonne de contexte bleu nuit et une colonne de formulaire ivoire, une hiérarchie de sections numérotées, des contrôles aérés et des boutons cohérents. La console du navigateur ne signale aucune erreur JavaScript. Les règles responsive prévues empilent les colonnes sous 820 px et passent les champs en une seule colonne sous 560 px.
