
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com'; // Example API, replace with your API endpoint

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/todos/1`);
  }
}
