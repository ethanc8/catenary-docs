# Los Ángeles, Condado de Orange e Inland Empire

Catenary es una aplicación de tránsito que te ayuda a ver dónde está tu autobús o tren, en cualquier lugar de Los Ángeles, el Condado de Orange y el Inland Empire.
Mira las salidas en vivo, explora las paradas cercanas y revisa las alertas de servicio, todo desde un solo lugar.

[**Lanzar Catenary**](https://maps.catenarymaps.org/#pos=8.89/34.0228/-118.2885)

## Agencias soportadas

Con Catenary, puedes ver todas las rutas de autobús y líneas de tren operadas por las siguientes agencias, ver las próximas salidas y consultar sus horarios. Además, la mayoría de ellas proporcionan datos en tiempo real, por lo que puedes saber si tu tren/autobús llega tarde y ver vehículos individuales en el mapa.

### Ferrocarril

* Los trenes de **LA Metro Rail** están soportados
  * Se soportan posiciones de trenes en tiempo real, tiempos de llegada previstos y alertas
* Los trenes de **Metrolink** están soportados
  * Se soportan posiciones de trenes en tiempo real, tiempos de llegada previstos y alertas
  * Los números de vía están disponibles
* Los trenes de **Amtrak** están soportados
  * Se soportan posiciones de trenes en tiempo real y tiempos de llegada previstos
  * Los números de vía están disponibles
  * Las alertas están disponibles para todos los trenes excepto *Pacific Surfliner*

### Autobús

* Los autobuses de **LA Metro Bus** están soportados
  * Se soportan posiciones de autobuses en tiempo real, tiempos de llegada previstos y alertas
* Los autobuses de **OCTA** (Condado de Orange) están soportados
  * Se soportan posiciones de autobuses en tiempo real, tiempos de llegada previstos y alertas
* Muchos operadores de autobuses municipales están bien soportados; hay demasiados para enumerarlos.

## Preguntas frecuentes

### ¿Catenary muestra datos en tiempo real en Los Ángeles?
Sí. Catenary proporciona ubicaciones de trenes en vivo y tiempos de salida estimados en Los Ángeles.

### ¿Catenary muestra alertas de servicio en Los Ángeles?

Mostramos alertas de servicio para trenes y muchos, pero no todos, los operadores de autobuses.

### ¿Puedo ver desde qué vía saldrá mi tren?

Sí, puedes hacer clic en una estación para ver su tablero de salidas con los números de vía listados, o ver el número de vía en la pantalla de información del viaje. En este momento, solo tenemos estos datos para LA Union Station.

### ¿Necesito descargar una aplicación?
No. Catenary se ejecuta directamente en tu navegador, simplemente haz clic en [**Lanzar Catenary**](https://maps.catenarymaps.org/#pos=8.89/34.0228/-118.2885).

### ¿Es Catenary de uso gratuito?
Sí. Es completamente gratuito y funciona en dispositivos móviles o de escritorio.

### ¿Cuándo llega el próximo autobús/tren?

[**Lanzar Catenary**](https://maps.catenarymaps.org/#pos=8.89/34.0228/-118.2885) y busca tu parada, o haz zoom para encontrarla. Después de hacer clic en la parada, aparecerán las próximas llegadas.

### ¿Qué parada de autobús o estación de tren está más cerca de mí?

[**Lanzar Catenary**](https://maps.catenarymaps.org/#pos=8.89/34.0228/-118.2885) y aparecerá tu ubicación actual. Puedes navegar por el mapa para encontrar la parada más cercana.

### Solo me interesan los trenes; ¿puedo ocultar los autobuses?

Sí; en la esquina superior derecha puedes hacer clic en el icono de "capa"...

![texto alternativo](./find-layers-button.png)

... y ocultar lo que no quieras ver:

![texto alternativo](./layers-popup.png)

## Diagramas y mapas en PDF

* [Diagrama de tren ligero y tren regional de Metro](https://cdn.beta.metro.net/wp-content/uploads/2025/09/19112839/26-0250_blt_GM_MlinkAmtrak_47x47.5_DCR.pdf)
* [Diagrama de tren de Metro](https://cdn.beta.metro.net/wp-content/uploads/2025/09/18122631/26-0150_map_GM_Master_Sept25_DCR_final.pdf)
* [Diagrama de Metrolink (tren regional)](https://metrolinktrains.com/globalassets/metrolink-system-map-may-2024.pdf)

### Autobuses
* [Mapa de autobuses del Condado de LA](https://cdn.beta.metro.net/wp-content/uploads/2025/09/18122518/26-0248_blt_system_map_47x47.5_DCR_final.pdf)
* [Más mapas de LA Metro](https://www.metro.net/riding/guide/system-maps/)

## Cómo ayudar

Si quieres mejorar nuestros datos/mapas, [únete a nuestro Discord](https://discord.gg/bBeDhrzSgz) y dirígete a uno de los siguientes hilos/canales:

* [#general](https://discord.com/channels/1148092048625385552/1148092049413918772) - para problemas no relacionados con la agencia específica
* [Metrolink](https://discord.com/channels/1148092048625385552/1161491042139385876)
* [Los Ángeles (varios)](https://discord.com/channels/1148092048625385552/1441895498888908912)

Cosas en las que queremos trabajar para Los Ángeles:
* [x] Alertas para OCTA
  * Ver <https://github.com/catenarytransit/octa-gtfs-rt-alerts>
* [ ] Alertas para Pacific Surfliner
* [ ] Documentar nuestro soporte para operadores locales más pequeños
