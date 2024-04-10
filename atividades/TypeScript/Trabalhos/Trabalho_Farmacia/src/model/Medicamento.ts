// importação da clase produto
import { Produto } from "./Produto";

// Classe Private importando os atributos da classe produto
export class Medicamento extends Produto{

// Parametros
    private _generico: string;

 // Construtor com os atributos da Super Classe Produtos 
	constructor(generico: string, id: number, nome: string, tipo: number, preco: number) {
        super(id, nome , tipo, preco)
		this._generico = generico;
	}

    /**
     * Getter generico
     * @return {string}
     */
	public get generico(): string {
		return this._generico;
	}

    /**
     * Setter generico
     * @param {string} value
     */
	public set generico(value: string) {
		this._generico = value;
	}
    public visualizar(): void{
        super.visualizar()
        console.log(`Generico: ${this._generico}`)
    }
}