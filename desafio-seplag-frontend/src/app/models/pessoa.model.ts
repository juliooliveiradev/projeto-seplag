export class Pessoa {
    id: number;
    nome: string;
    sobrenome: string;
    cpf: string;
    fk_status: number;
    data_cadastro: Date;
  
    constructor(
      id: number,
      nome: string,
      sobrenome: string,
      cpf: string,
      fk_status: number,
      data_cadastro: Date
    ) {
      this.id = id;
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.cpf = cpf;
      this.fk_status = fk_status;
      this.data_cadastro = data_cadastro;
    }
  }
  