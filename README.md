# L'aventure

## Description du projet

_L'aventure est un projet réalisé par Mathéo Chaumet-Venier et Anthonin Murail._

Celui-ci a pour but d'être une appliction de tourisme, offrant la possibilités de trouver des lieux magnifiques dans toute la France.

**1. Fonctionnalités implémentées :**

**GeoLocalisation**

Cela nous permet de récupérer l'endroit où se trouve l'utilisateur afin de lui proposer les meilleurs lieux autour de lui, mais aussi de pouvoir afficher sur la carte les lieux se trouvant à proximité. Cela nous permet également de lui fournir la distance à parcourir pour accéder à ces lieux en fonction de sa position actuelle.

**LocalStorage**

Le stockage local permet à l'utilisateur, lorsqu'il clique sur un lieu pour obtenir des détails à son sujet, de l'ajouter à sa liste de lieux favoris. Le stockage local nous permet également d'avoir un système hors ligne qui conserve uniquement les lieux que l'utilisateur a choisi d'enregistrer.

**Leaflet**

Nous avons opté pour la bibliothèque Leaflet pour afficher une carte fonctionnelle mais aussi facilement manipulable. Bien que Leaflet pose quelques problèmes, nous n'avions pas la volonté d'acheter une bibliothèque de cartes et Leaflet s'est révélé très utile.

**2. Langages utilisés :**

**Svelte**

La plus grande partie de la structuration de notre projet est réalisée en utilisant Svelte, un nouveau langage de programmation pour nous deux. Ce projet était l'occasion pour nous d'étudier et de comprendre son utilité. Toutes nos pages sont produites avec Svelte et sont chargées dès le lancement de l'application. Le composant _footer_ nous permet de naviguer entre les pages. L'utilisation de composants et de fonctions réutilisables dans d'autres pages est quelque chose de nouveau pour nous, mais cela offre une facilité intéressante pour gérer les données.

**TypeScript**

Pour fonctionner avec Svelte, nous utilisons TypeScript comme langage de remplacement de _JavaScript_. Cela nous permet de coder de manière plus sécurisée et de travailler facilement avec les composants créés en Svelte. Le fichier _map.ts_ est celui qui se rapproche le plus de _JavaScript_, car il travaille avec la bibliothèque de cartes Leaflet.

**Scss**

Ce langage nous permet de bien structurer nos fichiers de style et d'éviter d'avoir des lignes de code répétitives. En combinant la méthodologie BEM, SCSS nous a permis de nous retrouver facilement sur chacun de nos fichiers, peu importe la personne qui l'a créé. C'est très pratique lorsqu'on travaille à plusieurs sur un projet.

## Détails concernants l'utilisation

**1. Environnement**

**Appareil**

Normalement, cette application doit fonctionner sur n'importe quel appareil. Bien évidemment, pour pouvoir accéder au système de géolocalisation, il faut avoir un appareil qui le permet. L'application est responsive et accessible partout, peu importe la taille de l'écran, même si elle est principalement conçue pour les appareils mobiles.

**Navigateur / Connexion**

D'après les nombreux tests réalisés, l'application fonctionne sur tous les navigateurs, bien qu'il y ait eu quelques erreurs sur certains Chrome d'Android. En termes de connexion, tout fonctionne, bien qu'il y ait un petit temps d'attente si la connexion est très faible.

**2. Amélioration possible**

**Lieux**

Effectivement, nous avons utilisé une liste de lieux fictifs pour pouvoir faire des tests en fonction de notre localisation. Si jamais l'application venait à être utilisée, elle pourrait alimenter son fichier JSON. Tout le code est conçu pour que, peu importe le nombre de lieux se trouvant dans le fichier JSON, l'application fonctionne.

**Carte**

Comme mentionné précédemment, Leaflet nous a été très utile, mais nous avons rencontré quelques limites. Tout d'abord, Leaflet n'accepte pas d'être en mode "display none" au démarrage de l'application. En outre, il ne nous permet pas de tracer des itinéraires entre deux points. Bien que nous ayons ajouté un petit bouton "play" pour lancer la navigation vers un lieu, celui-ci n'est pas fonctionnel. De plus, lorsqu'on effectue un zoom arrière sur la carte, les marqueurs de lieu ne gardent pas toujours leurs positions réelles.

**Notification**

Un système de notifications devait également être mis en place, avec une alerte pour informer l'utilisateur lorsqu'il était proche d'un lieu qu'il avait marqué comme favori. Cependant, en raison de contraintes de temps, nous n'avons pas pu le développer entièrement. Peut-être que nous pourrons y travailler avant la fin du projet. Nous ne voulions pas ajouter une fonctionnalité de notification juste pour en avoir une, mais plutôt créer quelque chose de professionnel, ce qui explique pourquoi nous avons préféré ne pas la mettre en place pour le moment.
