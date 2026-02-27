# order-report-refactoring

## Installation

### Prérequis
- TypeScript version 5.9
- NPM version 10.9

# Commandes

### Commande pour installer les dépendances
```npm install```

### Exécution de l'ancien code
```npm run legacy```

### Exécuter le code refactoré
```npm start```

### Commande pour lancer tous les tests
```npm test```


# Choix de Refactoring

## Problèmes Identifiés dans le Legacy

1. **Grosse répétition de la fonction de parsing du CSV** : Gros bloc de code, peu digeste, susceptible d'apporter des erreurs
   - Impact : gros risques d'erreur et gros inconfort pour le développeur

2. **Les fonctions sont trop "multitache"** : la plupart des fonctions de l'application exécutent plusieurs missions.
   - Impact : faire une modification implique de devoir potentiellement modifier des fonctionnalités sans lien avec la modification initiale

3. **Les règles "bonus" sont mélangées aux fonctions** : Les règles de calcul sont disséminées au sein des fonctions
   - Impact : si la règle doit être utilisée dans plusieurs cas, il faut la dupliquer

4. **Le système de points de fidélité parait bancal** : L'application part de 0 et ajoute les points en fonction des commandes.
   - Impact : des points de fidélités sont probablements oubliés par moment. Chaque solde de point est réinitialisé lors de l'importation d'un nouveau fichier de commandes.

### Solutions Apportées

1. **[Amélioration 1]** : Les variables pour obtenir les informations du CSV sont maintenant dynamiques. Il suffit de mettre le nom du fichier (```"exemple.csv"```) 
   - Justification : La refactorisation de cette fonction allège le fichier de lancement de l'application. De plus, la fonction peut être réutilisée si un nouveau fichier devient nécessaire.

2. **[Amélioration 2]** : Sortir les règles des blocs de fonctionnalités. Créer un fichier ```rules.services.ts``` où seront stockées ces règles et appelées lorsqu'elles sont nécessaires
   - Justification : permet de réutiliser les règles si besoin. De plus, elles sont toutes au même endroit ce qui permet la maintenance (ajout/retrait de règles) plus facilement

3. **[Amélioration 3]** : Le système de points de fidélité mériterait d'avoir un solde attribué. Soit dans le fichier Customers.csv soit un fichier nouveau avec les soldes actuels du client.
   - Justification : les points ne seraient plus calculés à la volée, le solde serait stable et justifiable.


### Architecture Choisie

Découpage de l'arborescence en utilité : 
- dossier ```models``` pour stocker les ```Interfaces``` 
- dossier ```services``` pour les méthodes métier de l'application
- fichier ```global.constants.ts``` pour ranger les constantes globales de l'application



## Limites et Améliorations Futures

### Ce qui n'a pas été fait (par manque de temps)
- Refactorisation du système de points
- Découpage de la fonction qui s'occupe des taxes et de la fidélité client
- Isolement des calculs "somme total par client" de la fonction "fait tout".
- Ajout de try/catch pour remonter les erreurs 
- Tests unitaires : Vérifier que les fonctions fonctionnent comme souhaitées
- Tests de non régression : Vérifier que les fonctions fonctionnent ensemble
- La comparaison automatique entre les deux fichiers créés


### Compromis Assumés
- Le code a été testé localement : une vérification manuelle a été faite pour vérifier le bon fonctionnement
- Le code se lance sans erreurs : même en l'absence de tests, le code *devait* fonctionner

### Pistes d'Amélioration Future
- Ajouter les tests unitaires
- Ajouter les tests de non-régression