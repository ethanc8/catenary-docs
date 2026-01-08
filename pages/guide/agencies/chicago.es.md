# Chicago

Catenary es una aplicación de tránsito que te ayuda a ver dónde está tu autobús o tren, en cualquier lugar de Chicagoland.
Mira las salidas en vivo, explora las paradas cercanas y revisa las alertas de servicio, todo desde un solo lugar.

[**Lanzar Catenary**](https://maps.catenarymaps.org/#pos=10/41.8652/-87.6198)

## Agencias soportadas

Con Catenary, puedes ver todas las rutas de autobús y líneas de tren operadas por las siguientes agencias, ver las próximas salidas y consultar sus horarios. Además, la mayoría de ellas proporcionan datos en tiempo real, por lo que puedes saber si tu tren/autobús llega tarde y ver vehículos individuales en el mapa.

### Ferrocarril

* **CTA 'L'** (tránsito rápido) está soportado
  * Se soportan posiciones de trenes en tiempo real y tiempos de llegada previstos
  * Las alertas no están soportadas
* El tren de cercanías **Metra** está soportado
  * Se soportan posiciones de trenes en tiempo real, tiempos de llegada previstos y alertas
* **NICTD South Shore Line** (tren de cercanías) está soportado
  * Se soportan posiciones de trenes en tiempo real
  * Los tiempos de llegada previstos y las alertas no están soportados

### Autobús

* Los **autobuses de CTA** están soportados
  * Los datos en tiempo real no están disponibles
* Los **autobuses de Pace** están soportados
  * Los datos en tiempo real están disponibles, pero parece que tienen problemas
  * Las alertas no están soportadas
    * Ninguna aplicación en absoluto soporta alertas para Pace

## Preguntas frecuentes

### ¿Catenary muestra datos en tiempo real en Chicago?
Sí. Catenary proporciona ubicaciones de trenes en vivo y tiempos de salida estimados en Chicago.

También proporcionamos ubicaciones de autobuses en vivo en los suburbios de Chicago, pero desafortunadamente CTA no proporciona ubicaciones de autobuses en vivo en un formato que podamos usar.

### ¿Catenary muestra alertas de servicio en Chicago?

Mostramos alertas de servicio para los trenes Metra. Desafortunadamente, CTA, Pace y NICTD no proporcionan alertas de servicio en un formato que podamos usar.

### ¿Puedo ver desde qué vía saldrá mi tren?

No, no tenemos estos datos. La única forma de averiguarlo es viendo el tablero de salidas en tu estación; ninguna aplicación o sitio web proporciona números de vía para las próximas salidas en Chicago.

### ¿Necesito descargar una aplicación?
No. Catenary se ejecuta directamente en tu navegador, simplemente haz clic en [**Lanzar Catenary**](https://maps.catenarymaps.org/#pos=10/41.8652/-87.6198).

### ¿Es Catenary de uso gratuito?
Sí. Es completamente gratuito y funciona en dispositivos móviles o de escritorio.

### ¿Cuándo llega el próximo autobús/tren?

[**Lanzar Catenary**](https://maps.catenarymaps.org/#pos=10/41.8652/-87.6198) y busca tu parada, o haz zoom para encontrarla. Después de hacer clic en la parada, aparecerán las próximas llegadas.

### ¿Qué parada de autobús o estación de tren está más cerca de mí?

[**Lanzar Catenary**](https://maps.catenarymaps.org/#pos=10/41.8652/-87.6198) y aparecerá tu ubicación actual. Puedes navegar por el mapa para encontrar la parada más cercana.

### Solo me interesan los trenes; ¿puedo ocultar los autobuses?

Sí; en la esquina superior derecha puedes hacer clic en el icono de "capa"...

![texto alternativo](./find-layers-button.png)

... y ocultar lo que no quieras ver:

![texto alternativo](./layers-popup.png)

## Diagramas y mapas en PDF

* [Mapa del sistema RTA (oficial)](https://www.rtachicago.org/uploads/images/general/RTA-System-Map.pdf) - Rutas de autobús y tren en Cook y los condados circundantes
* [Diagrama ferroviario (oficial)](https://www.rtachicago.org/uploads/images/general/RTA_Train_Connections.pdf)
  * [Solo CTA 'L'](https://www.transitchicago.com/assets/1/6/ctamap_Lsystem.pdf)

## Cómo ayudar

El progreso de agregar soporte para los operadores de tránsito de Chicagoland se rastrea en la siguiente hoja de cálculo:
<https://docs.google.com/spreadsheets/d/15wKbfusysMrV_2lPuMFXCFsSg-TPV31qtbukZi4sEmU/edit>

Los datos en tiempo real de CTA son procesados por [@catenarytransit/chicago-gtfs-rt](https://github.com/catenarytransit/chicago-gtfs-rt).

Si quieres mejorar nuestros datos/mapas, [únete a nuestro Discord](https://discord.gg/bBeDhrzSgz) y dirígete a uno de los siguientes hilos/canales:

* [#general](https://discord.com/channels/1148092048625385552/1148092049413918772) - para problemas no relacionados con la agencia específica
* [Chicago (CTA)](https://discord.com/channels/1148092048625385552/1160489723463209010)
* [Metra](https://discord.com/channels/1148092048625385552/1390099472788226078)
* [Pace](https://discord.com/channels/1148092048625385552/1388148385323679815)
* [Operadores de autobuses pequeños del área de Chicago](https://discord.com/channels/1148092048625385552/1388199355336491118)

Cosas en las que queremos trabajar para Chicago:

* [ ] Obtener alertas funcionales de Pace (esto es bastante difícil)
* [ ] Obtener alertas de CTA (hay una buena API, a la que tenemos que escribir código personalizado para conectarnos)
* [ ] Obtener alertas funcionales de NICTD (también hay una buena API a la que necesitamos conectarnos)

CTA proporcionará GTFS-RT en el futuro, por lo que actualmente no queremos convertir su API de posición de autobús actual.
