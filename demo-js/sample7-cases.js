/* <!-- ### Switch - case

Una estructura similar a la anterior, para el caso en que todas los condiciones se refieran a la misma variable, es el **switch ... case**. -->

 */
const language = 'En';
let greeting;
switch (language) {
  case 'En':
    greeting = 'Hello my friend';
    break;
  case 'Es':
    greeting = 'Hola amigo';
    break;
  case 'Fr':
    greeting = 'Salut mon ami';
    break;
  case 'De':
    greeting = 'Hallo Freund';
    break;
  default:
    greeting = 'Hi';
    break;
}
console.log(greeting);

let x;
console.log(x);

x = null;
console.log(x);