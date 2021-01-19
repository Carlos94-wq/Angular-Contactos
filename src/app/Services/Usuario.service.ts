import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as jwt_decode from 'jwt-decode';
import { UsuarioDto } from '../Models/UsuarioDto';

@Injectable()
export class UsuarioService {

    public BaseUrl = environment.Url;
    public headers: HttpHeaders;
    public Token = sessionStorage.getItem('Token');
    public decoded = jwt_decode.default(this.Token); 

    constructor( private _http: HttpClient ){       
        this.headers = new HttpHeaders();
    }

    public GetUsario(){
        return this._http.get( this.BaseUrl + 'Usuario/' + this.decoded['nameid'], { 
            headers: this.headers.set('Authorization', 'Bearer ' + this.Token )
        });
    }

    public GetUsuarios(Activo: number){

        if (Activo == 0) {
            return this._http.get( this.BaseUrl + 'Usuario', { 
                headers: this.headers.set('Authorization', 'Bearer ' + this.Token )
            });
        } else {
            return this._http.get( this.BaseUrl + 'Usuario?Estatus=' + Activo, { 
                headers: this.headers.set('Authorization', 'Bearer ' + this.Token )
            });
        }
    }

    public PutUsuario(Model: UsuarioDto){

        Model.Id = parseInt(this.decoded['nameid']);

        return this._http.put(this.BaseUrl + 'Usuario', Model, { 
            headers: this.headers.set('Authorization', 'Bearer ' + this.Token )
        });
    }

    public PostUsuario(Model: UsuarioDto){
        return this._http.post(this.BaseUrl + 'Usuario', Model, { 
            headers: this.headers.set('Authorization', 'Bearer ' + this.Token ) 
        })
    }
}