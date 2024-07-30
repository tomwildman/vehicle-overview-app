import { Component, inject, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserModel } from '../models/user.model';
import { isGoodPassword } from '../password-quality.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {
  }

  credentials = inject(NonNullableFormBuilder).group({
    login: ['', Validators.required],
    password: ['', [Validators.required, isGoodPassword]]
  });

  authenticationFailed = false;

  async ngOnInit() {
    this.userService.userEvents.subscribe((user: UserModel | null) => !!user && this.router.navigateByUrl('/vehicles'));
  }

  authenticate(): void {
    this.authenticationFailed = false;
    const { login, password } = this.credentials.value;

    this.userService.authenticate(login!, password!).subscribe({
      next: () => this.router.navigateByUrl('/vehicles'),
      error: () => (this.authenticationFailed = true)
    });
  }

}
