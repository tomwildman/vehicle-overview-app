import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, first } from 'rxjs';
import { UserService } from './user.service';
import { UserModel } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.userService.userEvents.pipe(map((user: UserModel | null) => {
        if (!user) {
          this.router.navigateByUrl('/login');
        }

        return !!user;
      }), first());
  }
  
}
