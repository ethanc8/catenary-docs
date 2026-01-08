# GitHub
Esta siguiente parte es crucial para comenzar tu viaje para desarrollar Catenary. ¡GitHub! Para aquellos que no estén familiarizados con él, GitHub es una plataforma de intercambio de código que utiliza el protocolo de control de versiones Git para realizar un seguimiento del código de un proyecto de software. Lo usamos para que todos los miembros de nuestro equipo puedan trabajar juntos en el proyecto en cualquier momento.

## Configuración de Git

1. Crea una cuenta de GitHub si aún no tienes una: Regístrate en [GitHub](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)
    
2. Descarga [Git](https://git-scm.com/downloads) en tu dispositivo. Asegúrate de haber iniciado sesión, ya sea a través de la integración de VSCode, clave SSH, aplicación de escritorio de GitHub, etc.

3. Abre Git Bash e ingresa los siguientes comandos con "nombre" y "email@dominio" reemplazados con tu nombre y el correo electrónico que usaste para registrarte en GitHub. Esto ayuda a git a identificar quién eres.
    
    git config --global user.name "nombre"
    
    git config --global user.email "email@dominio"
    
4. Clona el repositorio (repo, para abreviar) en el que quieres trabajar consultando nuestra [lista de repositorios de GitHub](https://github.com/orgs/catenarytransit/repositories). Los repositorios clave incluyen:

- catenary-frontend: ¡Hogar de nuestro código frontend! Esto abarca los aspectos orientados al usuario de nuestro proyecto: la interfaz de usuario y las imágenes del mapa en sí.

- catenary-backend: ¡El código detrás de escena que mantiene a Catenary en funcionamiento! Alberga la máquina de ingestión de datos que procesa las docenas de terabytes de datos que recorremos

- catenary-routing-engine: ¡El planificador de viajes integral personalizado de Catenary diseñado para el transporte público! Actualmente en desarrollo, etapa alfa aún no lanzada.

- catenary-mobile: Estamos trabajando para hacer una aplicación móvil Catenary; ¡muchos usuarios esperan esto con ansias!

5. ¡Empieza a trabajar en el código! Después de realizar los cambios que deseas, pasa a la siguiente sección.

## Protocolo de Contribución
Después de clonar tu repositorio de destino, asegúrate de seguir estos pasos cada vez que trabajes en el código:

1. Ejecuta 'git pull'. En términos más simples, actualiza la versión del código en tu máquina a la versión en línea al obtener cualquier cambio nuevo en el código desde la última vez que trabajaste en él y fusionarlo con tu versión actual.

2. ¡Trabaja en el código! Recuerda agregar comentarios en cualquier parte del código que pueda no ser autoexplicativa. Por ejemplo, dinos qué está destinada a hacer una determinada función; ayuda a todos los demás que trabajan en el código a saber qué está sucediendo.

3. Ejecuta 'git commit -am "[mensaje]"', reemplazando [mensaje] (¡mantén las comillas!) con un comentario útil y conciso sobre lo que cambiaste y actualizaste durante tu sesión de trabajo.

4. Ejecuta 'git push'. ¡Esto actualiza la versión en línea del código con lo que acabas de actualizar! Si alguna vez te arrepientes, ¡no te preocupes! Ejecuta 'git reset --soft' para simplemente deshacer el push de los cambios, o si es necesario, ejecuta 'git reset --hard' para deshacer COMPLETAMENTE tu trabajo desde que confirmaste. ¡Sin embargo, ten cuidado con este, porque eliminará cualquier código no rastreado, incluidos archivos completos!

Después de hacer push, el código se actualizará en *tu* copia (bueno, clon) del repositorio de destino. Si deseas que estos cambios se reflejen en la rama maestra del repositorio, es decir, la copia oficial de Catenary, debes realizar una **Solicitud de Extracción (PR)**.

## Solicitudes de Extracción (Pull Requests)
Para hacer una Solicitud de Extracción, ve al sitio web de GitHub y abre la página principal de tu copia del repositorio (Página de inicio --> Tu foto de perfil en la esquina superior derecha, "Tus repositorios" --> Elige el repositorio de destino). Es posible que ya haya un botón en la parte superior derecha que diga "Compare & pull request" allí. Si es así, haz clic en él. Si no, justo debajo del texto del encabezado, debería haber una barra con un gran botón "Contribute". ¡Haz clic en él y debería dar un menú desplegable con un botón para "Open pull request"! ¡Haz clic en él!

(insertar imagen aquí para demostrar dónde encontrar el botón PR)

Selecciona la rama Catenary como aquella con la que fusionar e ingresa un título útil y una descripción concisa para tu solicitud de extracción. Por ejemplo, si arreglaste los enlaces para algunas agencias de tránsito, titula tu PR "Enlaces de agencias de tránsito arreglados" y escribe una descripción detallando qué agencias cubre esto y qué partes de la experiencia del usuario afectaría este cambio.

Ahora, ¡todo lo que tienes que hacer es esperar una respuesta de nuestro equipo! Nos pondremos en contacto con tu PR lo antes posible y te daremos algunos consejos sobre cómo mejorar tu código, ¡o lo aprobaremos de inmediato!
