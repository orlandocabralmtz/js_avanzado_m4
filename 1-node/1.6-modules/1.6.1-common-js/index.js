const operations = require('./functions'); // exporto el archivo y lo guardo en una variable. No lleva la extensión

function main(){
    const operando_one = 56;
    const operando_two = 4;

    const resultSum = operations.sum(operando_one,operando_two);
    const resultSub = operations.substract(operando_one,operando_two);
    const resultMul = operations.multiply(operando_one,operando_two);
    const resultDiv = operations.divideNumbers(operando_one,operando_two);

    console.log('ResultSum: ', resultSum)
    console.log('resultSub: ', resultSub)
    console.log('resultMul: ', resultMul)
    console.log('resultDiv: ', resultDiv)

}



main();