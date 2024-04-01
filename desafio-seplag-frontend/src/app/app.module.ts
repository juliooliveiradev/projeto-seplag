import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaCriarComponent } from './components/pessoa-criar/pessoa-criar.component';
import { PessoaDetalhesComponent } from './components/pessoa-detalhes/pessoa-detalhes.component';
import { PessoaEditarComponent } from './components/pessoa-editar/pessoa-editar.component';
import { PessoaListaComponent } from './components/pessoa-lista/pessoa-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaCriarComponent,
    PessoaDetalhesComponent,
    PessoaEditarComponent,
    PessoaListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
