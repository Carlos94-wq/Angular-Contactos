import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Services/Usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent {

  public ModelList: any[];

  constructor(private _Service: UsuarioService) { 
    this._Service.GetUsuarios(1).subscribe((resp) =>{
      this.ModelList = resp['data'];
    })
  }
}
