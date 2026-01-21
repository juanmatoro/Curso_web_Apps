// 13. Crea una función que reciba un parámetro de tipo string
// e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac').


const revertString = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed);
}
revertString('casa');

