// 3. Crea una función que cuente
// las vocales que contiene una palabra dada por parámetros.
const countVowels = (word = '') => {
    const vowels = 'aeiouAEIOU'; // definimos las vocales mayúsculas y minúsculas
    let count = 0; // contador de vocales
    for (let char of word) { // recorremos cada caracter de la palabra
        if (vowels.includes(char)) // si el caracter es una vocal
        {
            count++; // incrementamos el contador
        }
    }
    return count;
};

console.log(countVowels('Hola Mundo')); // 4
console.log(countVowels('JavaScript')); // 3
