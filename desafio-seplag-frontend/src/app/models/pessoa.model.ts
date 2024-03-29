import { Status } from "./status.model";

export class Pessoa {
    id: number;
    nome: string;
    sobrenome: string;
    cpf: string;
    status: Status;
    data_cadastro: Date;
  
    constructor(
      id: number,
      nome: string,
      sobrenome: string,
      cpf: string,
      status: Status,
      data_cadastro: Date
    ) {
      this.id = id;
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.cpf = cpf;
      this.status = status;
      this.data_cadastro = data_cadastro;
    }
  }
  