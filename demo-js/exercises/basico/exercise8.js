// 8. Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro.

const elevarAlCubo = (base) => {
    // const resultado = base ** 3;
    const result = Math.pow(base, 3);
    return result;
};

elevarAlCubo(2); // Llamada de ejemplo a la función
elevarAlCubo(4); // Llamada de ejemplo a la función
elevarAlCubo(5); // Llamada de ejemplo a la función

const square = (x) => x * x; // Retorno implicito

console.log('Funcion pow');
const pow = (base, exp) => {
    const result = base ** exp;
    const mens = `El resultado de elevar ${base} a la ${exp} es: ${result}`;
    console.log(mens); // Efecto secundario rompe el principio de funcion pura
    return result;
};

pow(2, 3); // 8

// 56 al cubo elevado al cuadrado
