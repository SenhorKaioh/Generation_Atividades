const leia = require('readline-sync');

let a;
let b;

a = leia.questionInt("\nDigite o primeiro numero inteiro: ", {limitMessage: 'Digite o primeiro numero: '})
b = leia.questionInt("\nDigite o segundo numero inteiro: ", {limitMessage: 'Digite o segundo numero: '})
console.log("soma: " , a + b);
