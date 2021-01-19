import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Services/Usuario.service';

import Swal from 'sweetalert2';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent {

  public RoleUser: number;
  public IdUser:number;

  public token = jwt_decode.default(sessionStorage.getItem('Token'));

  public ModelList: any[];

  constructor(private _Service: UsuarioService) { 
    this._Service.GetUsuarios(1).subscribe((resp) =>{
      this.ModelList = resp['data'];
    });

    console.log(this.token);
    this.IdUser = this.token['nameid'];
    this.RoleUser = this.token['role'];
  }

  public Delete(id: number, index:number){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._Service.DeleteUsuario(id).subscribe( resp =>{
          if (resp['data']) {
            this.ModelList.splice(index, 1);
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      }
    })   
  }
} 
