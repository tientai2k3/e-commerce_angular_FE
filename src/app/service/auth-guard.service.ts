import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from './Storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  isLoggedIn: boolean = false;

  constructor(private storageService: StorageService, private router: Router) {}

  canActivate(): boolean {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn == false) {
      this.router.navigate(['/signin']);
      return false;
    }
    return true;
  }
}
