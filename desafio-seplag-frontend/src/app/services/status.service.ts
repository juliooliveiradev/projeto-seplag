import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from '../models/status.model';

const baseUrl = 'http://localhost:8080/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient) { }

  getStatus(): Observable<Status[]> {
    return this.http.get<Status[]>(baseUrl);
  }

  get(id: any): Observable<Status> {
    return this.http.get(`${baseUrl}/${id}`);
  }

}
