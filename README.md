# L'aventure

## Description du projet

_L'aventure est un projet réalisé par Mathéo Chaumet-Venier et Anthonin Murail._
Celui-ci a pour but d'être une appliction de tourisme, avec la possibilités de trouver des lieux magnifiques dans toute la France.

1. Fonctionnalités implémentées :

   **GeoLocalisation**
   Cela nous permets de récupérer où l'utilisateur ce trouve pour pouvoir lui proposer les meilleurs lieux autours de lui, mais aussi de pouvoir voir sur la carte où sont les lieux se trouvant autour de lui. Cela nous permet aussi de lui fournir, la distance qu'il a à parcourir pour pouvoir accéder à ce lieu en fonction du lieu où il se trouve.

   **LocalStorage**
   Le local storage va permettre à l'utilisateur, lorsqu'il clique sur un lieu pour avoir des détails sur celui-ci de l'ajout dans sa liste de lieux 'aimés'. Le localstorage va aussi nous permettre d'avoir un système offline qui va garder seulement les lieux que l'utilisateur a décider d'enregistrer.

   **Leaflet**
   On a opté pour la bibliothèque Leaflet pour pouvoir afficher une map fonctionnel mais aussi facilement maniable. Quelques problèmes sont causés par Leaflet, mais en ayant pas la volonté d'acheter une bibliothèque de Carte, Leaflet nous as été très utile.

2. Langages utilisés :

   **Svelte**
   La plus grosse partie de la structuration de notre projet est du Svelte. Un nouveau langage de programmation pour nous 2, mais ce projet était le moment venu pour nous de l'étudier et de comprendre l'utilité. Toutes nos pages sont produites avec du Svelte, chacune d'elles sont chargés dès le lancement de l'application et le Component _footer_ nous permets de pouvoir naviguer entre les pages. L'utilisation de Component et de Fonction réutilisable dans d'autres pages est quelque chose de nouveau pour nous mais qui permet une facilité intéressante pour gérer des données.

   **TypeScript**
   Pour pouvoir fonctionné avec Svelte, TypeScript est le langage remplaçant notre _Javascript_. Celui-ci nous permets de faire du code plus sécurisé et de pouvoir travailler très facilement avec les Components créer en Svelte. Le fichier _map.ts_ est celui-ci qui se rapproche le plus du _Javascript_ étant donné que celui-ci travail avec la Bibliothèque de carte _Leaflet_.

   **Scss**
   Ce langage nous permis de bien structuré nos fichiers styles, et pouvoir éviter d'avoir des lignes de code répétitive. Combiné à la méthodologie BEM, SCSS nous a permis de nous retrouver sur chacun de nos fichiers peu importe la personne qui avait créer celui-ci. Très pratique pour s'y retrouver lorsque l'on travail à plusieurs sur un projet.

## Détails concernants l'utilisation

1. Environnement

   **Appareil**
   Normalement peu importe l'appareil utilisés cette application doit fonctionné. Bien évidement pour pouvoir accéder au système de GéoLocalisation il faut avoir un appareil permettant ceci. Peu importe la taille de l'écran l'application est responsive et accéssible partout, malgrès le fait que celle-ci est bien plus orientées mobile.

   **Navigateur / Connexion**
   D'après les plusieurs tests réalisés l'application fonctionne sur tout les navigateurs (quelques erreurs sur certains Chrome d'un Android). Niveau connexion tout fonctionne, malgrès un petit temps d'attente si la connexion est très faible.

2. Amélioration possible

   **Lieux**
   Effectivement nous avons utilisés une liste de lieu "fictif" pour pouvoir faire des tests en fonction de notre localisation. Si jamais l'application venait à être utiliser, alors celle-ci pourrait alimenter son fichier Json. Celui-ci et tout le reste du code est faits pour que peut importe le nombre de lieu se trouvant dans le fichier Json, l'application fonctionnera.

   **Carte**
   Comme dit un peu au-dessus, Leaflet nous as été très utile mais celle-ci ne nous as limiter sur quelques points. D'abord sur le chargement de la page, Leaflet n'accepte pas le fait d'être en display none au démarrage de l'application. De plus celle-ci ne nous permets pas de faire des trajets. Oui comme on le voit lorsque l'on clique sur un lieu sur la map, un petit logo play est présent, celui-ci devait nous permettre de lancer le trajet. De plus lors du dezoom sur la carte les lieux ne gardent pas vraiment le vrai placement qu'ils devraient avoir...

   **Notification**
   Un système de notification devait aussi voir le jour, avec une notification lorsqu'un utilisateur n'était pas loin d'un lieu qu'il avait aimé. Par cause de temps nous n'avons pas pu réaliser cela, peut-être que cela changera avant la fin du projet. On ne voulait pas réaliser une notification juste pour réaliser une notification, on voulait faire quelque chose de professionnel c'est pourquoi nous n'avons pas pu réaliser cela.
