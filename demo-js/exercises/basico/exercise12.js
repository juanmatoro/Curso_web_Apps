// 12. Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar.

// creamos la funcion render
const render = (num) => {
    console.log('El número es:', num);
};

// verificamos si es par o impar y lo pintamos con render
const isEvenOrOdd = (num) => {
    if (num % 2 === 0) {
        render(`${num} es par`);
    } else {
        render(`${num} es impar`);
    }
};
isEvenOrOdd(5);
isEvenOrOdd(8);

// Con else implicito
const isEvenOrOdd2 = (num) => {
    if (num % 2 === 0) {
        render(`${num} es par`);
        return;
    }
    render(`${num} es impar`);
};
isEvenOrOdd2(5);
isEvenOrOdd2(8);


// Con operador ternario 
const isEvenOrOdd3 = (num) => {
    num % 2 === 0 ? render(`${num} es par`) : render(`${num} es impar`);
};
isEvenOrOdd3(5);
isEvenOrOdd3(8);

/* 
// Solución alternativa CON NUMERO ALEATORIO
// creamos el randomNumber
const randomNumber = () => {
    return Math.floor(Math.random(1.1) * 11);
};

// creamos la funcion render
const render = (num) => {
    console.log('El número es:', num);

};

// verificamos si es par o impar y lo pintamos con render
const isEvenOrOdd = () => {
    const random = randomNumber();
    if (random % 2 === 0) {
        render(`${random} es par`);
    } else {
        render(`${random} es impar`);
    }
};
isEvenOrOdd(); */
