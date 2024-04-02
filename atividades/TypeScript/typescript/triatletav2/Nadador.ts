import { Atleta } from "../triatleta_ts/Atleta";

export interface Nadador extends Atleta{
    nadar(): void;
}