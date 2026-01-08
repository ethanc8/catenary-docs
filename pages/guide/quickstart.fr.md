# Aperçu des Fonctionnalités de la Carte

*Un guide rapide de Catenary pour l'utilisateur occasionnel !*

N'hésitez pas à ouvrir la carte et à suivre ! Cela signifie aller sur notre site web, [ici](https://maps.catenarymaps.org). (Nous travaillons à la création d'une version téléchargeable.)

## Menu d'Affichage

Nous savons qu'avoir tous les calques ouverts peut être très accablant pour certains, tandis que d'autres apprécient l'effervescence de voir tout ce que nous avons à offrir en même temps. Donc, nous vous laissons décider de ce que vous voulez voir !

<img src="../../examples/top_right_toggle.png" align="right" width="50">

Pour basculer nos calques, allez dans le coin supérieur droit et jetez un œil au bouton calque (une forme de diamant stylisée), assis au-dessus de la boussole (flèche rouge au-dessus de la lettre "N"). Cliquez sur le diamant, et une petite boîte avec deux rangées d'icônes apparaîtra dans le coin inférieur droit !

La première rangée contrôle quelles fonctionnalités de transport apparaissent sur la carte. Appelons cela le Contrôle des Calques.
![Contrôle des calques de la carte ](../../examples/layer_bar.png)

Ici, vous pouvez sélectionner si les cartes affichent :
- les itinéraires de transport tracés sous forme de lignes
- les étiquettes d'ID d'itinéraire pour les itinéraires affichés
- les arrêts sous forme de petites bulles
- les étiquettes de nom pour les arrêts affichés
- les véhicules en temps réel se déplaçant

Par exemple, l'image suivante montre tout ce qui précède, sauf les véhicules :
![Exemple de calque de la carte ](../../examples/layer.png)

Ensuite, la deuxième rangée contrôle quels indicateurs de véhicule sont affichés. Appelons cela le Contrôle des Véhicules.
![Contrôle des calques de la carte ](../../examples/vehicle_bar.png)

Ici, vous pouvez sélectionner si les véhicules affichés indiquent leur :
- numéro d'itinéraire actuel
- ID de trajet
- ID de véhicule de l'agence
- girouette actuelle
- vitesse actuelle
- occupation actuelle (plein, vide, entre les deux, etc.) sous forme de symbole

Par exemple, l'image suivante montre tout ce qui précède :
![Exemple de calque de la carte ](../../examples/vehicle.png)
 
## La Barre Latérale

C'est ainsi que vous pouvez ajuster les paramètres et voir des informations détaillées sur les itinéraires et les véhicules !

2. Assurez-vous d'avoir activé les services de localisation et que Catenary a la permission de voir votre position. De cette façon, la carte s'ouvrira automatiquement près de l'endroit où vous vous trouvez. Ne vous inquiétez pas, nous ne collectons aucune donnée utilisateur ; nous ne pouvons pas suivre la localisation de nos utilisateurs !</br></br> 

![Haut de la barre latérale](../../examples/top_sidebar1.png)

3. Jetez un œil à cette partie supérieure de la barre latérale ! En partant du logo et en allant de gauche à droite, de haut en bas, nous avons les icônes suivantes :

- Logo Catenary bleu : vous emmène à la page d'accueil de notre site web
- Actualiser bleu (flèche incurvée) : actualise l'affichage des Départs à Proximité
- Engrenage bleu : Ouvre les paramètres utilisateur (langue d'affichage, etc.) Nous en parlerons dans sa propre section plus tard !
- Flèche verte : zoome sur votre position actuelle, si activée
- Épingle violette inversée + Carré avec cercle dedans (marqueur de position sur la carte) : Affiche une épingle mobile que vous pouvez faire glisser et déposer autour de l'écran !
- Filtre gris : choisissez le type de transport que vous souhaitez voir (Rail, Métro/Tram, Bus et Autre)

Ceux-ci sont tous interactifs pour l'utilisateur. Allez-y et essayez !.

## Utilisation des Départs à Proximité

La fonctionnalité principale de notre barre latérale est d'afficher les Départs à Proximité soit de votre emplacement, soit de l'endroit où l'épingle violette est placée sur la carte !

Pour une méthodologie détaillée, vous pouvez consulter le côté technique de nos documents pour les contributeurs, mais pour résumer rapidement, notre système recherche les stations de transport à proximité et trouve les trajets partant bientôt de chacune d'elles, et les trie par itinéraire et direction !

Vous pouvez cliquer sur un trajet spécifique pour voir des informations détaillées à son sujet --- quand le véhicule quitte son premier arrêt, quand il arrive à chaque arrêt suivant, et de combien il est en retard ou en avance. Cela met également en évidence l'itinéraire sur la carte, même si vous n'avez pas ce calque de carte affiché !

Si vous souhaitez revenir à un écran précédent, appuyez sur le bouton Accueil qui apparaît à la place du symbole d'actualisation une fois que vous avez cliqué sur un itinéraire spécifique.

## La Carte

Passons en revue quelques navigation de base !

**Pour les Utilisateurs PC :**
- Clic gauche et glisser pour se déplacer sur la carte
- Utilisez la molette de défilement (souris) ou pincez avec deux doigts (pavé tactile) pour zoomer et dézoomer
- Maintenez le clic droit, et déplacez la souris vers la droite/gauche (souris) ou faites glisser le doigt vers la droite/gauche (pavé tactile) pour changer l'orientation cardinale
- Maintenez le clic droit, et déplacez la souris vers le haut/bas (souris) ou faites glisser le doigt vers le haut/bas (pavé tactile) pour changer l'inclinaison (mode 3D)

**Pour les Utilisateurs d'Écrans Tactiles :**
- Appuyez et faites glisser pour se déplacer sur la carte
- Pincez avec deux doigts pour zoomer et dézoomer
- Faites pivoter avec deux doigts pour changer l'orientation cardinale de la carte
- Faites glisser vers le haut avec deux doigts pour changer l'inclinaison de la carte (mode 3D)
<br>

<img src="../../examples/routes_from_spot.png" align="right" width="300">Cliquez/appuyez sur un point sur une carte pour voir quels itinéraires affichés passent par ce point ! Il y aura une liste des itinéraires sur la barre latérale. Vous pouvez interagir avec ceux-ci ! Si vous cliquez sur un itinéraire dans cette liste, cela mettra en évidence le schéma de la ligne sur la carte et affichera ses variations de trajet sur la barre latérale. Cela signifie que vous pouvez voir une liste des arrêts par lesquels l'itinéraire passe, des liens vers l'agence de transport, un PDF des fréquences (départs prévus) si disponible, et plus encore. Vous pouvez également obtenir cette vue en cliquant sur les véhicules, ce qui affichera le trajet et le schéma de la ligne

<img src="../../examples/route_from_list.png" align="middle" width="300"> 
