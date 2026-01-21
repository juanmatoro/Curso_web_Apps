// OPERADORES DE ASIGNACIÓN

const x = 33;

// OPERADORES ARITMETICOS
let result;

result = 2 + 2;
result = 2 - 2;
result = 2 * 2;

// oPERADORES DE ASIGNACION + ARITMETICOS
// Operaciones aritméticas estándar

// - suma (+)
// - resta (-)
// - producto (\*)
// - división (/)
// - resto o módulo (%)
// - exponente (\*\*)
// - signo positivo (+)
// - signo negativo (-)
const num = 3;
console.log(num + num); // 6
console.log(num - num); // 0
console.log(num * num); // 9
console.log(num / num); // 1
console.log(num % num); // 0
console.log(num ** num); // 27
console.log(+num); // 3
console.log(-num); // -3

let num1 = 3;
num1++;
console.log(num1); // 4
num1--;
console.log(num1); // 3

// Operador unario 
//a++  incrementa de 1 en 1 
// a-- // decrementa de 1 en 1
//igual que: a = a +1
//igual que:  a+= 1

// Operadores de cadena (string)
const text = "Pepe" +''+ "perez"

// Operadores de comparacion
const foo = 3;
const bar = 4;
// Igualdad
console.log(3 == foo); // true
console.log('3' == foo); // true
console.log(3 == '3'); // true
console.log(foo != 4); // true
console.log(bar != '3'); // true
// Igualdad estricta
console.log(3 === foo); // true
console.log(foo !== '3'); // true
console.log(3 !== '3'); // true

// LOS NaN
const z = NaN
console.log("¿z vale NaN?", isNaN(x))
console.log(typeof x)


// Los 0
const y = 0;
const yy = -0; 
console.log("Comparando los signos del O", yy === y)