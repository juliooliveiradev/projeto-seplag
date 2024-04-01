import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaListaComponent } from './components/pessoa-lista/pessoa-lista.component';
import { PessoaDetalhesComponent } from './components/pessoa-detalhes/pessoa-detalhes.component';
import { PessoaCriarComponent } from './components/pessoa-criar/pessoa-criar.component';

const routes: Routes = [
  { path: '', redirectTo: 'pessoas', pathMatch: 'full' },
  { path: 'pessoas', component: PessoaListaComponent },
  { path: 'pessoas/:id', component: PessoaDetalhesComponent },
  { path: 'add', component: PessoaCriarComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }