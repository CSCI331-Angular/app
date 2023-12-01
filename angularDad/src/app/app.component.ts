// src/app/app.component.ts
import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiResponse: any;

  constructor(private apiService: ApiService) {}
  
  title = 'Your App Title';

  getData(): void {
    this.apiService.getData().subscribe(
      (data) => {
        this.apiResponse = data;
      },
      (error) => {
        console.error('Error fetching API data:', error);
      }
    );
  }
}
