// 15. Crea una función que reciba un número por parámetros e imprima por consola si el número recibido es un número primo.
const isPrime = (num) => {
    if (num % 2 === 0) {
            console.log(`${num} no es un número primo.`);
            return;
        }else {
    console.log(`${num} es un número primo.`);
};}
isPrime(7);
isPrime(10);
isPrime(13); 