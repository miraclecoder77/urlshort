import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://api.shrtco.de/v2/shorten'

  constructor(private http: HttpClient) { }  
  // post request to the api
  createLink(url:string) {
    return this.http.get<any>(this.baseUrl, {
      params: {
        url
      }
    })
    .pipe(map (
      (res) => {
        return res
      }
    ))
  }
  
  // const baseUrl = 'https://api.shrtco.de/v2/shorten'

  // let queryParams = new HttpParams();
  // queryParams = queryParams.append('url',  this.linkInput.value);
  // return this.http.get<string>(baseUrl, {
  //   params:queryParams
  // })

}
