const leia = require('readline-sync');

let matriz = new Array(3);

for(let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++){
    matriz[indiceLinha] = Array(3);
}

let diagonalPrincipal = "", diagonalSecundaria = "";
let somaDiagonalPrincipal = 0, somaDiagonalSecundaria = 0;


for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++){

    for (let indiceColuna = 0; indiceColuna < matriz[indiceLinha].length; indiceColuna++){

        matriz[indiceLinha][indiceColuna] = leia.questionInt("Digite um numero inteiro: ");


   } 
}   
   console.table(matriz);

   for (let indice = 0; indice < matriz.length; indice++){
    diagonalPrincipal += matriz [indice][indice] + " ";
    diagonalPrincipal += matriz [indice][indice];

    diagonalSecundaria += matriz[indice][matriz.length - 1 - indice] + " ";
    somaDiagonalSecundaria += matriz[indice][matriz.length - 1 - indice];

   }
   console.log(`Elementos da Diagonal Principal: ${diagonalPrincipal}`);
   console.log(`A soma dos elementos da Diagonal Principal: ${somaDiagonalPrincipal}`);
   
   console.log(`Elementos da Diagonal Secundária: ${diagonalSecundaria}`);
   console.log(`A soma dos elementos da Diagonal Secundária: ${somaDiagonalSecundaria}`);
