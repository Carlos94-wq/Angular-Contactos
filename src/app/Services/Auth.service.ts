import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserCredentials } from '../Models/UserCredentials.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    
    public BaseUrl = environment.Url;
    public header: HttpHeaders;

    constructor( private _http: HttpClient, private _Router: Router ){
        this.header = new HttpHeaders();
    }

    public VerificarToken():boolean{
        const token = sessionStorage.getItem('Token') || ''; //Extraer token del session storage
        return token.length > 0;
    }

    public Auth(Model: UserCredentials){
       return this._http.post(this.BaseUrl + 'Auth', Model, {headers: this.header.set('Content-Type','application/json')})
       .pipe(
           tap( (resp: any) =>{
              if (resp['data'] === 'Not User found') {
                  console.log(resp)
              }
              else{
                sessionStorage.setItem('Token', resp['data']);
                this._Router.navigate(['/']);
              }
           })
       )
    }

}