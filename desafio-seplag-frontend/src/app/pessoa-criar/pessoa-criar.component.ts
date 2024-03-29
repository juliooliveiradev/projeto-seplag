import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';
import { PessoaService } from '../pessoa.service';
import { Status } from '../models/status.model';
import { StatusService } from '../status.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pessoa-criar',
  templateUrl: './pessoa-criar.component.html',
  styleUrls: ['./pessoa-criar.component.css']
})
export class PessoaCriarComponent implements OnInit {
  novaPessoa: Pessoa = {} as Pessoa;
  listaStatus: Status[] = []

  constructor(private pessoaService: PessoaService, private statusService: StatusService) { }

  ngOnInit(): void {
  }

criarPessoa(form: NgForm): void {
  this.pessoaService.create(this.novaPessoa).subscribe(
    (response) => {
      console.log('Pessoa criada com sucesso!', response);
      // Limpar o formulário
      form.resetForm();
    },
    (error) => {
      console.error('Erro ao criar pessoa:', error);
      // Adicione o tratamento de erro adequado aqui
    }
  );
}

carregarListaStatus(): void {
  this.statusService.getStatus().subscribe(
    (data: Status[]) => {
      this.listaStatus = data;
    },
    (error) => {
      console.error('Erro ao carregar lista de status:', error);
      // Adicione tratamento de erro adequado aqui, se necessário
    }
  );
}
}
