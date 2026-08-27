# Validation des API pays et établissements

Le formulaire charge les 249 pays avec FIRST API : `https://api.first.org/data/v1/countries?limit=250`. La réponse publique est structurée dans `data`, avec un code ISO à deux lettres et un nom de pays.

Après sélection, le formulaire interroge OpenAlex avec le code ISO du pays : `https://api.openalex.org/institutions?filter=type:education,country_code:XX&per-page=100`. Le filtre `type:education` cible les organisations éducatives, ce qui permet d’inclure les universités, collèges et autres établissements d’enseignement présents dans le catalogue. Les résultats sont lus dans `results` et affichent le champ `display_name`.

REST Countries v3.1 a été écartée car elle est dépréciée. REST Countries v5 est maintenue, mais demande désormais une clé API ; FIRST et OpenAlex permettent ici de conserver une application frontend autonome sans exposer de clé.

Le code prévoit un délai maximal de 12 secondes, un état de chargement, une gestion d’erreur et une saisie manuelle si aucun établissement n’est trouvé.

## Références

- [OpenAlex — Institution types](https://help.openalex.org/data/institution-types/)
- [OpenAlex — List institutions](https://developers.openalex.org/api-reference/institutions/list-institutions)
- [FIRST API — Countries](https://api.first.org/data/v1/countries?limit=250)
