---
# Fuente: presentación y prototipo de "Gestión de portafolios 2.0". La versión con marca no se enlaza;
# el prototipo enlazado es una copia sin marca en public/prototipos/gestion-portafolios/.
# Caso anonimizado: sin nombre de la empresa, sin cifras absolutas de clientes ni AUM,
# sin nombres de segmentos comerciales. Las capturas salen de una copia del prototipo sin logo ni colores de marca.
# Los Aprendizajes los redactó Claude. La Validación sale de una revisión con agentes sintéticos corrida en oct 2026 (no es la prueba original): revisa ambos y ajústalos a tu voz.
titulo: Gestión de portafolios 2.0
bajada: No es una transacción, es una relación. Un portal de inversión que acompaña al usuario en la decisión sobre su dinero.
rol: Product Designer · Product Owner
resumen: Visión de producto para el portal de gestión de portafolios de una administradora de inversiones en Colombia. Pasar de una ventanilla transaccional a acompañar al usuario en tres movimientos, con base en 6 meses de datos de comportamiento.
origen: Administradora de inversiones y pensiones en Colombia
periodo: Jul – Oct 2026
equipo: Iniciativa en revisión, aún no lanzada
herramientas: [Databricks, Qualtrics]
portada: ./01-composicion-y-comparador.png
portadaAlt: Pantalla de gestión de portafolios con la composición actual a la izquierda y la nueva a la derecha. El comparador muestra que el perfil del usuario es Prudente y la nueva composición es Agresiva, con el rendimiento de 12 meses y una gráfica de tendencia frente a la composición actual.
prototipo: prototipos/gestion-portafolios/index.html
destacado: true
orden: 2
estado: Propuesta y prototipo · Pendiente de pruebas con clientes
---

## Resumen

El portal de gestión de portafolios funcionaba como una ventanilla: dejaba hacer la operación, pero no acompañaba al usuario en la decisión más importante, qué hacer con su dinero. Muy pocos clientes con acceso digital lo usaban, y casi todos los que entraban no volvían.

Con base en 6 meses de comportamiento real del portal y en la voz de los usuarios, propuse una visión de producto en tres movimientos: **Te llamo, Te explico y Te lo hago fácil**. Prototipé el tercero completo, en escritorio y en móvil, y lo sometí a una revisión preliminar con agentes sintéticos que representan los segmentos de clientes.

> No es una transacción. Es una relación.

## Contexto y problema

Antes de hablar de cómo mejorar el portal, había que ver cuántos ni siquiera lo usaban:

- Solo el **7,72%** de los clientes con acceso digital gestionaba su portafolio. El 92,28% podía hacerlo y no lo hacía.
- El canal importaba: quien usaba app y portal era **5,6 veces** más propenso a gestionar su portafolio (26,03%) que quien solo usaba el portal (4,64%). De quienes solo usaban el portal, el 95,36% no gestionaba nada.

Y de quienes sí entraban, la mayoría no se quedaba:

- **96%** visitaba su perfil de inversión una sola vez.
- **59%** gestionaba su portafolio una vez y no volvía.
- **69%** completaba su perfil, pero no actuaba sobre él.

No era desinterés. Nadie los acompañaba entre una operación y la siguiente.

> "No sé si va bien mi portafolio o pudiera mejorar. No entiendo."

> "¿Por qué no hay asesoría después de que uno invierte el dinero?"

## Investigación

Crucé tres fuentes:

- **Datos de comportamiento.** Analicé en Databricks 6 meses de uso del portal: quién gestiona, desde qué canal, dónde abandona y cuántas veces corrige antes de decidir.
- **Voz del usuario.** Comentarios abiertos de una encuesta en Qualtrics.
- **Segmentación conductual.** Cinco segmentos de clientes, desde quienes están empezando a invertir hasta quienes buscan tranquilidad cerca del retiro, cada uno con motivaciones y canales preferidos distintos.

**Lo que encontré en el momento de decidir**

