# Lógica del Juego: Adivina el Número

## Descripción General

Este es un juego interactivo donde el usuario debe adivinar un número secreto del 1 al 10. El programa proporciona pistas al usuario indicando si debe buscar un número mayor o menor, y permite jugar múltiples rondas.

---

## Estructura del Código

### 1. Configuración Inicial
```javascript
import promt from 'prompt-sync';
const prompt = promt();
```
- Importa la librería `prompt-sync` para recibir entrada del usuario
- Crea una instancia del prompt que usaremos en todo el programa

---

## Funciones del Juego

### Funciones de Interacción con el Usuario

#### `sayHello()`
**Propósito:** Dar la bienvenida al usuario (solo se ejecuta una vez)

**Proceso:**
1. Pregunta el nombre del usuario
2. Muestra un mensaje de bienvenida personalizado

```javascript
const sayHello = () => {
    const userName = prompt('Cual es tu nombre? ');
    console.log(`Hola ${userName}, bienvenido al juego de Adivina el Número!`);
};
```

---

#### `getUserNumber()`
**Propósito:** Solicitar un número al usuario

**Retorna:** El número ingresado convertido a entero

**Proceso:**
1. Muestra un prompt pidiendo un número del 1 al 10
2. Convierte la respuesta a un número entero usando `parseInt()`
3. El segundo parámetro `10` indica que es base decimal

```javascript
const getUserNumber = () => {
    return parseInt(prompt('Introduce un numero del 1 al 10: '), 10);
};
```

---

### Funciones de Generación y Validación

#### `generateRandomNumber()`
**Propósito:** Generar el número secreto aleatorio

**Retorna:** Un número entero entre 1 y 10

**Proceso:**
```javascript
Math.random()        // → 0.7654 (número entre 0 y 1)
× 10                 // → 7.654
Math.ceil()          // → 8 (redondea hacia arriba)
```

```javascript
const generateRandomNumber = () => {
    return Math.ceil(Math.random() * 10);
};
```

**Nota:** Usamos `Math.ceil()` (redondeo hacia arriba) en lugar de `Math.floor()` para asegurar que incluimos el 10.

---

#### `isValidNumber(getUserNumber)`
**Propósito:** Validar que el número ingresado sea válido

**Parámetro:** `getUserNumber` - número a validar

**Retorna:** `true` si es válido, `false` si no

**Condiciones de validación:**
- Debe ser un número (no texto)
- Debe estar entre 1 y 10

```javascript
const isValidNumber = (getUserNumber) => {
    const num = Number(getUserNumber);
    return !isNaN(num) && num >= 1 && num <= 10 ? true : false;
};
```

**Ejemplo:**
- `isValidNumber(5)` → `true`
- `isValidNumber("abc")` → `false`
- `isValidNumber(15)` → `false`

---

### Sistema de Mensajes Aleatorios

#### Arrays de Mensajes

##### `tooHighMessages`
Mensajes cuando el usuario ingresa un número mayor al secreto:
```javascript
const tooHighMessages = [
    'El número es menor que {userNumber}. Prueba con uno más bajo.',
    'Te pasaste! El número es más bajo que {userNumber}.',
    'Muy alto! El número secreto es menor que {userNumber}.',
    // ... más mensajes
];
```

##### `tooLowMessages`
Mensajes cuando el usuario ingresa un número menor al secreto:
```javascript
const tooLowMessages = [
    'El número es mayor que {userNumber}. Prueba con uno más alto.',
    'Te quedaste corto! El número es más alto que {userNumber}.',
    'Muy bajo! El número secreto es mayor que {userNumber}.',
    // ... más mensajes
];
```

**Nota:** El placeholder `{userNumber}` se reemplaza con el número real del usuario.

---

#### `getRandomMessage(messages)`
**Propósito:** Seleccionar un mensaje aleatorio de un array

**Parámetro:** `messages` - array con mensajes

**Retorna:** Un mensaje aleatorio del array

**Proceso:**
```javascript
const messages = ['msg1', 'msg2', 'msg3', 'msg4', 'msg5']; // 5 mensajes
Math.random()              // → 0.6543
× messages.length (5)      // → 3.2715
Math.floor()               // → 3
messages[3]                // → 'msg4'
```

