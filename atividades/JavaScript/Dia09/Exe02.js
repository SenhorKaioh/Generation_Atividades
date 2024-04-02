const leia = require ('readline-sync')

let n1;

n1 = leia.questionInt("Digite um numero: ", {limitMessage: 'Digite um numero: '});

if(n1 % 2 == 0){
  if(n1 > 0){
console.log("O Número "+ n1 +" é par e positivo");
  }
  else{
    console.log("O Número "+ n1 +" é par e negativo");
  }
}else{
    if(n1 > 0){
        console.log("O Número "+ n1 +" é impar e positivo");
          }
          else{
            console.log("O Número "+ n1 +" é impar e negativo");
}}
