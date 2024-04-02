const leia = require("readline-sync");

let a, b, c, d, diferenca;

a = leia.questionFloat("\nDigite o primeiro numero: ", {limitMessage: 'Digite o primeiro numero: '});
b = leia.questionFloat("\nDigite o segundo numero: ", {limitMessage: 'Digite o segundo numero: '});
c = leia.questionFloat("\nDigite o terceiro numero: ", {limitMessage: 'Digite o terceiro numero: '});
d = leia.questionFloat("\nDigite o quarto numero: ", {limitMessage: 'Digite o quarto numero: '});

diferenca = (a * b) - (c * d);

console.log("Diferenca: %f" , diferenca);