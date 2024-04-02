import { Queue } from "./Queue";

const leia = require('readline-sync');

export function main(){

let cod : number;

const filaClientes = new Queue<string>();

do{

console.log("|-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--|");
console.log("|                                             -|");
console.log("|                                             -|");
console.log("|        1 - Adicionar Cliente na Fila        -|");
console.log("|        2 - Listar todas os Clientes          |");
console.log("|        3 - Retirar Cliente da Fila          -|");
console.log("|        0 - Sair                             -|");
console.log("|                                             -|");
console.log("|                                             -|");
console.log("|-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--|");
console.log(" ENTRE COM A OPÇÃO DESEJADA: ")

       cod = leia.questionInt("");

       switch(cod){
          case 1: 
            console.log("\nDigite o nome: \n");
            let nomeCliente = leia.question("");
            filaClientes.enqueue(nomeCliente);
            console.log("\nFila: \n")
            filaClientes.printQueue();
            console.log("\nCliente Adicionado!\n");         
            break;
          
          case 2:
            console.log("\nLista de Clientes na Fila: \n");
              filaClientes.printQueue();
            break;

          case 3: 
            console.log("\nFila: \n");
            if (!filaClientes.isEmpty()) {
              const clienteChamado = filaClientes.dequeue(); // Chama o próximo cliente da fila
              console.log(`Cliente ${clienteChamado} foi chamado.`);
          } else {
              console.log("A fila está vazia. Não há clientes para chamar.");
          }
            break;
          case 0:
            console.log("\nO Programa foi Finalizado!");
          break;

          default:
            console.log("\nOpção Inválida\n");  

       }

}while(cod !== 0);

console.log("\nTchau Tchau");
}
main();