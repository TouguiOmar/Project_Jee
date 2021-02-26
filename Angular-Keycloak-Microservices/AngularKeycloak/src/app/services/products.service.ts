import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {KeycloakServiceService} from './keycloak-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient,private securityService:KeycloakServiceService) {

  }
  public getProduct(){
    return this.http.get("http://localhost:8084/products");
  }
}
