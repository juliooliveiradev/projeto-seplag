import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaCriarComponent } from './pessoa-criar/pessoa-criar.component';
import { PessoaEditarComponent } from './pessoa-editar/pessoa-editar.component';
import { PessoaDetalhesComponent } from './pessoa-detalhes/pessoa-detalhes.component';

const routes: Routes = [
  { path: '', redirectTo: '/pessoas', pathMatch: 'full' }, // Rota padrão
  { path: 'pessoas', component: PessoaListaComponent }, // Rota para listar pessoas
  { path: 'criar-pessoa', component: PessoaCriarComponent }, // Rota para criar pessoa
  { path: 'editar-pessoa/:id', component: PessoaEditarComponent }, // Rota para criar pessoa
  { path: 'detalhes-pessoa/:id', component: PessoaDetalhesComponent }, // Rota para criar pessoa

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
