import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/Services/Usuario.service';

import Swal from 'sweetalert2';
import * as jwt_decode from 'jwt-decode';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioQueryFilters } from 'src/app/Models/UserQueryFilters';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent {

  public RoleUser: number;
  public IdUser:number;
  public form: FormGroup;
  public filters: UsuarioQueryFilters = new UsuarioQueryFilters();

  public token = jwt_decode.default(sessionStorage.getItem('Token'));

  public ModelList: any[];

  constructor(private _Service: UsuarioService, private _Builder: FormBuilder) { 

    this.form = this._Builder.group({
      Nombre: new FormControl('', Validators.required),
      Apellidos: new FormControl('', Validators.required),
      Correo: new FormControl('', Validators.required),
      Rol: new FormControl('', Validators.required),
      Estatus: new FormControl('', Validators.required),
    })

    this.IdUser = this.token['nameid'];
    this.RoleUser = this.token['role'];

    this.Buscar();
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

  public Buscar(){

    this.filters.Nombre = this.form.controls['Nombre'].value;
    this.filters.Apellidos = this.form.controls['Apellidos'].value;
    this.filters.Correo = this.form.controls['Correo'].value;
    this.filters.Rol = this.form.controls['Rol'].value;

    this._Service.BuscarUsuarios(this.filters).subscribe((resp: any)=>{
      this.ModelList = resp['data'];
    })
  }
} 