```javascript
const getRandomMessage = (messages) => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
};
```

---

#### `getHintMessage(randomNumber, userNumber)`
**Propósito:** Generar una pista personalizada comparando los números

**Parámetros:**
- `randomNumber` - número secreto
- `userNumber` - número ingresado por el usuario

**Retorna:** Mensaje de pista con el número del usuario

**Proceso:**
1. Compara los números
2. Selecciona el array apropiado (tooHighMessages o tooLowMessages)
3. Obtiene un mensaje aleatorio del array seleccionado
4. Reemplaza `{userNumber}` con el número real

```javascript
const getHintMessage = (randomNumber, userNumber) => {
    let selectedMessages;

    if (userNumber > randomNumber) {
        selectedMessages = tooHighMessages;
    } else {
        selectedMessages = tooLowMessages;
    }

    const message = getRandomMessage(selectedMessages);
    return message.replace('{userNumber}', userNumber);
};
```

**Ejemplo:**
- Número secreto: `3`
- Usuario ingresa: `7`
- Proceso: `7 > 3` → selecciona `tooHighMessages`
- Mensaje aleatorio: `"Muy alto! El número secreto es menor que {userNumber}."`
- Resultado: `"Muy alto! El número secreto es menor que 7."`

---

### Funciones de Control del Juego

#### `compareNumbers(randomNumber, userNumber)`
**Propósito:** Comparar números y gestionar intentos hasta acertar

**Parámetros:**
- `randomNumber` - número secreto
- `userNumber` - primer intento del usuario

**Proceso:**
1. Inicia un bucle `while` que continúa hasta que el usuario acierte
2. En cada iteración:
   - **Si el número no es válido:** Muestra error y pide nuevo número
   - **Si acierta:** Muestra felicitación y termina el bucle
   - **Si falla:** Muestra pista y pide nuevo número

```javascript
const compareNumbers = (randomNumber, userNumber) => {
    let shouldContinue = true;
    while (shouldContinue) {
        if (!isValidNumber(userNumber)) {
            console.log('Por favor, introduce un número válido del 1 al 10.');
            userNumber = getUserNumber();
        } else if (userNumber === randomNumber) {
            console.log(`¡Felicidades! Has acertado el número ${randomNumber}.`);
            shouldContinue = false;
        } else {
            const hintMessage = getHintMessage(randomNumber, userNumber);
            console.log(hintMessage);
            userNumber = getUserNumber();
        }
    }
};
```

---

### Sistema de Repetición

#### `askPlayAgain()`
**Propósito:** Preguntar al usuario si quiere jugar otra ronda

**Retorna:** La respuesta del usuario como string

```javascript
const askPlayAgain = () => {
    const response = prompt('¿Quieres jugar de nuevo? (si/no): ');
    return response;
};
```

---

#### `isYesResponse(response)`
**Propósito:** Validar si la respuesta del usuario es afirmativa

**Parámetro:** `response` - respuesta del usuario

**Retorna:** `true` si la respuesta es afirmativa, `false` si no

**Proceso:**
1. Normaliza la respuesta (minúsculas y sin espacios)
2. Define un array con respuestas afirmativas aceptadas
3. Verifica si la respuesta está en el array

```javascript
const isYesResponse = (response) => {
    const normalizedResponse = response.toLowerCase().trim();
    const yesResponses = ['si', 'sí', 's', 'yes', 'y'];
    return yesResponses.includes(normalizedResponse);
};
```

**Ejemplos:**
- `isYesResponse("SI")` → `true`
- `isYesResponse(" sí ")` → `true`
- `isYesResponse("no")` → `false`
- `isYesResponse("YES")` → `true`

---

### Funciones Principales

#### `playOneRound()`
**Propósito:** Ejecutar una sola ronda del juego

**Proceso:**
1. Genera un número aleatorio
2. Pide el primer número al usuario
3. Compara números hasta que acierte

```javascript
const playOneRound = () => {
    const randomNumber = generateRandomNumber();
    let userNumber = getUserNumber();
    compareNumbers(randomNumber, userNumber);
};
```

---

#### `adivinaElNumero()`
**Propósito:** Función principal que controla el flujo completo del juego

