// 2. Escribe una función que reciba una palabra y revise si es un palíndromo.

const isPalindrome = (word = '') => { //ponemos el valor por defecto para que reconozca la función aunque no se le pase ningún parámetro
    word = word.replace(/\s+/g, ''); // eliminamos los espacios en blanco si los hubiera
    const newWord = word.split('').reverse().join(''); // separamos la palabra en un array de caracteres, lo invertimos y lo unimos de nuevo
    console.log(newWord);
    return newWord.toLowerCase() === word.toLowerCase(); //comparamos las dos palabras en minúsculas para evitar errores por mayúsculas/minúsculas
};
console.log(isPalindrome('Atar a la rata')); // true
