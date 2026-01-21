// 12. Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar.



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