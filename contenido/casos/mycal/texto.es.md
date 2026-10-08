---
# Fuente: imagen del caso myCal (ejercicio para aplicar a un trabajo), originalmente en inglés.
# Esta versión es traducción: revísala y borra la línea "traduccion".
# La validación y los aprendizajes los redactó Claude: ajústalos a tu voz.
traduccion: por revisar
titulo: myCal
bajada: '"Be on time anywhere": un calendario para personas de negocios que viajan entre zonas horarias'
rol: Product Designer UX/UI
resumen: Ejercicio de diseño para aplicar a un trabajo. Una app móvil para que quienes viajan por negocios creen y vean sus reuniones en distintas zonas horarias, desde el user persona hasta los wireframes.
origen: Ejercicio de diseño para aplicar a un trabajo
periodo: Octubre 2021
portada: ./01-wireframes-calendario.png
portadaAlt: Tres wireframes de myCal. El calendario en la zona horaria de Bogotá, el mismo calendario en hora de Buenos Aires con la hora de cada reunión y la hora local, y el formulario Crear evento con ubicación, horario y recordatorio.
destacado: false
orden: 6
---

## Resumen

Las personas de negocios que viajan por el mundo tienen problemas para organizar y visualizar su agenda por los cambios de zona horaria. myCal es una aplicación móvil que les permite crear y visualizar reuniones en las distintas zonas horarias a las que van a viajar, para llegar a tiempo a cualquier lugar.

Fue un ejercicio de diseño para aplicar a un trabajo. Lo llevé desde la definición del usuario hasta los wireframes: user persona, mapa de empatía, customer journey, benchmarking, sitemap, user flow, arquitectura de información, sketches y wireframes.

## Contexto y problema

**Panorama.** Las personas de negocios que viajan por el mundo tienen problemas para organizar y visualizar su agenda por los cambios de zona horaria.

**Objetivo.** Darles una herramienta para organizar y visualizar su agenda de forma más eficiente, sin importar la zona horaria en la que estén o en la que vayan a estar.

## Investigación

**User persona.** Valentina tiene 28 años, vive en Nueva York y lidera ventas y desarrollo de negocio en una agencia grande. Viaja 3 de cada 4 semanas al mes, casi siempre fuera del país, y usa sobre todo el celular.

- **Quiere:** un calendario inteligente que le asegure llegar siempre a tiempo a sus reuniones.
- **Frustraciones:** mantener su agenda al día para llegar al lugar correcto a la hora correcta, entre viajes a distintas zonas horarias y muchas reuniones en varias ciudades.

![Ficha de user persona de Valentina, 28 años, de Nueva York: bio, dispositivos, lo que quiere y sus frustraciones](./02-user-persona.png)

**Mapa de empatía.** Recogió lo que Valentina dice, piensa, hace y siente. Por ejemplo: "Cuando cambio de zona horaria y miro mi calendario, no entiendo si la hora que veo es la de mi zona actual o la del lugar de la próxima reunión". Se siente abrumada por la cantidad de reuniones y le da vergüenza cancelarlas por falta de organización.

![Mapa de empatía de Valentina con lo que dice, piensa, hace y siente](./03-mapa-de-empatia.png)

**Customer journey.** Escenario: Valentina viajará a dos ciudades con zonas horarias distintas en una semana y quiere planear sus reuniones para que nada se cruce. El recorrido tiene tres etapas: crear una reunión, ver sus reuniones en un nuevo destino y recordarlas.

| Etapa | Dolor | Oportunidad |
| --- | --- | --- |
| Crear un evento | Calcular la hora en la nueva zona horaria donde será la reunión | Crear y ver reuniones en distintas zonas horarias |
| Ver las reuniones en un nuevo destino | Toda la agenda se corre y no recuerda la hora real de sus reuniones | Crear las reuniones desde el inicio con la zona horaria del destino, para que la agenda no se desfase |
| Recordar las reuniones | Tener que usar varias aplicaciones | Personalizar el recordatorio de cada reunión |

![Customer journey map con escenario, expectativas, etapas, puntos de contacto, dolores, emociones y oportunidades de mejora](./04-customer-journey.png)