**Proceso:**
1. Muestra el saludo (solo una vez)
2. Inicia un bucle `do-while` que:
   - Ejecuta una ronda del juego
   - Pregunta si quiere jugar de nuevo
   - Valida la respuesta
   - Continúa o termina según la respuesta

```javascript
const adivinaElNumero = () => {
    sayHello();
    let playAgain = true;

    do {
        console.log('\n--- Nueva Ronda ---');
        playOneRound();
        const response = askPlayAgain();
        playAgain = isYesResponse(response);

        if (playAgain) {
            console.log('¡Genial! Vamos a jugar otra vez.\n');
        } else {
            console.log('Gracias por jugar. ¡Hasta la próxima!');
        }
    } while (playAgain);
};
```

---

## Flujo del Programa

```
┌─────────────────────────────────────────────┐
│ INICIO: adivinaElNumero()                   │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
         ┌─────────────────────┐
         │ sayHello()          │
         │ (solo una vez)      │
         └──────────┬──────────┘
                    │
                    ▼
         ┌──────────────────────┐
         │ playAgain = true     │
         └──────────┬───────────┘
                    │
                    ▼
         ╔══════════════════════╗
         ║ DO-WHILE LOOP        ║
         ╚══════════╦═══════════╝
                    ║
                    ▼
         ┌──────────────────────┐
         │ Nueva Ronda          │
         └──────────┬───────────┘
                    │
                    ▼
         ┌──────────────────────┐
         │ generateRandomNumber │
         │ (ej: 7)              │
         └──────────┬───────────┘
                    │
                    ▼
         ┌──────────────────────┐
         │ getUserNumber()      │
         │ (ej: 5)              │
         └──────────┬───────────┘
                    │
                    ▼
         ╔══════════════════════╗
         ║ WHILE LOOP           ║
         ║ (hasta acertar)      ║
         ╚══════════╦═══════════╝
                    ║
                    ▼
         ┌──────────────────────┐
         │ ¿Es válido?          │
         └─┬───────────────┬────┘
           │ NO            │ SÍ
           ▼               ▼
    ┌──────────┐   ┌──────────────┐
    │ Error    │   │ ¿Acertó?     │
    │ mensaje  │   └─┬──────────┬─┘
    └────┬─────┘     │ SÍ       │ NO
         │           ▼          ▼
         │    ┌──────────┐  ┌─────────────┐
         │    │¡Acertó!  │  │ Pista       │
         │    │Termina   │  │ getHintMsg()│
         │    │bucle     │  └──────┬──────┘
         │    └────┬─────┘         │
         │         │               ▼
         │         │       ┌───────────────┐
         │         │       │getUserNumber()│
         └─────────┤       └───────┬───────┘
                   │               │
                   └───────────────┘
                           │
                   (repite while)
                           │
                           ▼
                ┌─────────────────────┐
                │ askPlayAgain()      │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │ isYesResponse()     │
                └──┬──────────────┬───┘
                   │ SÍ           │ NO
                   ▼              ▼
            ┌──────────┐    ┌──────────┐
            │playAgain │    │playAgain │
            │= true    │    │= false   │
            └────┬─────┘    └────┬─────┘
                 │               │
                 └───────┬───────┘
                         │
                         ▼
                  ┌─────────────┐
                  │ ¿playAgain? │
                  └──┬───────┬──┘
                     │ true  │ false
                     ▼       ▼
              (repite)  ┌──────────┐
                        │ FIN      │
                        └──────────┘
```

---

## Conceptos de Programación Implementados

### 1. Variables y Constantes
- `const` para valores que no cambian (funciones, arrays)
- `let` para valores que cambian (contadores, banderas)

### 2. Funciones Arrow
```javascript
const functionName = (params) => {
    // código
};
```

### 3. Arrays
- Almacenamiento de múltiples valores relacionados
- Acceso por índice: `array[0]`, `array[1]`

### 4. Métodos de String
- `.toLowerCase()`: Convertir a minúsculas
- `.trim()`: Eliminar espacios
- `.replace()`: Reemplazar texto

### 5. Métodos de Array
- `.includes()`: Verificar si un valor existe en el array
- `.length`: Obtener cantidad de elementos

