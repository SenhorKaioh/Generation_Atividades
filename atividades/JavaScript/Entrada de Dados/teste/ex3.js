const leia = require("readline-sync");

var a, b, c, d;

a = leia.questionInt("\nDigite o primeiro numero: ", {limitMessage: 'Digite o primeiro numero: '});
b = leia.questionInt("\nDigite o segundo numero: ", {limitMessage: 'Digite o segundo numero: '});
c = leia.questionInt("\nDigite o terceiro numero: ", {limitMessage: 'Digite o terceiro numero: '});
d = leia.questionInt("\nDigite o quarto numero: ", {limitMessage: 'Digite o quarto numero: '});

console.log("Diferenca = " , a * b - c * d);