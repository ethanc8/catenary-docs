# General Transit Feed Specification (GTFS)

**General Transit Feed Specification**, ou GTFS pour faire court (*s'il vous plaît*, abrégez-le simplement chaque fois que vous faites des commentaires de code ou autre), est la norme de l'industrie pour le formatage des données de transport. Si vous souhaitez en savoir plus sur l'histoire du format, jetez un œil sur leur [page À propos officielle](https://gtfs.org/about/), mais ce n'est pas une connaissance requise !

GTFS se décline en deux "saveurs" : **Temps réel** (Realtime) et **Horaires** (Schedule). Parlons un peu de chacune. Plus d'informations à ce sujet peuvent être trouvées sur la [page de documentation](https://gtfs.org/documentation/overview/) officielle de GTFS, c'est juste un résumé simple !

## Temps réel (Realtime)

Le flux en temps réel est l'information "en direct" que les agences de transport public diffusent. C'est la majeure partie des informations que nous devons traiter via notre base de données, car elles sont constamment mises à jour. Par exemple, s'il y a une fermeture de route due à un accident de voiture soudain, le bus pourrait faire un détour, ce qui change beaucoup de choses. Il peut y avoir :

- **Mises à jour de voyage (Trip updates)**, telles que des changements d'itinéraire, des retards ou des annulations de voyage. Nous utilisons ces données pour hydrater (traduction : mettre à jour dynamiquement) les données d'horaires GTFS avec de nouvelles informations de transport afin que nos utilisateurs sachent si leur véhicule cible est retardé ou manquant.

- **Alertes de service (Service alerts)** sont des messages destinés aux humains concernant le fonctionnement d'une agence, qu'ils affectent des arrêts/gares, des itinéraires ou l'ensemble du réseau de transport.

- **Positions des véhicules (Vehicle positions)** est ce que nous utilisons pour vous montrer exactement où se trouve un véhicule à un moment donné. Remarque : certains systèmes de transport très fiables (souvent des métros automatisés et autres) excluront cette information, raisonnant que le passager ne se souciera pas de l'endroit où se trouve un véhicule car il doit être quelque part entre deux stations, pour arriver à la prochaine à l'heure. C'est juste, disons-nous. Nous avons décidé de laisser ces agences tranquilles, mais si quelqu'un veut faire quelque chose pour cela, allez-y :D

## Horaires (Schedule)

Ce sont les données "statiques" pour un réseau de transport — des choses qui ne changent pas de seconde en seconde. Plutôt que de diffuser de nouvelles versions de ces données chaque seconde, les agences peuvent mettre à jour leurs fichiers d'horaires de toutes les 24 heures à tous les 24 mois. Les données statiques sont écrites dans un format convivial pour les machines et inamical pour les humains, très similaire aux fichiers CSV (valeurs séparées par des virgules), mais elles sont stockées sous forme de fichiers texte (.txt) dans un fichier ZIP. Il existe de nombreuses façons différentes de stocker les données, mais nous n'utilisons pas tous les fichiers, tout le temps. Toutes les agences ne fournissent pas tous les fichiers non plus, car beaucoup d'entre eux sont optionnels ! Voici un aperçu de base des fichiers les plus importants que chaque agence est tenue de soumettre :

- **agency.txt** liste les agences de transport qui sont incluses dans un jeu de données donné — certains points de terminaison où les données GTFS sont téléchargées collectent des informations de plusieurs agences dans un seul fichier ZIP.

- **routes.txt** contient les différents itinéraires d'un réseau. Par exemple, cela peut être une seule ligne dans un système de métro (par exemple, Ligne Bleue, Ligne F, Ligne 3) ou un itinéraire de bus (par exemple, 167, 606, Marron, Sud).

- **trips.txt** représente chaque séquence d'arrêts qu'un véhicule pourrait prendre. Cela distingue les variations d'itinéraire (par exemple, une ligne de métro qui bifurque ou un bus express qui ne s'arrête pas à chaque station) les unes des autres. Souvent, les agences représenteront chaque voyage *physique* qu'un véhicule effectue comme un voyage GTFS séparé, mais il y a des exceptions.

- **stops.txt** liste toutes les stations/arrêts au sein d'un réseau.

- **stoptimes.txt** indique quand un véhicule arrive à/part d'un arrêt, distingué par son identifiant de voyage provenant de *trips.txt*.

- **calender.txt**/**calender_dates.txt** (un seul de ces fichiers est requis, les agences peuvent choisir lequel) : *calender.txt* contient les jours de la semaine où un itinéraire est actif, tandis que *calender_dates.txt* remplace les exceptions à l'horaire donné (tous les voyages ajoutés ou annulés pour une date donnée).
