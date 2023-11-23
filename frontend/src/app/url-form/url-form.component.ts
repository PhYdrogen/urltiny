import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PostResUrl } from '../post-res-url';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-url-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, ClipboardModule],
  templateUrl: './url-form.component.html',
  styleUrl: './url-form.component.css'
})
export class UrlFormComponent {
  output = "";
  longUrl = "";
  submitted = false;
  constructor(private http: HttpClient) {}

  submit(form: NgForm) {
    console.log(form.value);
    this.http.post("http://localhost:8080/api/url", {"longUrl": form.value.longUrl}).subscribe((data => {
      console.log(data);
      let dat = data as PostResUrl;
      this.output = "http://" + "localhost:8080" + "/r/" + dat.shortUrl;
      this.submitted = true;
    }))
  }
  
}
