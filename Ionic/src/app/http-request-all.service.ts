import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpRequestAllService {

  constructor(private http: HttpClient) { }

  getProductList() {
    return this.http.get('https://fakestoreapi.com/products');
  }
}
