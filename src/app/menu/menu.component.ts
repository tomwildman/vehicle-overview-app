import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  logout(): void {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }
}