**Análisis de la competencia.** Comparé Google Calendar, TimeTree y World Time Buddy. Google Calendar permite elegir zona horaria, pero no es evidente. TimeTree crea eventos en otra zona horaria, pero no deja claro cuál está mostrando. World Time Buddy compara zonas horarias, pero no permite crear eventos ni recordatorios. Ninguno deja clara la zona horaria de cada reunión.

![Tabla de benchmarking que compara Google Calendar, TimeTree y World Time Buddy en vista de calendario, creación de eventos, selección de zona horaria, actualización por zona horaria y recordatorios](./05-benchmarking.png)

## Proceso de diseño

**Estructura.** Definí el sitemap con tres ramas desde el calendario (Mi cuenta, Evento y Crear evento), el user flow con cada acción y su alerta de confirmación, y la arquitectura de información de cada pantalla.

![Sitemap: desde el calendario (página de inicio) salen Mi cuenta, Evento y Crear evento](./06-sitemap.png)

![User flow desde el inicio de sesión: calendario, cambio de zona horaria, crear, ver, editar y eliminar eventos, y mi cuenta, con una alerta para cada acción](./07-user-flow.png)

![Arquitectura de información del calendario con el contenido de Eventos, Crear evento, Evento, Información del evento, Editar información y Mi cuenta](./08-arquitectura-informacion.png)

**Sketches.** Bocetos en papel de las pantallas clave: el calendario con el selector de zona horaria o ubicación, la información del evento, la creación o edición de un evento y la sección de cuenta.

![Cuatro bocetos a mano: calendario con selector de zona horaria y eventos, editar evento, sección de creación o edición e información de la cuenta](./09-sketches.png)

## Validación

El alcance del ejercicio llegó hasta los wireframes: no incluyó pruebas con usuarios. El siguiente paso habría sido un test de usabilidad de los flujos principales (crear un evento en otra zona horaria y cambiar la zona del calendario) para comprobar que la hora de destino y la hora local se entienden sin ambigüedad.

## Solución final

Los wireframes ponen la zona horaria en el centro de la experiencia:

- **Selector de zona horaria en el calendario.** Al cambiar la zona horaria o la ubicación, se actualiza todo el calendario. Cada reunión muestra su hora en el destino y la hora local del usuario.
- **Crear eventos con ubicación.** Al elegir la ubicación de la reunión, se define su zona horaria, con horarios sugeridos y un recordatorio configurable.
- **Editar, eliminar y confirmar.** Cada acción termina con un mensaje de confirmación, como "New event created", "Changes saved" o "The event has been deleted".
- **Mi cuenta.** Ubicación principal y formato de hora (12 o 24 horas).

![Editar evento, calendario con el mensaje "Changes saved" y la confirmación para eliminar un evento](./10-wireframes-editar.png)

![Calendario con el mensaje "The event has been deleted" y la pantalla Mi cuenta con nombre, correo, ubicación principal y formato de hora](./11-wireframes-cuenta.png)

## Aprendizajes

- **El problema real era de comprensión, no de funcionalidad.** Los calendarios que analicé ya permitían manejar zonas horarias, pero no dejaban claro qué hora estaban mostrando. Por eso la solución se centra en hacer visible la zona horaria, no en sumar funciones.
- **Una persona bien definida orienta cada decisión.** El escenario concreto de Valentina, dos ciudades con distinta zona horaria en una semana, sirvió de prueba para cada pantalla: si no resolvía ese escenario, no entraba.
- **Mostrar dos referencias de tiempo exige jerarquía.** Poner la hora del destino y la hora local en cada reunión elimina el cálculo mental, pero solo funciona si la jerarquía visual deja claro cuál es cuál.
- **Las confirmaciones generan confianza.** En una herramienta donde un error significa llegar tarde a una reunión, confirmar cada acción (crear, guardar, eliminar) le da seguridad al usuario.
- **Un ejercicio también necesita un siguiente paso.** Al no llegar a pruebas con usuarios, las decisiones quedan como hipótesis. Validar los wireframes habría sido la forma de confirmarlas.
