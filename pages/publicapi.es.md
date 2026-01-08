Actualmente, no tenemos una interfaz para nuestra API, ¡pero los puntos de acceso están abiertos para uso público! La versión alfa de nuestra API en tiempo real se puede acceder desde https://birch.catenarymaps.org/get_realtime_locations/ (¡ese enlace no lleva a ninguna parte!).

Para acceder a una agencia específica, formatea el enlace así: https://birch.catenarymaps.org/get_realtime_locations/orangecountytransportationauthority/bus/0/0
(OCTA, ubicada en California, EE. UU.).

Ahora mismo, como puedes ver en la URL, se muestra la información del feed para los autobuses de OCTA, pero puedes curiosear y probar otras agencias/modalidades, como:
https://birch.catenarymaps.org/get_realtime_locations/metro~losangeles/metro/0/0
(LA Metro, California, EE. UU.).

Puedes localizar las agencias disponibles en este [mapa](https://maps.catenarymaps.org/chateausee), el enlace de la API está organizado básicamente de modo que solo tienes que introducir el nombre de la agencia tal como se deletrea en el mapa de Chateausee y su modalidad (bus, metro, ferry, etc.) en el enlace y debería darte los datos deseados: https://birch.catenarymaps.org/get_realtime_locations/%7Bagency-name%7D/%7Bmodality%7D/0/0.
