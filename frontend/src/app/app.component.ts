import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  title = 'myApp';

  submit() {
    // this.http.post("https://reqres.in/api/users", {"name": "morpheus","job": "leader"}).subscribe((data => {
    //   console.log(data);
    //   this.title = "yo";
    // }))
    this.http.get("http://localhost:8080/api/url").subscribe((data => {
      console.log(data);
      this.title = "yo";
    }))
  }
}