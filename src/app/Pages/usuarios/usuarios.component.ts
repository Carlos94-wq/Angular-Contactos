import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioDto } from 'src/app/Models/UsuarioDto';
import { UsuarioService } from 'src/app/Services/Usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  public form: FormGroup;
  public Model: UsuarioDto;

  constructor( private _Builder: FormBuilder, private _Service: UsuarioService ) { 

    this.Model = new UsuarioDto();

    this.form = this._Builder.group({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      contrasenia: new FormControl('', Validators.required),
      confirmar: new FormControl('', Validators.required),
      idRol:new FormControl('', Validators.required)
    })
  }

  public AddUser(){

   if (this.form.invalid) {

    alert('Llena todos los campos');

   } else {
      if (this.form.controls['contrasenia'].value !== this.form.controls['confirmar'].value) {

        alert('Las contrasenias deben ser iguales');
        
      } else {
        this.Model.Nombre = this.form.controls['nombre'].value;
        this.Model.Apellidos = this.form.controls['apellidos'].value;
        this.Model.Correo = this.form.controls['correo'].value;
        this.Model.Contrasenia = this.form.controls['contrasenia'].value;
        this.Model.IdRol = parseInt(this.form.controls['idRol'].value);
  
        this._Service.PostUsuario(this.Model).subscribe(resp =>{
          if (resp['data']) {
            Swal.fire('Datos registrados');
            this.form.reset();
          }
        })
      }
   }
  }
}
