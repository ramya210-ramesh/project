import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserverService } from './Service/authserver.service';

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {
  constructor(private authServices:AuthserverService,private router:Router){}
  canActivate(): boolean {
    if (this.authServices.token()) {
      return true
    }else{
      this.router.navigate(["/login"])
      return false

    }
  }
  
}
