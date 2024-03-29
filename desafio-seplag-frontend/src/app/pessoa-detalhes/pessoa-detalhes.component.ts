import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../models/pessoa.model';
import { PessoaService } from '../pessoa.service';
import { Status } from '../models/status.model';

@Component({
  selector: 'app-pessoa-detalhes',
  templateUrl: './pessoa-detalhes.component.html',
  styleUrls: ['./pessoa-detalhes.component.css']
})
export class PessoaDetalhesComponent implements OnInit {
  pessoa: Pessoa | undefined; // Definindo como undefined inicialmente

  constructor(private pessoaService: PessoaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id'); // Obter o ID da rota como string

    if (idString) {
      const id = +idString; // Convertendo a string para número
      this.carregarPessoa(id);
    } else {
      console.error('ID da pessoa não encontrado na URL.');
    }
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


  voltar(): void {
    this.router.navigate(['/']); // Redireciona de volta para a lista de pessoas
  }
}

