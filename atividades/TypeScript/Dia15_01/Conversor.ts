import { error } from "console";

try{
const resultado = converte(123);

console.log(resultado);
}catch(error){
    if( error instanceof TypeError)
    console.log("TypeError: Tipo de Dado Incorreto")

   else
    console.log("Erro: " + error)
}
export function converte(conteudo: any): string{
    return conteudo.toUpperCase();
} 