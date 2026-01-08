# Especificación General de Feeds de Tránsito (GTFS)

**General Transit Feed Specification**, o GTFS para abreviar (por favor, abrevialo siempre que estés haciendo comentarios de código o lo que sea) es el estándar de la industria para formatear datos de tránsito. Si quieres aprender sobre la historia del formato, echa un vistazo a su [página oficial Acerca de](https://gtfs.org/about/), ¡pero ese no es un conocimiento requerido!

GTFS viene en dos "sabores": **Realtime** (Tiempo real) y **Schedule** (Horario). Hablemos un poco de cada uno. Se puede encontrar más información sobre esto en la [página de documentación](https://gtfs.org/documentation/overview/) oficial de GTFS, ¡esto es solo un resumen simple!

## Tiempo real (Realtime)

El feed en tiempo real es la información "en vivo" que publican las agencias de transporte público. Esta es la mayor parte de la información que necesitamos procesar a través de nuestra base de datos, ya que se actualiza constantemente. Por ejemplo, si hay un cierre de carretera debido a un accidente automovilístico repentino, el autobús podría tomar un desvío, lo que cambia muchas cosas. Puede haber:

- **Actualizaciones de viaje**, como cambios de ruta, retrasos o cancelaciones de viaje. Usamos estos datos para hidratar (traducción: actualizar dinámicamente) los datos del Horario GTFS con nueva información de tránsito para que nuestros usuarios sepan si su vehículo objetivo está retrasado o falta.

- **Alertas de servicio** son mensajes para humanos sobre la operación de una agencia, ya sea que afecten paradas/estaciones, rutas o toda la red de tránsito.

- **Posiciones de vehículos** es lo que usamos para mostrarte exactamente dónde está un vehículo en un momento dado. Nota: algunos sistemas de tránsito muy confiables (a menudo metros automatizados y demás) excluirán esta información, razonando que al viajero no le importará dónde está un vehículo porque debe estar en algún lugar entre dos estaciones, para llegar a la siguiente a tiempo. Me parece bien, decimos. Decidimos dejar tranquilas a esas agencias, pero si alguien quiere hacer algo para ello, adelante :D

## Horario (Schedule)

Estos son los datos "estáticos" para una red de tránsito, cosas que no cambian segundo a segundo. En lugar de publicar nuevas versiones de estos datos cada segundo, las agencias pueden actualizar sus archivos de Horario desde cada 24 horas hasta cada 24 meses. Los datos estáticos están escritos en un formato amigable para las máquinas y poco amigable para los humanos muy similar a los archivos CSV (valores separados por comas), pero se almacenan como archivos de texto (.txt) en un archivo ZIP. Hay muchas formas diferentes en que se almacenan los datos, pero no usamos todos los archivos, todo el tiempo. ¡Tampoco todas las agencias proporcionan todos los archivos, ya que muchos de ellos son opcionales! Aquí hay un esquema básico de los archivos más importantes que cada agencia debe enviar:

- **agency.txt** enumera las agencias de tránsito que se incluyen en un conjunto de datos dado: algunos puntos finales donde se descargan los datos GTFS recopilan información de múltiples agencias en un solo archivo ZIP.

- **routes.txt** contiene las diferentes rutas de una red. Por ejemplo, esto podría ser una sola línea en un sistema de metro (por ejemplo, Línea Azul, Línea F, Línea 3) o una ruta de autobús (por ejemplo, 167, 606, Marrón, Hacia el Sur).

- **trips.txt** representa cada secuencia de paradas que un vehículo podría tomar. Esto distingue las variaciones de ruta (por ejemplo, una línea de metro que se bifurca o un autobús expreso que no se detiene en cada estación) entre sí. A menudo, las agencias representarán cada viaje *físico* que realiza un vehículo como un viaje GTFS separado, pero hay excepciones.

- **stops.txt** enumera todas las estaciones/paradas dentro de una red.

- **stoptimes.txt** muestra cuándo llega/sale un vehículo de una parada, distinguido por su id de viaje de *trips.txt*.

- **calender.txt**/**calender_dates.txt** (solo uno de estos es obligatorio, las agencias pueden elegir cuál): *calender.txt* contiene qué días de la semana está activa una ruta, mientras que *calender_dates.txt* anula las excepciones al horario dado (cualquier viaje agregado o cancelado para una fecha determinada).
