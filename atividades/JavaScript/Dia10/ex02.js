const leia = require ('readline-sync');

let n;
let par = 0;
let impar = 0;

for( let i = 1; i < 11; i++){
n = leia.questionInt("\nDigite " + i + "° numero: ");
if(n % 2 == 0){
    par ++;
}
else{
    impar++;
}
}
console.log("Total de números pares: " + par);
console.log("Total de números impares: " + impar);
