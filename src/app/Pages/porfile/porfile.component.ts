import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioDto } from 'src/app/Models/UsuarioDto';
import { UsuarioService } from 'src/app/Services/Usuario.service';

import * as jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-porfile',
  templateUrl: './porfile.component.html'
})
export class PorfileComponent {

  public form: FormGroup;
  public User: UsuarioDto;
  public CurrentUser: string;
  public CurrentEmail: string
  public token = jwt_decode.default(sessionStorage.getItem('Token'));

  constructor( private _Usuario: UsuarioService, private builder: FormBuilder ) { 

    this.User = new UsuarioDto();

    this._Usuario.GetLogUser(this.token['nameid']).subscribe( (resp: UsuarioDto) => {

     this.CurrentUser = resp['data'].nombre;
     this.CurrentEmail = resp['data'].correo;

     this.form = this.builder.group({
        nombre: [ resp['data'].nombre, Validators.required],
        apellidos: [ resp['data'].apellidos, Validators.required],
        correo: [ resp['data'].correo, Validators.required],
        contrasenia: [ resp['data'].contrasenia, Validators.required]
      });

    }); 
  }

  public ActualizarUsuario(){

    this.User.Id = parseInt(this.token['nameid']);
    this.User.Nombre = this.form.value.nombre;
    this.User.Apellidos = this.form.value.apellidos;
    this.User.Contrasenia = this.form.value.contrasenia;

    this._Usuario.PutUsuario(this.User).subscribe( ((resp:any) => {
      if (resp['data']) {
        Swal.fire('Perfil Actualizado')
      }
    }));
  }
}
