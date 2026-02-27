# order-report-refactoring

## Installation

### Prérequis
- TypeScript version 5.9
- NPM version 10.9

### Commandes

# Commandes pour installer les dépendances

```npm install```

#### **2. Exécution**
## Exécution
```npm run legacy```

### Exécuter le code refactoré

# Commande pour lancer votre code
```npm start```


# Commande pour lancer tous les tests
```npm test```

#### **3. Choix de Refactoring**


## Choix de Refactoring

### Problèmes Identifiés dans le Legacy

1. **Grosse répétition de la fonction de parsing du CSV** : Gros bloc de code, peu digeste, susceptible d'apporter des erreurs
   - Impact : gros risques d'erreur et gros inconfort pour le développeur

2. **[Autre smell]** : [Description]
   - Impact : [...]

### Solutions Apportées

1. **[Amélioration 1]** : Les variables pour obtenir les informations du CSV sont maintenant dynamiques. Il suffit de mettre le nom du fichier (```"exemple.csv"```) 
   - Justification : La refactorisation de cette fonction allège le fichier de lancement de l'application. De plus, la fonction peut être réutilisée si un nouveau fichier devient nécessaire.

2. **[Amélioration 2]** : [Ce que vous avez fait]
   - Justification : [...]

### Architecture Choisie

Découpage de l'arborescence en utilité : 
- dossier ```models``` pour stocker les ```Interfaces``` 
- dossier ```services``` pour les méthodes métier de l'application


### Exemples Concrets

**Exemple 1 : [Nom du refactoring]**
- Problème : [code smell spécifique]
- Solution : [approche retenue]

**Exemple 2 : [Autre refactoring]**
- ...


## Limites et Améliorations Futures

### Ce qui n'a pas été fait (par manque de temps)
- Tests unitaires : Vérifier que les fonctions fonctionnent comme souhaitées
- Tests de non régression : Vérifier que les fonctions fonctionnent ensemble
- 


### Compromis Assumés
- [Compromis 1] : [justification]
- [Compromis 2] : [justification]

### Pistes d'Amélioration Future
