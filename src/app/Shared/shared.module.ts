import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    PageNotFoundComponent,
    BreadcrumsComponent
  ],
  exports:[
    HeaderComponent,
    SideBarComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
