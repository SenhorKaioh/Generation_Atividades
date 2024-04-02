const leia = require('readline-sync');

const P = 3.14159;
var raio;

raio = leia.questionFloat("\nDigite o valor do raio: ")
console.log("Area = " , raio * raio * P)