import { Stack } from "./Stack";

const leia = require('readline-sync');
 function main(){
let cod :number;
const pilhaLivros = new Stack();

do{

    console.log("|-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--|");
    console.log("|                                             -|");
    console.log("|                                             -|");
    console.log("|        1 - Adicionar Livro na pilha         -|");
    console.log("|        2 - Listar todos os Livros            |");
    console.log("|        3 - Retirar Livro da Pilha           -|");
    console.log("|        0 - Sair                             -|");
    console.log("|                                             -|");
    console.log("|                                             -|");
    console.log("|-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--|");
    console.log(" ENTRE COM A OPÇÃO DESEJADA: ")
    
           cod = leia.questionInt("");
    
           switch(cod){
              case 1: 
                console.log("\nDigite O nome do Livro a ser adicionado: \n");
                let nomeLivro = leia.question("");
                pilhaLivros.push(nomeLivro);
                console.log("\nLivro Adicionado!\n");         
                break;
              
              case 2:
                console.log("\nLivros na pilha:");
                pilhaLivros.printStack();
                break;
                
    
              case 3: 
                console.log("\nPilha: \n");
                if (!pilhaLivros.isEmpty()) {
                  const livroRetirado = pilhaLivros.pop();
                  console.log(`Livro retirado da pilha: ${livroRetirado}`);
              } else {
                  console.log("A pilha está vazia. Não há livros para retirar.");
              }
                break;
              case 0:
                console.log("\nO Programa foi Finalizado!");
              break;
    
              default:
                console.log("\nOpção Inválida\n");  
    
           }
    
    }while(cod !== 0);
    
    console.log("\nO Programa foi Finalizado!");
  }
    main();