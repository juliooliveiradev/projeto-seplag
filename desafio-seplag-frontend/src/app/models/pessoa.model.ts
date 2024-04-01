import { Status } from "./status.model";

export class Pessoa {
    id?: number;
    nome?: string;
    sobrenome?: string;
    cpf?: string;
    status?: Status;
    data_cadastro?: Date;
}
