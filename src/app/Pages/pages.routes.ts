import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './Main/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { PorfileComponent } from './porfile/porfile.component';
import { AuthGuard } from '../Guard/auth.guard';

const routes: Routes = [
    { path: 'Main', component: PagesComponent, canActivate:[ AuthGuard ],
        children:[
            { path: 'Dashboard', component: DashboardComponent },
            { path: 'Usuarios', component: UsuariosComponent },
            { path: 'Lista', component: UsuarioListComponent },
            { path: 'Porfile', component: PorfileComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
