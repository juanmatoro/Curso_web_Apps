// 10. Crea una función que imprima por consola un número al azar entre 0 y 10.
const azarNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};
console.log(`Número aleatorio entre 1 y 10: ${azarNumber()}`);