const leia = require('readline-sync');

let quantidade;
let altura;
let tipo; 
let nome;
let resposta;

quantidade = leia.questionInt("\nDigite um valor inteiro: ", {limitMessage: 'Digite um numero inteiro.'})
console.log("\nO valor inteiro digitado foi: " + quantidade);
altura = leia.questionFloat("\nDigite o valor da altura: ", {limitMessage: 'Digite um número em altura.'})
console.log("\nO valor da altura digitado foi: " + altura);
tipo = leia.keyIn("\nDigite um valor tipo char: ")
console.log("\nO valor char digitado foi: " + tipo);
nome = leia.question("\nDigite o nome: ", {limitMessage: 'Digite um nome.'})
console.log("\nO nome digitado foi: " + nome);
resposta = leia.keyInYNStrict("\nDigite um valor do tipo Boolean: ");
console.log("O valor boolean digitado foi: " + resposta);


// 