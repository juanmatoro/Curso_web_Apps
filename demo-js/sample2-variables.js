// CamelCase variable naming
// kebab-case variable naming
// snake_case variable naming
// PascalCase variable naming
// UPPERCASE variable naming para constantes

const PI = 3.14; // No se puede plantear modificaciones de una const mayusculas
// PI = 3.1416; // Esto generará un error porque PI es una constante  
const userNumberOfHouse = 25;
// userNumberOfHouse = 30; // Esto generará un error porque userNumberOfHouse es una constante

// Variables using let
let userAge; // Declaración sin inicialización

// Declaracion + asignacion = inicializacion
let userName = 'Alice'; // Deberia ser un const, ya que el mnombre no cambia
let userCountry = 'USA';

// Modifying variables declared with let
console.log(userAge); // undefined
userName = 'Bob';
userAge = 30;
userCountry = 'Canada';
console.log(userName); // 'Bob'
console.log(userAge); // 30
console.log(userCountry); // 'Canada'

// Objetos, son plasticos, se pueden cambiar sus propiedades, son completamente mutables podemos asignar nuevas propiedades
//  y modificar las existentes e incluso eliminar propiedades
let user = {
    name: 'Charlie',
    age: 28,
    country: 'UK',
};
console.log(user); // { name: 'Charlie', age: 28, country: 'UK' }

// Modifying properties of the object
user.name = 'David';
user.age = 35;
user.country = 'Australia';
console.log('Usuario completo: ', user); // { name: 'David', age: 35, country: 'Australia' }
console.log('Nombre de usuario:', user.name); // 'David'

user.job = 'Engineer'; // Adding a new property
console.log('Usuario con nuevo trabajo: ', user); // { name: 'David', age: 35, country: 'Australia', job: 'Engineer' }

 


// Arrays
let numbers = [10, 20, 30, 40, 50];
console.log(numbers); // [10, 20, 30, 40, 50]

// Modifying elements of the array
numbers[0] = 15;
numbers[2] = 35;
console.log(numbers); // [15, 20, 35, 40, 50]
