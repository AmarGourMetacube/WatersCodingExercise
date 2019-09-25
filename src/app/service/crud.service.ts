import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Product } from "../models/product.model";
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //API Endpoint URL
  SERVER_URL: string;
  constructor(private httpClient: HttpClient) {
    this.SERVER_URL = environment.apiUrl;
   }

  //
  // ─── GET ALL RECORDS API ────────────────────────────────────────────────────────
  //
  public getProducts(){
    return this.httpClient.get(this.SERVER_URL + 'products');
  }

  //
  // ─── UPDATE RECORD ──────────────────────────────────────────────────────────────
  //   
  public updateProduct(product: Product): Observable<void>{
    return this.httpClient.put<void>(`${this.SERVER_URL + 'products'}/${product.id}`,product)
  }

  //
  // ─── UPDATE DATA ON BUY/CANCLE FUNCTIONALITY ──────────────────────────────────────────────────────────────
  //
  changeVisiblity(productList: Product[]){
    let result = productList.find(({ status }) => status == "sold");
    if (result) {
      productList = productList.map(res => {
        if (res.status !== "sold") {
          res.visible = false;
        }
        return res;
      });
    } else {
      productList = productList.map(res => {
        res.visible = true;
        return res;
      });
    }
    return productList;
  }
}
