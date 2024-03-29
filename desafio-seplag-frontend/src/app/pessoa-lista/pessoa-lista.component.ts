import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';
import { PessoaService } from '../pessoa.service';
import { Status } from '../models/status.model';
import { StatusService } from '../status.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.css']
})
export class PessoaListaComponent implements OnInit {
  pessoas: Pessoa[] = [];
  filtro: any = {
    nome: '',
    sobrenome: '',
    cpf: '',
    statusId: null, // Adiciona a propriedade para armazenar o ID do status selecionado
    dataInicio: null,
    dataFim: null
  };
  statusList: any[] = []; 
  pessoaEmEdicao: Pessoa | null = null;

  constructor(private pessoaService: PessoaService, private statusService: StatusService) { }

  ngOnInit(): void {
    this.carregarPessoas();
    this.carregarStatus();
  }

  carregarPessoas(): void {
    this.pessoaService.getAll().subscribe((pessoas: Pessoa[]) => this.pessoas = pessoas);
  }

  carregarStatus(): void {
    this.statusService.getStatus().subscribe(status => this.statusList = status);
  }

  pesquisar(): void {
    this.pessoaService.getPessoas(this.filtro).subscribe(
      pessoas => this.pessoas = pessoas,
      error => console.error('Erro ao pesquisar pessoas:', error)
    );
  }

  limparFiltro(): void {
    this.filtro = {
      nome: '',
      sobrenome: '',
      cpf: '',
      statusId: null,
      dataInicio: null,
      dataFim: null
    };
    this.carregarPessoas();
  }

  novo(): void {
    // Instanciar uma nova pessoa com valores padrão ou vazios
    this.pessoaEmEdicao = new Pessoa(0, '', '', '',0,new Date());
  }

  editar(pessoa: Pessoa): void {
    this.pessoaEmEdicao = { ...pessoa }; // Copiar os dados da pessoa para evitar alterações diretamente na lista
  }

  salvarPessoa(form: NgForm): void {
    if (form.valid && this.pessoaEmEdicao) { // Verificando se this.pessoaEmEdicao não é nulo
      if (this.pessoaEmEdicao.id) {
        this.pessoaService.update(this.pessoaEmEdicao.id, this.pessoaEmEdicao).subscribe(
          () => {
            console.log('Pessoa atualizada com sucesso!');
            this.carregarPessoas();
          },
          (error: any) => console.error('Erro ao atualizar pessoa:', error)
        );
      } else {
        this.pessoaService.create(this.pessoaEmEdicao).subscribe(
          () => {
            console.log('Nova pessoa criada com sucesso!');
            this.carregarPessoas();
          },
          (error: any) => console.error('Erro ao criar nova pessoa:', error)
        );
      }
      this.pessoaEmEdicao = null;
    }
  }

  cancelarEdicao(): void {
    this.pessoaEmEdicao = null;
  }

  excluir(pessoa: Pessoa): void {
    if (confirm(`Tem certeza que deseja excluir ${pessoa.nome}?`)) {
      this.pessoaService.delete(pessoa.id).subscribe(
        () => {
          this.pessoas = this.pessoas.filter(p => p !== pessoa);
          console.log('Pessoa excluída com sucesso!');
        },
        (        error: any) => console.error('Erro ao excluir pessoa:', error)
      );
    }
  }
}