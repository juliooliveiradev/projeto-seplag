import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  apiUrl = 'http://localhost:8080/pessoas'; // Atualize com sua URL de backend

  constructor(private http: HttpClient) { }

  // Métodos CRUD
  getAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.apiUrl);
  }

  getById(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.apiUrl}/${id}`);
  }

  create(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.apiUrl, pessoa);
  }

  update(id: number, pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${this.apiUrl}/${id}`, pessoa);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getPessoas(filtro: any): Observable<Pessoa[]> {
    let params = new HttpParams();
    
    // Adicionar filtros se estiverem definidos
    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }
    if (filtro.sobrenome) {
      params = params.set('sobrenome', filtro.sobrenome);
    }
    if (filtro.cpf) {
      params = params.set('cpf', filtro.cpf);
    }
    if (filtro.statusId) {
      params = params.set('statusId', filtro.statusId);
    }
    if (filtro.dataInicio) {
      params = params.set('dataInicio', filtro.dataInicio.toISOString());
    }
    if (filtro.dataFim) {
      params = params.set('dataFim', filtro.dataFim.toISOString());
    }

    return this.http.get<Pessoa[]>(this.apiUrl, { params });
  }
}