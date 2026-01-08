Actuellement, nous n'avons pas d'interface pour notre API, mais les points de terminaison sont ouverts à l'usage public ! La version alpha de notre flux API en temps réel est accessible depuis https://birch.catenarymaps.org/get_realtime_locations/ (ce lien ne mène nulle part !).

Pour accéder à une agence spécifique, formatez le lien comme ceci : https://birch.catenarymaps.org/get_realtime_locations/orangecountytransportationauthority/bus/0/0
(OCTA, situé en Californie, USA).

Pour l'instant, comme vous pouvez le voir d'après l'URL, il affiche les informations du flux pour les bus de l'OCTA, mais vous pouvez explorer et essayer d'autres agences/modalités, telles que :
https://birch.catenarymaps.org/get_realtime_locations/metro~losangeles/metro/0/0
(LA Metro, Californie, USA).

Vous pouvez localiser les agences disponibles à partir de cette [carte](https://maps.catenarymaps.org/chateausee), le lien API est essentiellement organisé de sorte que vous n'avez qu'à insérer le nom de l'agence tel qu'il est orthographié sur la carte Chateausee et sa modalité (bus, métro, ferry, etc.) dans le lien et il devrait vous donner les données souhaitées : https://birch.catenarymaps.org/get_realtime_locations/%7Bagency-name%7D/%7Bmodality%7D/0/0.
