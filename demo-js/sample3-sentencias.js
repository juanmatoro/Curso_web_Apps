// Sentencias y expresiones en JavaScript
// Una sentencia es una instrucción completa que realiza una acción.
// Una expresión es cualquier fragmento de código que produce un valor. Aparecen despues de un operador de asignación o como argumentos en funciones.

let numero = 10; // Declaración y asignación de una variable
console.log('El número es:', numero); // Imprime el valor de la variable
console.log('El número más 5 es:', numero + 5); // Imprime el valor de la variable más 5
console.log(25); // Imprime el número 25

// Expresiones utilizan:
// Datos:
// - Literales: valores fijos como números o cadenas

// - Operadores:
// símbolos que realizan operaciones (e.g., +, -, *, /)
// - Funciones:
// bloques de código que realizan tareas específicas

// STRINGS
// template string
let mensaje = `La suma de ${numero} 
y 15 es ${numero + 15}`;
console.log(mensaje);
let suma = numero + 15;

let name = 'Juan';
let surname = 'Pérez';
let longname = name + '-' + surname;

// interpolar variables: template string
let fullName = `Nombre: ${name}, Apellido: ${surname}`;

console.log('Nombre completo:', fullName);
console.log('Nombre completo (concatenación):', longname);

// NÚMEROS
let a = 5;
let b = 3;

// Operadores aritméticos
let sumaNumeros = a + b; // Suma
let restaNumeros = a - b; // Resta
let multiplicacionNumeros = a * b; // Multiplicación
let divisionNumeros = a / b; // División
let moduloNumeros = a % b; // Módulo

console.log('Suma:', sumaNumeros);
console.log('Resta:', restaNumeros);
console.log('Multiplicación:', multiplicacionNumeros);
console.log('División:', divisionNumeros);
console.log('Módulo:', moduloNumeros);

// Siempre que se usa un operado + entre un string y un número, el número se convierte a string
let mezcla = 'El número es: ' + 10;
console.log(mezcla); // "El número es: 10"

/*  Para evitar esto, se puede usar la función Number() para convertir el string a 
 número se llama casting o coerción explícita solo cambia los valoires mientras esta evaluando la expresion */
let numeroString = '20';
let numeroConvertido = Number(numeroString);
let sumaCorrecta = numeroConvertido + 5;
console.log('Suma correcta:', sumaCorrecta); // 25

const x = '5';
const y = 'siete';

console.log(a * 65); // 325

// Cohertión implícita
let resultado = '5' * 2; // El string '5' se convierte a número automáticamente
console.log('Resultado de la multiplicación:', resultado); // 10
console.log(typeof x);

console.log(typeof y);
console.log(y * 2); // NaN (Not a Number) porque 'siete' no se puede convertir a número

// BOOLEANOS
// coercion de los boleanos
// Valores que se consideran verdaderos (truthy)
console.log('Valores truthy:');
console.log(Boolean(1)); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean('Hola')); // true

// Valores que se consideran falsos (falsy)
console.log('Valores falsy:');
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false y existe
console.log(Boolean('')); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Operaciones con valores especiales
console.log('Operaciones con valores especiales:');
console.log(12 / 0); // Infinity
console.log(0 / 12); // 0
console.log(-12 / 0); // -Infinity
console.log(0 / 0); // NaN

// functions
function mensajeBienvenida(nombre) {
    return `¡Bienvenido, ${nombre}!`;
}

console.log(mensajeBienvenida('Ana')); // ¡Bienvenido, Ana!

function render(text) {
    console.log(text);
}

render(mensajeBienvenida('Luis')); // ¡Bienvenido, Luis!

function sumaDosNumeros(num1, num2) {
    const suma = num1 + num2;
    return suma;
}

render(`El resultado es: ${sumaDosNumeros(7, 3)}`); // 10
