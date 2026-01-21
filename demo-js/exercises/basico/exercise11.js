/* 11. Adivina el número: Crea una función que primero guarde en una variable 
un número aleatorio del 1 al 10. Después, pregunte al usuario
a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, 
compare estos dos números. Si los números coinciden, imprime por consola un string indicando 
que el usuario ha acertado, sino, imprime por consola que el usuario 
ha fallado seguido del número correcto */


const randomNumber = () => {
    return Math.floor(Math.random(1.10) * 11);
};

const pairorImpair = () => {
    const random = randomNumber();
    if (random % 2 === 0) {
        console.log(`${random} es par`);
    } else {
        console.log(`${random} es impar`);
    }
};
pairorImpair();