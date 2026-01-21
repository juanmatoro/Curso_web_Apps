// 7. Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros.

/* const multiplicar = (a, b) => {
  const resultado = a * b;

  console.log(`El resultado de la multiplicación de ${a} y ${b} es: ${resultado}`); 
  
  
};

esto viola el principio de una sola responsabilidad, ya que la función 
multiplicar hace dos cosas: calcula el resultado y lo imprime. 
Al separar la lógica de renderizado en su propia función, mejoramos la legibilidad y mantenibilidad del código.

multiplicar (5, 3); // Llamada de ejemplo a la función
multiplicar (7, 4); // Llamada de ejemplo a la función */

// Función para renderizar el resultado
/* function render(text) {
  console.log(text);
} */

const render = (text) => {
    console.log(text); // Esto es un efecto secundario pero no retorna nada.
}; // 

//Cuando una funcion no retorna nada se dice que su tipo de retorno es 'void'.

const multiplay = (a, b) => {
    const result = a * b;
    return result;
    render(`El resultado de la multiplicación de ${a} y ${b} es: ${result}`);
};

multiplay(5, 3); // Llamada de ejemplo a la función
multiplay(7, 4); // Llamada de ejemplo a la función
