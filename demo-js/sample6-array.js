// Arrays (List) 
/* 
Son una colección de elementos ordenados y accesibles mediante un índice numérico. 
son mutables y pueden contener elementos de diferentes tipos de datos.

 */
const list = ["Patata", 225, "Camion"]; // Creamos un array con diferentes tipos de datos
const list2 = Array(1, 2, 3, 4, 5); // Otra forma de crear un array      
const fruits = ['apple', 'banana', 'orange'];
const contacts = [
    { name: 'John', phone: '123-456-7890' },
    { name: 'Jane', phone: '987-654-3210' },
    { name: 'Doe', phone: '555-555-5555' }
];

// Accessing elements
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // orange

//recorremos el array de las frutas
for (let i = 0; i < fruits.length; i++) {
    const item = fruits[i];
    console.log(`El indice de la fruta es: ${i} y la fruta es un ${fruits[i]}`);
}