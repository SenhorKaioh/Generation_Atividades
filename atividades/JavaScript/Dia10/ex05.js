const leia = require ('readline-sync');

let soma = 0;
let num = 0;

do{
    num = leia.questionInt("Digite um número: ")
    if(num > 0){
        soma += num;
    }
}while( num != 0);
console.log("A soma dos números positivos é: " + soma);
