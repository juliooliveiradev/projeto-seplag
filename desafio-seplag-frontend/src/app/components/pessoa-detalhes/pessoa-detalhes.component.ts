import { Component, Input, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { StatusService } from '../../services/status.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../../models/pessoa.model';
import { Status } from '../../models/status.model';

@Component({
  selector: 'app-pessoa-detalhes',
  templateUrl: './pessoa-detalhes.component.html',
  styleUrls: ['./pessoa-detalhes.component.css']
})
export class PessoaDetalhesComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentPessoa: Pessoa = {
    nome: '',
    sobrenome: '',
    cpf: '',
    status: new Status(),
    data_cadastro: new Date()
  };

  message = '';
  statusOptions: Status[] = [];
  selectedStatus: Status | undefined;

  constructor(
    private pessoaService: PessoaService,
    private statusService: StatusService, // Corrigido para StatusService
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getPessoa(this.route.snapshot.params["id"]);
      this.carregarStatus();
    }
    this.carregarStatus();
  }

  getPessoa(id: string): void {
    this.pessoaService.get(id)
      .subscribe({
        next: (data) => {
          this.currentPessoa = data || {};
          this.selectedStatus = data.status;
        },
        error: (e) => console.error(e)
      });
  }

  toggleEditMode(): void {
    this.viewMode = !this.viewMode;
  }

  cancelEdit(): void {
    this.viewMode = true;
  }

  updatePessoa(): void {
    this.message = '';

    if (!this.currentPessoa) return;

    if (!this.viewMode) {
      this.pessoaService.update(this.currentPessoa.id, this.currentPessoa)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.message = res.message ? res.message : 'This pessoa was updated successfully!';
          },
          error: (e) => console.error(e)
        });
    }
  }

  deletePessoa(): void {
    if (!this.currentPessoa) return;

    this.pessoaService.delete(this.currentPessoa.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/pessoas']);
        },
        error: (e) => console.error(e)
      });
  }

  carregarStatus(): void {
    this.statusService.getStatus()
      .subscribe({
        next: (statusList: Status[]) => {
          this.statusOptions = statusList;
        },
        error: (error: any) => {
          console.error(error);
        }
      });
  }
}
