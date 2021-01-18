import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styles: [
  ]
})
export class SideBarComponent implements OnInit {

  constructor(private _AuthService:AuthService) { }

  ngOnInit(): void {
  }

  public Salir(){
    this._AuthService.LogOf();
  }

}
