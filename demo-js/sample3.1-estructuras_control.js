// Estructuras de control
const randomNumber = () => {
    return Math.floor(Math.random() * 11);
};

const LIMIT = 5;
let i = 0;

/* while (i <= LIMIT) {
    // hacer algo
    console.log(i, randomNumber())
} esto es un bucle infinito */

console.log('Bucle while');
while (i <= LIMIT) {
    // hacer algo
    console.log(i, randomNumber());
    i++;
}
console.log('Bucle for');
for (let i = 0; i <= LIMIT; i++) {
    console.log(i, randomNumber());
}

// If else
let c = randomNumber();
if( c < 5 && c > 0) {
   
    // solo si se cumple la condicion
    console.log(`'${c} es un numero pequeño y positivo`)
} else {
    console.log(`${c} no es un numero pequeño y positivo`);
}

console.log('el numero es',c, 'Fin del programa');