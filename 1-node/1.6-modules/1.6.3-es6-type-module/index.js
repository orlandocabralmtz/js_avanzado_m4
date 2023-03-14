import {sum, substract} from './modules/sum-substract.js' // se sustituye el require por "import", seguido de lo que se esta importando, from - la ruta del archivo 
// import {multiply, divide} from './modules/multipli-divide.js' // esto importa todas las funciones sin tener que especificarlas dentro de llaves
import * as operations from './modules/multipli-divide.js'

function main(){
    const operando_one = 56;
    const operando_two = 4;

    const resultSum = sum(operando_one,operando_two); //funciones que se importaron- Se usa directamente el nombre de la funcion por que fue como se importó 
    const resultSub = substract(operando_one,operando_two);
    
    // const resultMul = multiply(operando_one,operando_two);
    // const resultDiv = divide(operando_one,operando_two);
    const resultMul = operations.multiply(operando_one,operando_two);
    const resultDiv = operations.divide(operando_one,operando_two);

    console.log('ResultSum: ', resultSum)
    console.log('resultSub: ', resultSub)
    console.log('resultMul: ', resultMul)
    console.log('resultDiv: ', resultDiv)

}


//para usar la palabra import y export se necesita el type module dentro del pakage json

main();