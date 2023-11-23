import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-url-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './url-form.component.html',
  styleUrl: './url-form.component.css'
})
export class UrlFormComponent {
  
  constructor(private http: HttpClient) {}

  submit() {
    this.http.get("http://localhost:8080/api/url").subscribe((data => {
      console.log(data);
    }))
  }
  
}
