import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserCredentials } from 'src/app/Models/UserCredentials.model';
import { AuthService } from 'src/app/Services/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public form: FormGroup;
  public Model: UserCredentials;

  public ShowLoader: boolean = false;

  constructor( 
      private _AuthService: AuthService,
      public _Builder: FormBuilder ) { 

        this.Model = new UserCredentials();
        this.form = _Builder.group({
          correo: ['', Validators.required],
          contrasenia: ['', Validators.required]
        })
        
  }

  public Login(){

    this.ShowLoader = true;

    this.Model.Correo = this.form.value.correo;
    this.Model.Contrasenia = this.form.value.contrasenia;

    if (this.form.valid) {
      this.ShowLoader = false;
      this._AuthService.Auth(this.Model).subscribe( resp =>{
        if (resp['data'] === 'Not User found') {
          alert('No se encontraron Usuarios')
        }
      });
    }
    else
    {
      alert('Debes llenar todos los campos');
      this.ShowLoader = false;
    }

  }
}
