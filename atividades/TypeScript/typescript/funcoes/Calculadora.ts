import readline = require ('readline-sync');

let numero1: number;
let numero2: number;

numero1 = readline.questionFloat("Digite o primeiro numero: ");
numero2 = readline.questionFloat("Digite o segundo numero: ");

console.log("Soma: " + somar(numero1,numero2));
console.log("Subtrair: " + subtrair(numero1,numero2));
console.log("Multiplicacao: " + multiplicar(numero1,numero2));

let divisao = dividir(numero1,numero2);

if(divisao !== null)
     console.log("Divisao: " + dividir(numero1,numero2));
else
     console.log("Não existe divisao por zero");

about();

function somar(numero1: number, numero2: number): number{
    return numero1 + numero2;
}
function subtrair(numero1: number, numero2: number): number{
    return numero1 - numero2;
}
function multiplicar(numero1: number, numero2: number): number{
    return numero1 * numero2;
}
function dividir(numero1: number, numero2: number): number | null{
    let divisao = numero1 / numero2;
    return (divisao != Infinity ? divisao : null);
}

function about(): void{
    console.log("Feito por Caio");
}