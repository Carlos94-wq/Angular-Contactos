import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './Auth/auth.routes';
import { PagesRoutingModule } from './Pages/pages.routes';

import { PageNotFoundComponent } from './Shared/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/Main/Dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
