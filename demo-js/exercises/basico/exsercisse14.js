// 14. Crea una función que imprima por consola la tabla de multiplicar de un número introducido como parámetro.
const printMultiplicationTable = (num) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
// Ejemplo de uso:
console.log("Tabla de multiplicar del 5:");
printMultiplicationTable(5);
console.log("Tabla de multiplicar del 8:");
printMultiplicationTable(8);
