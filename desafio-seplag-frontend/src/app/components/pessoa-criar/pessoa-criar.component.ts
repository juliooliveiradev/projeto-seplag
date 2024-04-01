import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../models/pessoa.model';
import { PessoaService } from '../../services/pessoa.service';
import { Status } from '../../models/status.model';
import { StatusService} from '../../services/status.service';


@Component({
  selector: 'app-pessoa-criar',
  templateUrl: './pessoa-criar.component.html',
  styleUrl: './pessoa-criar.component.css'
})
export class PessoaCriarComponent implements OnInit {
  pessoa: Pessoa = {
    nome: '',
    sobrenome: '',
    cpf:'',
    status: undefined, 
    data_cadastro: new Date() 
  };
  statusList: Status[] = [];
  submitted = false;

  constructor(private pessoaService: PessoaService, private statusService: StatusService) {}

  ngOnInit(): void {
    this.carregarStatus();
  }

  carregarStatus(): void {
    this.statusService.getStatus().subscribe({
      next: (statusList: Status[]) => {
        this.statusList = statusList; // Use o operador de atribuição para definir a lista de status
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
  


  savePessoa(): void {
    const data = {
      nome: this.pessoa.nome,
      sobrenome: this.pessoa.sobrenome,
      cpf:this.pessoa.cpf,
      status: this.pessoa.status, 
      data_cadastro: new Date() 
    };

    this.pessoaService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newPessoa(): void {
    this.submitted = false;
    this.pessoa = {
      nome: '',
      sobrenome: '',
      cpf:'',
      status: new Status(),
      data_cadastro: new Date
    };
  }

}
