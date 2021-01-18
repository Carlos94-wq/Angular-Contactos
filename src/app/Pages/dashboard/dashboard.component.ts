import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/Services/Usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public AllUsers:number;
  public ActiveUser: number;

  constructor( private _service: UsuarioService ) { 
    this._service.GetUsuarios(0).subscribe((resp:any) =>{
      this.AllUsers = resp['data'].length;
    });

    this._service.GetUsuarios(1).subscribe((resp:any) =>{
      this.ActiveUser = resp['data'].length;
    });
  }

}