### 6. Métodos Math
- `Math.random()`: Número aleatorio entre 0 y 1
- `Math.ceil()`: Redondear hacia arriba
- `Math.floor()`: Redondear hacia abajo

### 7. Operadores Lógicos
- `&&`: AND (y)
- `||`: OR (o)
- `!`: NOT (negación)
- `===`: Igualdad estricta
- `!==`: Desigualdad estricta

### 8. Estructuras de Control

#### Condicionales
```javascript
if (condición) {
    // código si es verdadero
} else if (otra condición) {
    // código para otra condición
} else {
    // código si todo es falso
}
```

#### Operador Ternario
```javascript
condición ? valorSiTrue : valorSiFalse
```

#### Bucle While
```javascript
while (condición) {
    // se ejecuta mientras la condición sea true
}
```

#### Bucle Do-While
```javascript
do {
    // se ejecuta AL MENOS UNA VEZ
} while (condición);
```

### 9. Validación de Datos
- Verificar tipos de datos con `isNaN()`
- Convertir tipos con `Number()`, `parseInt()`
- Validar rangos con comparadores

### 10. Patrón de Bandera (Flag Pattern)
```javascript
let shouldContinue = true;
while (shouldContinue) {
    // código
    if (condición) {
        shouldContinue = false; // cambia la bandera para salir
    }
}
```

---

## Mejores Prácticas Aplicadas

### 1. Separación de Responsabilidades
Cada función tiene una única responsabilidad clara:
- `generateRandomNumber()` → solo genera números
- `getUserNumber()` → solo obtiene input
- `compareNumbers()` → solo compara

### 2. Nombres Descriptivos
Los nombres de variables y funciones explican claramente su propósito:
- `tooHighMessages` (no solo `messages`)
- `isValidNumber()` (no solo `validate()`)
- `playAgain` (no solo `flag`)

### 3. Reutilización de Código
`getRandomMessage()` se puede usar con cualquier array de mensajes.

### 4. Validación de Entrada
Siempre validamos los datos del usuario antes de procesarlos.

### 5. Experiencia de Usuario
- Mensajes variados (no repetitivos)
- Pistas útiles (mayor/menor)
- Tolerancia en respuestas (acepta "sí", "SI", "s", etc.)

---

## Ejemplo de Ejecución Completa

```
$ node exercise11_b.js

Cual es tu nombre? Juan
Hola Juan, bienvenido al juego de Adivina el Número!

--- Nueva Ronda ---
Introduce un numero del 1 al 10: 5
El número es mayor que 5. Prueba con uno más alto.
Introduce un numero del 1 al 10: 8
Muy alto! El número secreto es menor que 8.
Introduce un numero del 1 al 10: 6
Te pasaste! El número es más bajo que 6.
Introduce un numero del 1 al 10: 5
El número es mayor que 5. Prueba con uno más alto.
Introduce un numero del 1 al 10: abc
Por favor, introduce un número válido del 1 al 10.
Introduce un numero del 1 al 10: 7
¡Felicidades! Has acertado el número 7.
¿Quieres jugar de nuevo? (si/no): SI
¡Genial! Vamos a jugar otra vez.

--- Nueva Ronda ---
Introduce un numero del 1 al 10: 3
Muy bajo! El número secreto es mayor que 3.
Introduce un numero del 1 al 10: 9
¡Felicidades! Has acertado el número 9.
¿Quieres jugar de nuevo? (si/no): no
Gracias por jugar. ¡Hasta la próxima!
```

---

## Posibles Mejoras Futuras

1. **Contador de intentos**: Mostrar cuántos intentos necesitó
2. **Niveles de dificultad**: Rangos más amplios (1-50, 1-100)
3. **Sistema de puntuación**: Menos intentos = más puntos
4. **Límite de intentos**: Game over después de X intentos
5. **Historial de números**: Mostrar los números ya intentados
6. **Tiempo límite**: Añadir presión de tiempo

---

## Conclusión

Este juego implementa múltiples conceptos fundamentales de programación:
- Estructuras de datos (arrays)
- Control de flujo (bucles, condicionales)
- Funciones y modularización
- Validación de entrada
- Aleatoriedad
- Manipulación de strings

Es un excelente ejercicio para practicar la lógica de programación y crear experiencias interactivas con el usuario.