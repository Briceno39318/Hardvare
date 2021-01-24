import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HardvareProductsService {

  //This is a problem, the api url might be different. if it is nothing will be displayed. no time to create a fallback
  private API_BASE_URL:String = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getProducts() : Observable<any> {
    return this.http.get(`${this.API_BASE_URL}/products`);
  }

}