- **No ve cómo le ha ido:** solo 1 de cada 3 revisa su rentabilidad antes de mover su dinero.
- **No hay señal de riesgo:** nada le advierte cuando su composición contradice su perfil.
- **Tantea:** el 82,4% cambia su elección varias veces, probando y corrigiendo a ciegas.
- **No encuentra ayuda:** solo el 0,09% usa la ayuda en la gestión, porque no aparece.
- **Se cae en el celular:** 55% de abandono en móvil, y el 10,7% reinicia el flujo sin completarlo.

> "Para mí es difícil entender los conceptos y moverme por las herramientas."

## Proceso de diseño

Organicé la propuesta como una relación que se construye en tres movimientos, en ciclo: cada vuelta refuerza el vínculo y trae al usuario de regreso.

**I. Te llamo.** La relación empieza cuando la plataforma da el primer paso, con una razón para volver que no sea un trámite.

- El mensaje cambia según el segmento: progreso para quien está empezando, protección para quien piensa en su familia, escenarios con calma para quien se acerca al retiro.
- El canal también se elige por segmento y por urgencia: notificación en la app, correo, WhatsApp o una llamada.
- Cuando los datos detectan fricción, como reintentos o abandono, el canal escala de una notificación a un WhatsApp o a la llamada de un asesor.

**II. Te explico.** Ya que el usuario está ahí, no se le muestran datos: se le explica qué significan para él. Rentabilidad dentro del flujo, riesgo en tiempo real, lenguaje simple y ayuda a un toque.

**III. Te lo hago fácil.** Entender no basta si decidir sigue costando:

1. **Opciones guiadas** según el perfil, con un solo toque y personalizables después.
2. **Comparador entre composición y perfil**, para que la decisión quede alineada con la idoneidad del usuario.
3. **Simulador de escenarios** para proyectar y comparar antes de ejecutar. Hoy los usuarios lo hacían a mano, cambiando y deshaciendo.
4. **Guardar progreso** para retomar donde se quedó.
5. **Móvil rediseñado**, donde hoy se cae la mitad de la gente.

**Escritorio primero.** El 72,75% de los usuarios gestionaba su portafolio desde escritorio, y ese canal concentraba el 86,44% de las interacciones. Por eso el flujo se diseñó y validó ahí primero, y luego se llevó a una versión táctil para móvil.

**Regulación.** El flujo respeta el marco colombiano del deber de asesoría: diferencia el servicio con recomendación profesional del de solo ejecución, aclara que la información mostrada no es una recomendación y pide confirmar cuando la composición se sale del perfil.

## Validación

**Límite de esta revisión:** las puntuaciones y citas de esta sección fueron generadas por agentes de IA, no por clientes. Son hipótesis para preparar pruebas, no evidencia de usabilidad, confianza o satisfacción de usuarios reales.

Se hizo una revisión preliminar con **agentes sintéticos**: cinco paneles, uno por segmento conductual, cada uno con cinco personas simuladas a partir de los perfiles documentados del segmento. Cada persona recorrió el prototipo en escritorio y móvil, comentó cada pantalla y calificó de 1 a 5 la claridad, la confianza y la facilidad. En el panel de quienes están empezando a invertir, la puntuación se calculó con 4 de las 5 personas; la quinta respondió después y confirmó los mismos hallazgos.

| Segmento | Claridad | Confianza | Facilidad |
| --- | --- | --- | --- |
| Están empezando a invertir | 4 | 3 | 3,5 |
| Construyen patrimonio | 3 | 3 | 4 |
| Protegen a su familia | 3 | 3 | 2 |
| Inversionistas con capital | 4 | 4 | 3 |
| Buscan estabilidad, cerca o en el retiro | 2 | 3 | 2 |

**Lo que funcionó**

- **El freno cuando la composición se sale del perfil** fue lo más valorado en los cinco segmentos. Se percibe como protección real, no decorativa.
- **El comparador entre perfil y composición**, con el rendimiento y la tendencia, fue la pieza mejor recibida por quienes ya invierten: "Esto es exactamente lo que hago en otra app antes de mover un peso".
- **Guardar versiones sin cambiar el contrato** baja la presión de decidir de una vez.

**Lo que generó fricción**

