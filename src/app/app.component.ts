import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'urlShort';
  showEl = false;  
  
  constructor(private api:ApiService,
              private http: HttpClient,
              private _clipboardService: ClipboardService
              ) {
                this._clipboardService.copyResponse$.subscribe(re => {
                  if (re.isSuccess) {
                      alertify.success('copy success!');
                  }
              });
              }

  // input form control
  linkInput = new FormControl('', {validators:Validators.required});
  linkData:any  //bind data from api

  //get the shortend link from the api
  shortenLink() {
    this.api.createLink(this.linkInput.value).subscribe(
      (res) => {
        this.linkData = res
      }
    )
    if (this.linkInput.value == "") {
      this.showEl
    } else {
      this.showEl = !this.showEl;
    }
  }

  ngOnInit() {
    this._clipboardService.copyResponse$.subscribe(re => {
      if (re.isSuccess) {
          alertify.success('copy success!');
      }
  });
  }

}
