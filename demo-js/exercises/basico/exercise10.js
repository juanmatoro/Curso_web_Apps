// 10. Crea una función que imprima por consola un número al azar entre 0 y 10.
let semilla = 1;
function aleatorioEntre0y10() {
    semilla = (semilla * 3 + 7) % 11;
    console.log(semilla);
}
console.log("Números aleatorios entre 0 y 10:");
aleatorioEntre0y10(); // Llamada de ejemplo a la función
aleatorioEntre0y10(); // Llamada de ejemplo a la función
aleatorioEntre0y10(); // Llamada de ejemplo a la función
aleatorioEntre0y10(); // Llamada de ejemplo a la función
aleatorioEntre0y10(); // Llamada de ejemplo a la función
aleatorioEntre0y10(); // Llamada de ejemplo a la función
aleatorioEntre0y10(); // Llamada de ejemplo a la función
aleatorioEntre0y10(); // Llamada de ejemplo a la función
aleatorioEntre0y10(); // Llamada de ejemplo a la función
aleatorioEntre0y10(); // Llamada de ejemplo a la función

console.log("Números aleatorios entre 0 y 10 usando Math.random():");
function aleatorio0y10(i = 0) {
    if (i < 10) {
        console.log(Math.floor(Math.random() * 11));
        aleatorioEntre0y10(i + 1);
    }
}
aleatorio0y10();
aleatorio0y10();
aleatorio0y10();