import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from './Auth/auth.module';
import { PagesModule } from './Pages/pages.module';
import { SharedModule } from './Shared/shared.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './Root/app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    PagesModule,
    SharedModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
