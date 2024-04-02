const leia = require ('readline-sync');

let maiorque = 0;
let menorque = 0;
let idade = 0;

while(idade >= 0){
    idade = leia.questionInt("\nDigite uma idade: ", {limitMessage: 'Digite uma idade: '});
    
    if(idade > 0 && idade > 21 ){
        menorque ++;
    }else if(idade > 50 ) {
        maiorque ++;
    }
}
console.log("\nTotal de pessoas menores de 21 anos: " + menorque);
console.log("\nTotal de pessoas maiores de 50 anos: " + maiorque);