- **Quedarse solo en el momento de mayor duda.** Justo cuando la composición se sale del perfil, la única salida es un checkbox. Tres segmentos pidieron hablar con un asesor en ese momento: "'Tú tomas la decisión' suena a que me están dejando sola justo en el momento más importante".
- **La advertencia llega tarde.** El freno aparece al final, al confirmar, y no mientras se reparten los porcentajes.
- **Falta el "Te explico".** El prototipo cubre "Te lo hago fácil", pero no traduce rendimiento y riesgo a lo que le importa a cada persona: la universidad de los hijos, la mesada, el retiro. "Me dan el martillo, pero no me dijeron qué clavo tengo que clavar".
- **Señales que restan confianza:** un contrato duplicado en la lista, criptoactivos mezclados con fondos tradicionales sin una advertencia distinta y el flujo de "todo o nada", sin gestión parcial.
- **Quienes no usan canales digitales no llegarían solos** a este flujo. Para ellos, la entrada tiene que ser el "Te llamo": correo, SMS o la llamada de un asesor, con la opción de que un familiar gestione en su nombre.

**Próxima iteración**

1. Un botón visible de "hablar con un asesor" en el momento de salirse del perfil, además de la confirmación.
2. Mover la advertencia de riesgo al momento de repartir los porcentajes y separar los criptoactivos con su propia advertencia.
3. Conectar la composición con la meta de cada persona y habilitar la gestión parcial y los aportes futuros.
4. Limpiar los datos de prueba antes de probar con clientes.

Los agentes sintéticos sirven para detectar problemas temprano, pero no reemplazan a los usuarios reales. El siguiente paso es probar el flujo con clientes y cruzar los resultados con research cualitativo.

## Solución final

Un [prototipo navegable](../../prototipos/gestion-portafolios/index.html) del movimiento **Te lo hago fácil**, en escritorio y móvil: elegir cómo invertir, elegir el contrato, armar la composición y confirmar.

**Elegir cómo invertir.** El usuario decide si delega la gestión al servicio de asesoría o gestiona por su cuenta con solo ejecución, con la diferencia explicada en lenguaje simple.

![Primer paso del flujo: dos tarjetas, "Automatiza tus inversiones" con recomendación profesional y "Gestiona tus inversiones" con el servicio de solo ejecución](./02-elegir-como-invertir.png)

**Elegir el contrato.** Muestra el saldo disponible de cada contrato y explica por qué algunos no se pueden gestionar en ese momento, por ejemplo porque ya tienen una gestión en curso o no tienen saldo.

![Ventana para elegir el contrato a gestionar, con el saldo disponible de cada uno y dos contratos deshabilitados por tener una gestión en curso o no tener saldo](./03-elegir-contrato.png)

**Una bienvenida guiada.** La primera vez, una introducción corta explica qué puede hacer el usuario en la pantalla.

![Ventana de bienvenida a Gestión de portafolios con el mensaje "Vista clara de tu portafolio" y el botón Siguiente](./04-onboarding.png)

**Armar la composición con el comparador.** A la izquierda, la composición actual; a la derecha, la nueva. Mientras el usuario reparte los porcentajes, ve en tiempo real cómo su composición se compara con su perfil (en el ejemplo, de Prudente a Agresivo), el rendimiento de 12 meses y la tendencia frente a lo que ya tiene, con la aclaración de que es información y no una recomendación.

![Composición actual frente a la nueva. El comparador indica que el perfil es Prudente y la nueva composición es Agresiva, con rendimiento de 18,4% E.A. a 12 meses y una gráfica de tendencia de cada portafolio](./01-composicion-y-comparador.png)

**Guardar el progreso y confirmar.** El usuario puede guardar hasta 4 versiones y volver después sin que cambie su contrato. Si la composición se sale de su perfil, debe confirmar que lo asume antes de continuar.

![Ventana "¿Cómo quieres seguir?" con dos opciones: gestionar con la nueva versión, que pide confirmar que asume una composición fuera de su perfil, o guardar el progreso de sus versiones](./05-guardar-progreso.png)

**Móvil.** El mismo flujo con tarjetas táctiles, la vista Actual / Nueva y el comparador de perfil siempre visible.

