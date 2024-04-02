import { Automovel } from "./Automovel";
import { Terrestre } from "./Terrestre";
import { Transport } from "./Transporte";

let t1: Transport = new Transport(5);

t1.capacidade = 4;

console.log(`A Capacidade do meio de transporte é: ${t1.capacidade}`);

let ter1: Terrestre = new Terrestre(5, 4, 200);

ter1.visualizar();



let aut1: Automovel = new Automovel(5, 4, 250, "azul e branco", 5,"BR5-5A7",6);

aut1.visualizar();

aut1.caulcularIpva(6000);