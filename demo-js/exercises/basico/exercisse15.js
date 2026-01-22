// 15. Crea una función que reciba un número por parámetros e imprima por consola si el número recibido es un número primo.
/* const isPrime = (num) => {
    if (num % 2 === 0) {
            console.log(`${num} no es un número primo.`);
            return;
        }else {
    console.log(`${num} es un número primo.`);
};}
isPrime(7);
isPrime(10);
isPrime(13);  */

const isPrime = (n) => {
    let result = true;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            result = false;
            break;
        }
    }
    return result;
};

console.log('El 7 ', isPrime(7) ? 'es primo' : 'no es primo');
console.log('El 8315 ', isPrime(8315) ? 'es primo' : 'no es primo');
