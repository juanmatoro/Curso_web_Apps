// 14. Crea una función que imprima por consola la tabla de multiplicar de un número introducido como parámetro.
const printMultiplicationTable = (num) => {
    for (let i = 1; i <= 10; i++) {
        const element = num * i;
        console.log(`${num} x ${i} = ${element}`);
    }
}
// Ejemplo de uso:
console.log("Tabla de multiplicar del 5:");
printMultiplicationTable(5);
console.log("Tabla de multiplicar del 8:");
printMultiplicationTable(8);


// funcion que calcule y retorne la tabla de multiplicar en un array
const getMultiplicationTable = (num) => {
    const result = [];
    for (let i = 1; i <= 10; i++) {
        const mensaje = `${num} x ${i} = ${num * i}`;
        result.push(mensaje);
    }
    return result;
}
const table = getMultiplicationTable(5);
console.table(table);
