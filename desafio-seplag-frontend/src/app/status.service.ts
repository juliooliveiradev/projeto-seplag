import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from './models/status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private apiUrl = 'http://localhost:8080/status'; // Coloque a URL correta da sua API

  constructor(private http: HttpClient) { }

  getStatus(): Observable<Status[]> {
    return this.http.get<Status[]>(this.apiUrl);
  }

  getStatusById(id: number): Observable<Status> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Status>(url);
  }
}
