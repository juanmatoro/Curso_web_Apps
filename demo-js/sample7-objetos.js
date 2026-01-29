// Objetos en JavaScript
/* Un objeto es una estructura de datos
 que permite almacenar múltiples valores (propiedades) y 
 funciones (métodos) bajo un solo nombre. 
Se define con llaves `{}` y sus propiedades se separan por comas. */

const objeto = {}; // Objeto vacío

const persona = {
  nombre: "Manuel",
  edad: 25,
  ciudad: "Madrid",
  saludar: function () {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  },
};
console.log(persona.nombre); // Acceder a una propiedad
persona.saludar(); // Llamar a un método

const usuarios = []; // Array de objetos

// Crear una clase para definir un tipo de objeto
class Usuario {
  constructor(nombre, edad, email, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.ciudad = ciudad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}
const usuario1 = new Usuario("Ana", 30, "ana@example.com", "Barcelona"); // Crear una instancia de Usuario
console.log(usuario1.email); // Acceder a una propiedad
usuario1.saludar(); // Llamar a un método

// Array de objetos
const usuariosArray = [
  new Usuario("Luis", 28, "luis@example.com", "Valencia"),
  new Usuario("Marta", 22, "marta@example.com", "Bilbao"),
  new Usuario("Carlos", 35, "carlos@example.com", "Zaragoza"),
];

// array de arrays Matriz bidimensional
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

matriz[0][0]; // Acceder al elemento en la fila 1, columna 1 (valor 1)
console.log(matriz[1][2]); // Acceder al elemento en la fila 2, columna 3 (valor 6) es la estructura para dibujar estructuras bidimesionales
// Recorrer el array de objetos
usuariosArray.forEach((usuario) => {
  usuario.saludar();
});

const users = ['Pepe', 'Luisa', 'Elena', 'Ernesto'];
const UsersOrdered = users.toSorted(); // Crear una copia ordenada del array original
const usersCopy = [...users]; // Crear una copia del array original
const backend = users.sort(); // Ordenar el array original y su copia la coppia apunta al original
console.log(backend, users);
console.log(UsersOrdered, users);

const newMatrizMal = [...matriz]; // Copia superficial de la matriz bidimensional
const NEWmATRIZ = matriz.structuredClone(); // Clonar la matriz bidimensional