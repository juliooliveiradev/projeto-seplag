import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../models/pessoa.model';
import { PessoaService } from '../pessoa.service';
import { Status } from '../models/status.model';

@Component({
  selector: 'app-pessoa-editar',
  templateUrl: './pessoa-editar.component.html',
  styleUrls: ['./pessoa-editar.component.css']
})
export class PessoaEditarComponent implements OnInit {
  pessoa: Pessoa = new Pessoa(0,'','','',new Status(0,''),new Date()); // Instância vazia de Pessoa
  id: number=0;

  constructor(private pessoaService: PessoaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // Obter o ID da rota
    this.carregarPessoa(this.id); // Carregar os dados da pessoa com base no ID
  }

  carregarPessoa(id: number): void {
    this.pessoaService.getById(id).subscribe(
      (pessoa: Pessoa) => {
        this.pessoa = pessoa;
      },
      (error: any) => {
        console.error('Erro ao carregar pessoa:', error);
      }
    );
  }

  salvarEdicao(): void {
    this.pessoaService.update(this.id, this.pessoa).subscribe(
      () => {
        console.log('Pessoa atualizada com sucesso!');
        this.router.navigate(['/']); // Redirecionar para a lista de pessoas após a edição
      },
      (error: any) => {
        console.error('Erro ao atualizar pessoa:', error);
      }
    );
  }

  cancelarEdicao(): void {
    this.router.navigate(['/']); // Cancelar a edição e voltar para a lista de pessoas
  }
}

