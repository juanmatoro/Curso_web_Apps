/* 11. Adivina el número: Crea una función que primero guarde en una variable 
un número aleatorio del 1 al 10. Después, pregunte al usuario
a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, 
compare estos dos números. Si los números coinciden, imprime por consola un string indicando 
que el usuario ha acertado, sino, imprime por consola que el usuario 
ha fallado seguido del número correcto */

//
import promt from 'prompt-sync';
const prompt = promt();

// Creamos el promt y el saludo
const sayHello = () => {
    const userName = prompt('Cual es tu nombre? ');
    console.log(`Hola ${userName}, bienvenido al juego de Adivina el Número!`);
};

// Creamos el numero aleatorio
const generateRandomNumber = () => {
    return Math.ceil(Math.random() * 10);
};

// Pedimos el numero al usuario
const getUserNumber = () => {
    return parseInt(prompt('Introduce un numero del 1 al 10: '), 10);
};

// Arrays con mensajes de pistas
// Mensajes cuando el número secreto es MENOR que el número del usuario
const tooHighMessages = [
    'El número es menor que {userNumber}. Prueba con uno más bajo.',
    'Te pasaste! El número es más bajo que {userNumber}.',
    'Muy alto! El número secreto es menor que {userNumber}.',
    'Baja un poco, el número es menor que {userNumber}.',
    'No, el número es más pequeño que {userNumber}.'
];

// Mensajes cuando el número secreto es MAYOR que el número del usuario
const tooLowMessages = [
    'El número es mayor que {userNumber}. Prueba con uno más alto.',
    'Te quedaste corto! El número es más alto que {userNumber}.',
    'Muy bajo! El número secreto es mayor que {userNumber}.',
    'Sube un poco, el número es mayor que {userNumber}.',
    'No, el número es más grande que {userNumber}.'
];

// Función que selecciona un mensaje aleatorio del array
const getRandomMessage = (messages) => {
    // Math.random() genera un número entre 0 y 1
    // Lo multiplicamos por la longitud del array
    // Math.floor() redondea hacia abajo para obtener un índice válido
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
};

// Función que proporciona pistas al usuario comparando los números
const getHintMessage = (randomNumber, userNumber) => {
    let selectedMessages;

    // Seleccionamos el array de mensajes apropiado según la comparación
    if (userNumber > randomNumber) {
        // El usuario dijo un número muy alto
        selectedMessages = tooHighMessages;
    } else {
        // El usuario dijo un número muy bajo
        selectedMessages = tooLowMessages;
    }

    // Obtenemos un mensaje aleatorio del array seleccionado
    const message = getRandomMessage(selectedMessages);

    // Reemplazamos el placeholder {userNumber} con el número real
    // usando replace() que busca el texto y lo sustituye
    return message.replace('{userNumber}', userNumber);
};

// Validamos el número, que debe ser un numero, no texto y del 1 al 10
const isValidNumber = (getUserNumber) => {
    const num = Number(getUserNumber);
    return !isNaN(num) && num >= 1 && num <= 10 ? true : false;
};

// Función que pregunta al usuario si quiere jugar de nuevo
const askPlayAgain = () => {
    const response = prompt('¿Quieres jugar de nuevo? (si/no): ');
    return response;
};

// Función que valida si la respuesta del usuario es "sí" o "no"
const isYesResponse = (response) => {
    // Convertimos la respuesta a minúsculas para aceptar cualquier combinación
    const normalizedResponse = response.toLowerCase().trim();

    // Array con las posibles respuestas afirmativas
    const yesResponses = ['si', 'sí', 's', 'yes', 'y'];

    // Verificamos si la respuesta está en el array de respuestas afirmativas
    // .includes() devuelve true si encuentra el valor en el array
    return yesResponses.includes(normalizedResponse);
};

// Comparamos los numeros
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
            // Usamos getHintMessage para obtener una pista con el número del usuario
            const hintMessage = getHintMessage(randomNumber, userNumber);
            console.log(hintMessage);
            userNumber = getUserNumber();
        }
    }
};

// Función que ejecuta una sola ronda del juego
const playOneRound = () => {
    const randomNumber = generateRandomNumber();
    let userNumber = getUserNumber();
    compareNumbers(randomNumber, userNumber);
};

// Función principal que controla el flujo completo del juego
const adivinaElNumero = () => {
    // Mostramos el saludo solo una vez al inicio
    sayHello();

    let playAgain = true; // Bandera para controlar el bucle

    // do-while: ejecuta el código al menos una vez y luego verifica la condición
    do {
        console.log('\n--- Nueva Ronda ---');
        playOneRound(); // Ejecutamos una ronda del juego

        // Preguntamos si quiere jugar de nuevo
        const response = askPlayAgain();

        // Actualizamos la bandera según la respuesta
        playAgain = isYesResponse(response);

        if (playAgain) {
            console.log('¡Genial! Vamos a jugar otra vez.\n');
        } else {
            console.log('Gracias por jugar. ¡Hasta la próxima!');
        }
    } while (playAgain); // Continúa mientras playAgain sea true
};

adivinaElNumero();
