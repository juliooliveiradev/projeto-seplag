import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../models/pessoa.model';
import { PessoaService } from '../../services/pessoa.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Status } from '../../models/status.model';
import { StatusService } from '../../services/status.service';

@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrl: './pessoa-lista.component.css'
})
export class PessoaListaComponent implements OnInit {
  pessoas?: Pessoa[];
  currentPessoa: Pessoa = {};
  currentIndex = -1;
  filtroForm!: FormGroup;
  statusOptions: Status[] = [];
  

  constructor(private pessoaService: PessoaService,private statusService: StatusService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.retrievePessoas();
    this.carregarStatus();
  }

  initForm(): void {
    this.filtroForm = this.formBuilder.group({
      nome: [''],
      sobrenome: [''],
      cpf: [''],
      statusDescricao: [''],
      dataInicio: [''],
      dataFim: ['']
    });
  }

  retrievePessoas(): void {
    this.pessoaService.getAll().subscribe({
      next: (data) => {
        this.pessoas = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  carregarStatus(): void {
    this.statusService.getStatus().subscribe({
      next: (statusList: Status[]) => {
        this.statusOptions = statusList; // Use o operador de atribuição para definir a lista de status
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
  

  refreshList(): void {
    this.retrievePessoas();
    this.currentPessoa = {};
    this.currentIndex = -1;
  }

  setActivePessoa(pessoa: Pessoa, index: number): void {
    this.currentPessoa = pessoa;
    this.currentIndex = index;
  }

  removeAllPessoas(): void {
    this.pessoaService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  filtrar(): void {
    const filtros = this.filtroForm.value;
    let algumCampoPreenchido = false;
    for (const key in filtros) {
      if (filtros[key]) {
        algumCampoPreenchido = true;
        break;
      }
    }
    if (algumCampoPreenchido) {
      this.pessoaService.filtrarPessoas(filtros).subscribe(data => {
        this.pessoas = data;
      });
    } else {
      this.retrievePessoas(); // Se nenhum campo foi preenchido, recupera todas as pessoas
    }
  }
  
}