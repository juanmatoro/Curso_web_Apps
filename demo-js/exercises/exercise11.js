/* 11. Adivina el número: Crea una función que primero guarde en una variable 
un número aleatorio del 1 al 10. Después, pregunte al usuario
a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, 
compare estos dos números. Si los números coinciden, imprime por consola un string indicando 
que el usuario ha acertado, sino, imprime por consola que el usuario 
ha fallado seguido del número correcto */

const azarNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};
console.log(`Número aleatorio entre 1 y 10: ${azarNumber()}`);
const userGuess = parseInt(prompt("Adivina un número del 1 al 10:"));

const checkGuess = (userNumber) => {
  const randomNumber = azarNumber();
  if (userNumber === randomNumber) {
    console.log("¡Has acertado!");
  } else {
    console.log(`Has fallado. El número correcto era ${randomNumber}.`);
  }
};

checkGuess(userGuess);  
