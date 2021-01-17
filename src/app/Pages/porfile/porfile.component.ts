import { Component } from '@angular/core';
import { UsuarioDto } from 'src/app/Models/UsuarioDto';
import { UsuarioService } from 'src/app/Services/Usuario.service';

@Component({
  selector: 'app-porfile',
  templateUrl: './porfile.component.html'
})
export class PorfileComponent {

  public User: UsuarioDto;

  constructor( private _Usuario: UsuarioService ) { 

    this.User = new UsuarioDto();

    this._Usuario.GetUsarios().subscribe( (resp: UsuarioDto) =>{
     this.User.Nombre = resp['data'].nombre;
     this.User.Correo = resp['data'].correo;
    })
  }

  public LogUser(){

  }

}
