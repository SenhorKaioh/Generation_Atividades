import { Atleta } from "../triatleta_ts/Atleta";

export interface Corredor extends Atleta{
    correr(): void;
}