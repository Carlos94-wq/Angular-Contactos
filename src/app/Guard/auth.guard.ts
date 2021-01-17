import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../Services/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _Auht: AuthService, private _Router: Router){ }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {

    const IsActivated = this._Auht.VerificarToken();

    if ( IsActivated ) {

      return true;

    } else {

      this._Router.navigate(['/Login'])
      return false

    }
  }
  
}
