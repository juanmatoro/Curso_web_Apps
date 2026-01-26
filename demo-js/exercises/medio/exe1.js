// 1. Crea una función que elimine el primer
//  y último caracter de un string recibido por parámetros.

const removeFirstAndLastCharacters = (str) => {
    return str.slice(1, -1);
};

console.log(removeFirstAndLastCharacters('Hola Mundo')); // "ola Mund"
console.log(removeFirstAndLastCharacters('JavaScript')); // "avaScrip"
