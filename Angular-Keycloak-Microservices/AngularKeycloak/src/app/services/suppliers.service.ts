import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {KeycloakServiceService} from './keycloak-service.service';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private http:HttpClient,private securityService:KeycloakServiceService) { }
  public getSuppliers(){

     return this.http.get("http://localhost:8083/suppliers");
     //return this.http.get("http://localhost:8888/SUPPLIER-SERVICE/suppliers");
  }
}
//,
//       {headers:new HttpHeaders({Authorization:'Bearer '+
//             this.securityService.kc.token})}
