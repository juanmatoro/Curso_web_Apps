// 10. Crea una función que imprima por consola un número al azar entre 0 y 10.

/* 
Math.floor(5.9999999) // 5
Math.trunc(5.999999) // 5
MAth.trunc(5.000001) // 6
Math.round(5.6) //6 
// */

const randomNumber = () => {
    return Math.floor(Math.random() * 11);
};

console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());

console.log('Primero segundo');
function numberRand() {
    return Math.floor(Math.random() * 11);
}

console.log(numberRand());
console.log(numberRand());
console.log(numberRand());
console.log(numberRand());
console.log(numberRand());

console.log('!construimos un bucle con 20 números random:');

// Resolvemos con un bucle
for (let i = 1; i <= 20; i++) {
    console.log(i, randomNumber());
}
