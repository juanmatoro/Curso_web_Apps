/* 11. Adivina el número: Crea una función que primero guarde en una variable 
un número aleatorio del 1 al 10. Después, pregunte al usuario
a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, 
compare estos dos números. Si los números coinciden, imprime por consola un string indicando 
que el usuario ha acertado, sino, imprime por consola que el usuario 
ha fallado seguido del número correcto */

/* 
const randomNumber = () => {
    return Math.floor(Math.random(1.10) * 11);
};

const pairorImpair = () => {
    const random = randomNumber();
    if (random % 2 === 0) {
        console.log(`${random} es par`);
    } else {
        console.log(`${random} es impar`);
    }
};
pairorImpair(); */
import promptSync from 'prompt-sync';
const prompt = promptSync();
/* 
const adivinaElNumero = () => {
    const UserName = prompt('Cual es tu nombre? ');
    console.log(`Hola ${UserName}, bienvenido al juego de Adivina el Número!`);
    const random = Math.ceil(Math.random() * 10);

    while (true) {
        const userNumber = parseInt(prompt('Adivina un número del 1 al 10: '), 10);

        if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
            console.log('Por favor, introduce un número válido del 1 al 10.');
            continue;
        }
        if (userNumber === random) {
            console.log(`¡Felicidades ${UserName}! Has acertado el número ${random}.`);
            return;
        } else {
            console.log('Fallaste. Intenta de nuevo.');
        }
    }
};
adivinaElNumero();

const soloUnaVez = () => {
    const random = Math.ceil(Math.random() * 10);
    const userNumber = parseInt(prompt('Adivina un número del 1 al 10: '), 10);

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
        console.log('Por favor, introduce un número válido del 1 al 10.');
        return;
    }
    if (userNumber === random) {
        console.log(`¡Felicidades! Has acertado el número ${random}.`);
    } else {
        console.log(`Fallaste. El número correcto era ${random}.`);
    }
};
//soloUnaVez();

const adivinaNumero = () => {
    const UserName = prompt('Cual es tu nombre? ');
    console.log(`Hola ${UserName}, bienvenido al juego de Adivina el Número!`);
    const random = Math.ceil(Math.random() * 10);

    let moreAttempts = true;
    while (moreAttempts) {
        const userNumber = parseInt(prompt('Adivina un número del 1 al 10: '), 10);

        if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
            console.log('Por favor, introduce un número válido del 1 al 10.');
            continue;
        }
        if (userNumber === random) {
            console.log(`¡Felicidades ${UserName}! Has acertado el número ${random}.`);
            moreAttempts = false;
        } else {
            console.log('Fallaste. Intenta de nuevo.');
        }
    }
};
adivinaElNumero(); */

// Otra forma de hacerlo es sacando la lógica de adivinar el número a una función aparte
//creando el número aleatorio fuera del bucle
// creando las funciones de validación y comparación aparte
// y llamándola dentro del bucle while hasta que el usuario acierte el número.

//creamos el numero aleatorio fuera del bucle
const randomN = Math.ceil(Math.random() * 10);

// comprobamos si el número es válido
const isValidNum = (num) => {
    if (isNaN(num) || num < 1 || num > 10) {
        console.log('Por favor, introduce un número válido del 1 al 10.');
        return false;
    }
    return true;
};


// Comparamos los números
const compareNumbers = (userNum, randomNum) => {
    if (userNum === randomNum) {
        return true;
    }
    return false;
};


// creamos el bucle principal del juego
const adivinaElNum = () => {
    const UserName = prompt('Cual es tu nombre? ');
    console.log(`Hola ${UserName}, bienvenido al juego de Adivina el Número!`);

    let hasGuessed = false;
    while (!hasGuessed) {
        const userNumber = parseInt(prompt('Adivina un número del 1 al 10: '), 10);

        if (!isValidNum(userNumber)) {
            continue;
        }

        if (compareNumbers(userNumber, randomN)) {
            console.log(`¡Felicidades ${UserName}! Has acertado el número ${randomN}.`);
            hasGuessed = true;
        } else {
            console.log('Fallaste. Intentalo de nuevo.');
        }
    }
};
adivinaElNum();