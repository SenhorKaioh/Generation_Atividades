import { error } from "console"
import { ExcecaoSimples } from "./ExcecaoSimples"

const leia = require('readline-sync')

let loop : boolean = true

do {
    try{

     let idade: number = leia.questionInt("Digite a idade: ")
    validarIdade(idade)
     loop = false

}catch(error){
    if(error instanceof ExcecaoSimples)
    console.error(error.name)
    console.error(error.message)
    console.log("Digite uma idade maior de 18 anos")
}

} while(loop)

function validarIdade (idade : number) : void{

    if(idade < 18)

    throw new Error("A pessoa é menor de idade")

    else 
    console.log("A pessoa é maior de idade!")

}