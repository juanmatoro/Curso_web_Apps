console.log('Hola, mundo!');
console.log('Aprender JavaScript es divertido.' + '¡Vamos a crear programas!');
console.log('Este es un ejemplo de código en JavaScript. 😊😊😊'); //string
// comentario de una línea
/* comentario de varias lineas
que abarca varias líneas */
console.log('Fin del ejemplo.');
// Tipos de datos en JavaScript
// Primitivos
console.log('Hola'); // cadena de texto (string)
console.log(7); // número entero (number)
console.log(typeof 7); // número entero
console.log(true); // valor booleano (boolean)
console.log(typeof true); // valor booleano
console.log(false); // valor booleano (boolean)
console.log(typeof false); // valor booleano
//
console.log(null); // valor nulo (null)
console.log(typeof null); // valor nulo
console.log(undefined); // valor indefinido (undefined)
console.log(typeof undefined); // valor indefinido
//
console.log(typeof 52345678901234567890n); // BigInt
console.log(typeof Symbol('miSimbolo')); // símbolo

// No primitivos
console.log(typeof { nombre: 'Juan', edad: 30 }); // objeto
console.log(typeof [1, 2, 3, 4, 5]); // arreglo

console.log(() => {}); // función
console.log(typeof (() => {})); // función
