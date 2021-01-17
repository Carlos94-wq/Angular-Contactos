import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../Services/Usuario.service';

import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagesComponent } from './Main/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PorfileComponent } from './porfile/porfile.component';

@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuariosComponent,
    DashboardComponent,
    PagesComponent,
    PorfileComponent
  ],
  exports:[
    UsuarioListComponent,
    UsuariosComponent,
    DashboardComponent,
    PagesComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService
  ]
})
export class PagesModule { }
