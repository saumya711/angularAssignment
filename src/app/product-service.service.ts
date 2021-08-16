import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  readonly APIUrl = "http://localhost:5000/api";

  constructor(private http:HttpClient) { }
    
    getCategoryList():Observable<any[]>{
      return this.http.get<any>(this.APIUrl+'/ProductCategory');  
    }

    addCategory(data:any){
      return this.http.post(this.APIUrl+ '/ProductCategory', data);
    }

    updateCategory(data:any){
      return this.http.put(this.APIUrl+ '/ProductCategory', data);
    }

    deleteCategory(data:any){
      return this.http.delete(this.APIUrl+ '/ProductCategory/'+data);
    }

    getProductList():Observable<any[]>{
      return this.http.get<any>(this.APIUrl+'/Products');  
    }

    addProduct(data:any){
      return this.http.post(this.APIUrl+ '/Products', data);
    }

    updateProduct(data:any){
      return this.http.put(this.APIUrl+ '/Products', data);
    }

    deleteProduct(data:any){
      return this.http.delete(this.APIUrl+ '/Products/'+data);
    }

    getAllCategoryNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/Products/GetAllCategoryNames');
    }
  
}
