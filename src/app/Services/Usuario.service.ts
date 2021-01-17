import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class UsuarioService {

    public BaseUrl = environment.Url;
    public headers: HttpHeaders;
    public Token = sessionStorage.getItem('Token');
    public decoded = jwt_decode.default(this.Token); 

    constructor( private _http: HttpClient ){       
        this.headers = new HttpHeaders();
    }

    public GetUsarios(){
        return this._http.get( this.BaseUrl + 'Usuario/' + this.decoded['nameid'], { 
            headers: this.headers.set('Authorization', 'Bearer ' + this.Token )
        });
    }
}