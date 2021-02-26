import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KeycloakServiceService} from './keycloak-service.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInteceptorService implements HttpInterceptor{

  constructor(private securityService:KeycloakServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable <HttpEvent<any>> {
   console.log("Http Interceptor..");
   if(!this.securityService.kc.authenticated)return next.handle(req);
   let request=req.clone({
     setHeaders:{
       Authorization:'Bearer '+this.securityService.kc.token
     }
   });
    return next.handle(request);
  }
}
