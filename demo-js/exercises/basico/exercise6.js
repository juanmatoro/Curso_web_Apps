// 6 Crea una función que imprima por consola el string 'Hello World'.
/* const saludar = () => {
  console.log('¡Hola Mundo!');
};
saludar();

 */

function render (text) {
  console.log(text);
}
render('Hello World');

function helloWorld() {
  render('Hello World');
}

helloWorld();

// Otra forma de hacerlo sería:
/*
function helloWorld() {
  console.log('Hello World');
}

helloWorld();
pero esto viola el principio de una sola responsabilidad, ya que la función 
helloWorld hace dos cosas: genera el mensaje y lo imprime. 
Al separar la lógica de renderizado en su propia función, mejoramos la legibilidad y mantenibilidad del código.
*/