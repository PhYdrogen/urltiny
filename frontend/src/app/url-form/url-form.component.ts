import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PostResUrl } from '../post-res-url';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-url-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatFormFieldModule, MatInputModule, ClipboardModule, MatButtonModule],
  templateUrl: './url-form.component.html',
  styleUrl: './url-form.component.css'
})
export class UrlFormComponent {
  env = import.meta.env.NG_APP_ENV;
  api = import.meta.env.NG_APP_PROXY_API;
  backurl = import.meta.env.NG_APP_PROXY_BACK;
  output = "";
  longUrl = "";
  submitted = false;
  empty = false;
  constructor(private http: HttpClient) {}

  submit(form: NgForm) {
    let url = "";
    console.log(form.value);
    if (form.value.longUrl == "") {
      this.empty = true;
      return;
    }


    if (this.env != "production") {
      url = this.backurl;
    } else {
      url = this.api;
    }
    this.http.post(url + "/api/url", {"longUrl": form.value.longUrl}).subscribe((data => {
      console.log(data);
      let dat = data as PostResUrl;
      this.output =  + "/r/" + dat.shortUrl;
      this.empty = false;
      this.submitted = true;
    }))
  }
  
}
