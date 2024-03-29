import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaCriarComponent } from './pessoa-criar/pessoa-criar.component';
import { PessoaEditarComponent } from './pessoa-editar/pessoa-editar.component';
import { PessoaDetalhesComponent } from './pessoa-detalhes/pessoa-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaListaComponent,
    PessoaCriarComponent,
    PessoaEditarComponent,
    PessoaDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
