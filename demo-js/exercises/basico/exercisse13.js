// 13. Crea una función que reciba un parámetro de tipo string
// e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac').

const reversedString = (str = '') => {
    console.log(str.length );
    console.log(str[0]  );
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result = str[i] + result;
        const element = str[i];
        
    }
    return result;
};

const revertString = (str) => {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    console.log(result);
}
revertString('casa');

reversedString('hola mundo');
console.log(reversedString('casa'));