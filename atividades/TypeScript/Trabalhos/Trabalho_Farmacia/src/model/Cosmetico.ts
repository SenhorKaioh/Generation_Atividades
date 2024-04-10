// importação da clase produto
import { Produto } from "./Produto";

// Classe Private importando os atributos da classe produto
export class cosmetico extends Produto{

// Parametros
    private _fragancia: string;

 // Construtor com os atributos da Super Classe Produtos 
	constructor(fragancia: string, id: number, nome: string, tipo: number, preco: number) {
        super(id, nome , tipo, preco)
		this._fragancia = fragancia;
	}
    /**
     * Getter fragancia
     * @return {string}
     */
	public get fragancia(): string {
		return this._fragancia;
	}

    /**
     * Setter fragancia
     * @param {string} value
     */
	public set fragancia(value: string) {
		this._fragancia = value;
	}

    public visualizar(): void{
        super.visualizar()
        console.log(`Fragancia: ${this._fragancia}`)
    }
}