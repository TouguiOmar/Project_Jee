import { Injectable } from '@angular/core';
import {KeycloakInstance} from "keycloak-js";
declare var Keycloak:any;
@Injectable({
  providedIn: 'root'
})
export class KeycloakServiceService {

// @ts-ignore
  public kc;

  constructor() {

  }

   init(){
    return new Promise((resolve,reject)=>{
      console.log("security Initialisation");
      this.kc= new Keycloak({
        url:"http://localhost:8080/auth",
        realm:"my-ecom-realm",
        clientId:"AngularProductsApp"

      });

      this.kc.init({
        // onLoad:"login-required"

        onLoad:'check-sso'
// @ts-ignore
      }).then((authenticated)=>{
        // console.log(authenticated);
        // console.log(this.kc.token);
        resolve({auth:authenticated ,token:this.kc.token});
// @ts-ignore
      }).catch(err=>{
        reject(err);
      });
      console.log(this.kc.token);

    })
    }
}
