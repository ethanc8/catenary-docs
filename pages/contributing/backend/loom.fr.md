# Génération de routes

*Ce projet est actuellement à un stade très précoce. Nous ne savons pas où ce train va, mais nous aimerions que vous fassiez le trajet avec nous !*

La génération de routes fait référence à la manière dont, visuellement, nous générons les itinéraires empruntés par les véhicules. Qu'il s'agisse d'une ligne de bus, d'une ligne de chemin de fer ou d'un trajet en ferry, nous devons prendre les informations que les agences de transport nous fournissent et programmer quelque chose pour "dessiner" les chemins que suivent ces options de transport !

Si nous avons de la chance, l'agence nous fournira un fichier shape.txt précis dans son emploi du temps GTFS — une liste de points de coordonnées le long desquels la ligne se trouve. Cependant, ces données ne correspondent pas toujours à la réalité ! Par exemple, les coordonnées peuvent ne pas s'aligner avec les routes physiques, les rails et autres frontières réelles. Alternativement, différents itinéraires peuvent marquer leur arrêt dans différentes zones de la même station, créant des formes bizarres et chevauchantes entre des itinéraires qui devraient se chevaucher. Encore plus difficiles sont les cas où l'agence ne nous donne aucune information géographique du tout, à l'exception des emplacements des arrêts. Dans ce cas, notre logiciel déduit actuellement le chemin le plus court et le plus direct d'une *ligne droite* entre les stations, dessinant ainsi un chemin unique directement à travers la carte, à travers les bâtiments et tout le reste. Bien sûr, c'est inexact et un casse-tête à regarder, donc nous cherchons des solutions à ces problèmes en ce moment !

Heureusement pour nous, il existe des articles de recherche existants et du code sur ces problèmes de map-matching, de génération d'itinéraires, et nous avons fait des recherches sur le sujet depuis un moment maintenant. Nous aimerions travailler là-dessus tout de suite, mais il y a beaucoup d'articles plus prioritaires sur notre liste de choses à faire — et nous manquons de personnel.

Contactez-nous si vous souhaitez en savoir plus ou aider !
