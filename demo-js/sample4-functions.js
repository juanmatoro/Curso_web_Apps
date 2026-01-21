/*
*** FUNCTIONS ***
- Una funcion es un bloque de codigo con nombre que se puede reutilizar, 
con un nombre y que puede recibir parametros y devolver valores. 
- Encapsula una logica concreta para ser reutilizada.
- Recibe argumentos (valores) y devuelve parámetros (variables).
- Deben hacer una sola cosa y hacerla bien.
- Se declaran con la palabra reservada 'function', seguida del nombre de la funcion 
y parentesis que pueden incluir parametros.
- El cuerpo de la funcion va entre llaves {}.
- Se invocan por su nombre seguido de parentesis, pasando los argumentos si es necesario.
- Pueden devolver valores con la palabra reservada 'return'.
- Pueden ser declaradas (function declaration) o expresadas (function expression).
- Pueden ser anonimas (sin nombre) o nombradas.
- Pueden ser funciones flecha (arrow functions) para sintaxis mas concisa.



Ejemplo de funcion expresada:
const restar = function(a, b) {
    return a - b;
};

Ejemplo de funcion flecha:
const multiplicar = (a, b) => a * b;

- Las funciones ayudan a organizar el codigo, mejorar la legibilidad y facilitar el mantenimiento.
- Permiten reutilizar logica comun en diferentes partes del programa.
- Facilitan las pruebas unitarias al aislar funcionalidades concretas.
- Son fundamentales en la programacion modular y orientada a objetos.

*/

// Funtiona expresion
// es una funcion que se delara como una variable

const restar = function(a, b) {
    return a - b;
};

//Ejemplo de funcion declarada:
function sumar(a, b) {
    return a + b;
}

// Arrow function

const add = (a, b) => a + b; // retorno implicito
const sumproduct = (a, b) => {
    const sum = a + b;
    const product = a * b;
    return { sum, product };
}; // retorno explicito de un objeto

// FUNCIONES PURAS
/* Funciones puras, son funciones que no dependen de ningun estado externo,
no tienen efectos secundarios,
 y siempre devuelven el mismo resultado para los mismos argumentos. 

Definición de efectos secundarios (side effects)
Un efecto secundario ocurre cuando una función hace algo más que devolver un valor, es decir, 
cuando afecta o depende de algo fuera de su propio alcance. */
// Ejemplo de funcion pura
const puraSumar = (a, b) => a + b;

// Ejemplo de funcion impura
let contador = 0;
const impuraSumar = (a, b) => {
    contador += 1; // efecto secundario
    return a + b + contador; // depende de estado externo
}; 

// eL AMBITO de una variable es el bloque en el que se declara