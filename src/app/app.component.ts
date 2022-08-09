import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'urlShort';
  showEl = false;
  
  constructor(private api:ApiService, private http: HttpClient) {}
  // input form control
  linkInput = new FormControl('', {validators:Validators.required});

  linkData:any
  shortenLink() {
    this.api.createLink(this.linkInput.value).subscribe(
      (res) => {
        this.linkData = res
        this.showEl = true;
      }
    )
  }
  ngOnInit() {

  }

}