![Dos pantallas móviles: la elección entre automatizar o gestionar por tu cuenta, y el armado de la composición con el comparador entre perfil y composición](./06-movil.png)

**El tamaño de la oportunidad.** Los clientes que pueden gestionar su portafolio y no lo hacen son unas 12 veces los que sí lo hacen: un potencial de crecimiento de 12x en adopción. Para lograrlo hace falta integrar en un mismo lugar el segmento, el perfil y la composición real de cada cliente: sin ese dato no existen ni el mensaje segmentado del "Te llamo" ni el comparador del "Te lo hago fácil".

### Siguiente iteración: un ciclo con el asesor (sin testear)

A partir de los hallazgos de la revisión diseñé un journey de dos carriles, **cliente y asesor**, para quienes están empezando a invertir: personas que ya tienen un portafolio, pero no lo revisan por iniciativa propia. No es un rediseño de pantallas: es un ciclo que convierte el silencio ("nunca he entrado a gestionar") en un hábito de revisión mensual. El asesor no es un canal más, es quien cierra el ciclo.

Son 7 momentos que se repiten:

0. **Punto de partida.** El cliente tiene portafolio pero nunca ha gestionado. El sistema empieza a contar desde la vinculación, un dato que hoy no existe.
1. **Día 30 sin gestionar.** El cliente recibe un mensaje corto, sin jerga, con un botón directo a gestionar y un video de 3 pasos si no sabe cómo. El asesor recibe la misma alerta para hacer seguimiento.
2. **Primera gestión.** El cliente decide en lenguaje simple y la tarea del asesor se cierra sola.
3. **"Así te fue este mes".** Un resumen mensual igual suba o baje, para construir hábito y no solo reacción.
4. **Alerta de rendimiento.** Si pierde rentabilidad de forma sostenida y no reacciona, recibe un video educativo, y el asesor recibe la misma alerta. El contenido se marca como informativo, no como asesoría.
5. **Gestiona de nuevo.** Ve cuánto rentó cada portafolio y en qué está invertido, con detalle opcional para quien sabe más.
6. **Vista del asesor.** Un tablero con el estado de toda su cartera (al día, nunca gestionó, perdiendo rentabilidad) para decidir a quién llamar primero.

![Momentos 0 a 2 del journey: punto de partida, día 30 sin gestionar y primera gestión, cada uno con lo que pasa para el cliente, el sistema y el asesor](./07-journey-momentos-0-2.png)

![Momentos 3 a 6 del journey: resumen mensual, alerta de rendimiento con nota regulatoria, nueva gestión y tablero del asesor, con el ciclo que vuelve al momento 3 cada mes](./08-journey-momentos-3-6.png)

Esta iteración responde a lo que pidieron los agentes sintéticos: una persona en el momento de mayor duda, avisos que llegan antes de que el cliente se pierda y lenguaje simple. **No alcanzó a testearse.** Antes de producción hay que validar con negocio y legal la ventana que dispara la alerta de rendimiento, el canal por defecto de cada aviso y el texto final del video.

## Aprendizajes

- **El problema no era la interfaz, era la relación.** Los datos mostraban que la gente entraba una vez y no volvía. Mejorar pantallas no bastaba: había que darles una razón para volver y acompañarlos entre una operación y la siguiente.
- **Cruzar datos y voz del usuario cambia la pregunta.** Databricks mostraba dónde se caían; los comentarios de la encuesta explicaban por qué. Ninguna de las dos fuentes por sí sola habría llevado a "Te llamo, Te explico, Te lo hago fácil".
- **Explicar en el momento vale más que informar.** La señal de riesgo y la rentabilidad sirven cuando aparecen justo en la decisión, no en otra pantalla.
- **La regulación también es diseño.** Diferenciar asesoría de solo ejecución, aclarar que la información no es una recomendación y pedir confirmación fuera de perfil se integraron al flujo como parte de la experiencia, no como texto legal al final.
- **Los agentes sintéticos aceleran, pero no reemplazan.** Permiten probar la propuesta desde varios perfiles en poco tiempo; las decisiones finales todavía necesitan validarse con clientes reales.
