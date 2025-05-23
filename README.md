# 🎯 Clasificación de Puntuaciones con el Patrón Strategy en TypeScript

Este proyecto demuestra cómo aplicar el patrón de diseño **Strategy** en TypeScript para resolver un caso común: clasificar una puntuación (`score`) en distintas categorías. Se abordan dos niveles de implementación: uno básico y otro avanzado, orientado a la extensibilidad y mantenibilidad.

- [¿Qué es el Patrón Strategy?](#-qué-es-el-patrón-strategy)
- [Objetivo del Proyecto](#-objetivo-del-proyecto)
- [Implementación Básica](#-implementación-básica)
- [Implementación Avanzada](#-implementación-avanzada)
- [Estrategias Disponibles](#-estrategias-disponibles)
- [Automatización de Estrategias (Opcional)](#-automatización-de-estrategias-opcional)
- [Instalación](#-instalación)
- [Ejecutar los Ejemplos](#-ejecutar-los-ejemplos)
- [Licencia](#-licencia)
---

## 🧠 ¿Qué es el Patrón Strategy?

El patrón Strategy es un patrón de comportamiento que permite encapsular diferentes algoritmos (estrategias) dentro de clases intercambiables. De esta manera, se puede cambiar la lógica de un algoritmo sin modificar el código que lo utiliza.

---

## 🎯 Objetivo del Proyecto

El objetivo es construir un clasificador de puntuaciones que determine una categoría según el valor de entrada. Por ejemplo: una puntuación de 92 podría clasificarse como “Excellent”, o como una letra “A”, según la lógica usada. Gracias al patrón Strategy, estas reglas se pueden aplicar sin modificar el núcleo del clasificador.

---

## 🟢 Implementación Básica

La versión básica está pensada para un solo conjunto de reglas de clasificación. Todas las estrategias están directamente definidas e instanciadas dentro del clasificador. Esta opción es útil para proyectos simples donde no se necesita cambiar la lógica de clasificación en tiempo de ejecución.

**Características:**

- Las estrategias se añaden de forma fija.
- Las reglas están orientadas a categorías como "Excellent", "Good", "Average".
- Es fácil de entender, ideal como punto de partida.

---

## 🔵 Implementación Avanzada

La versión avanzada está diseñada para ser más flexible. Introduce un concepto adicional llamado `StrategySet`, que representa un grupo de estrategias. Esto permite seleccionar entre distintos conjuntos de reglas, como:

- Clasificación estándar (Excellent, Good, Average).
- Clasificación por letras (A, B, C).

**Ventajas:**

- Permite intercambiar fácilmente la lógica de clasificación.
- Separa completamente la lógica del clasificador del contenido de las estrategias.
- Abre la puerta a extender nuevas reglas sin tocar el código existente.

**Casos de uso típicos:**

- Diferentes departamentos con criterios distintos para evaluar rendimientos.
- Cambios dinámicos en el tipo de evaluación (por ejemplo, modo examen vs. modo autoevaluación).

---

## 🧠 Estrategias Disponibles

### 1. Estrategias Estándar

Estas estrategias clasifican en función de tres tramos numéricos:

- `Excellent`: para puntuaciones altas.
- `Good`: para puntuaciones medias.
- `Average`: para puntuaciones menores.

Este es el conjunto usado por defecto en la versión básica.

### 2. Estrategias Tipo Letra

Estas estrategias están orientadas a clasificaciones escolares:

- `A`: puntuaciones sobresalientes.
- `B`: puntuaciones notables.
- `C`: puntuaciones aprobadas.

Estas estrategias están disponibles únicamente en la versión avanzada, y deben seleccionarse al construir el clasificador.

---

## ⚙️ Automatización de Estrategias (Opcional)

Aunque el proyecto actual registra manualmente las estrategias, es posible automatizar este proceso usando librerías de inyección de dependencias como:

- [`tsyringe`](https://github.com/microsoft/tsyringe)
- [`inversify`](https://github.com/inversify/InversifyJS)
- [`reflect-metadata`](https://www.npmjs.com/package/reflect-metadata)

Estas herramientas permiten registrar las estrategias de forma decorativa y resolverlas dinámicamente, evitando tener que listarlas a mano dentro del código. Esto puede ser especialmente útil cuando hay muchas estrategias o se cargan desde módulos externos.

---

## 💾 Instalación

Para instalar las dependencias necesarias, ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm install
```

---

## 🚀 Ejecutar los Ejemplos

Este proyecto incluye dos versiones del clasificador con estrategias diferentes:

- **Versión básica:** Usa un conjunto fijo y simple de estrategias para clasificar puntuaciones en categorías estándar como “Excellent”, “Good” y “Average”. Es ideal para entender el patrón Strategy en su forma más sencilla.

```bash
npm run start:basic
```

- **Versión avanzada:** Permite elegir entre diferentes conjuntos de estrategias para clasificar puntuaciones, incluyendo tanto la clasificación estándar como una basada en letras (A, B, C). Esta versión es más flexible y escalable, perfecta para escenarios donde las reglas pueden variar.

```bash
npm run start:advanced
```

---

## 📝 Licencia

Este proyecto está licenciado bajo la licencia MIT.

En la raíz del repositorio encontrarás un archivo llamado `LICENSE` que contiene el texto completo de la licencia. Este archivo indica los términos bajo los cuales puedes usar, modificar y distribuir este proyecto.

La licencia MIT es muy permisiva, permitiendo el uso libre del código siempre que se mantenga el aviso de copyright y la licencia original.

No se requiere configuración adicional para usar el proyecto bajo esta licencia, simplemente respeta las condiciones indicadas en el archivo `LICENSE`.
