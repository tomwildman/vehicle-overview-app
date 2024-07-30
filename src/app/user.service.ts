import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, tap } from 'rxjs';
import { UserModel } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // mock values
  readonly LOGIN = 'Driver1!';
  readonly PASSWORD = 'Driver1!';
  readonly JWT = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiJZekV6TUdkb01ISm5PSEJpT0cxaWJEaHlOVEE9IiwicmVzcG9uc2Vf'

  userEvents = new BehaviorSubject<UserModel | null>(null);

  constructor() {
    this.retrieveUser();
  }

  authenticate(login: string, password: string): Observable<UserModel> {
    return new Observable<UserModel>(observer => {
      // call backend API endpoint for authentication
      if (login === this.LOGIN && password === this.PASSWORD) {
        observer.next({
          id: 1,
          login,
          token: this.JWT
        });
      } else {
        observer.error("Authentication failed");
      }
    }).pipe(
      delay(1500),
      tap(user => this.storeLoggedInUser(user))
    );
  }

  private storeLoggedInUser(user: UserModel): void {
    window.localStorage.setItem('user', JSON.stringify(user));
    this.userEvents.next(user);
  }

  retrieveUser(): void {
    const value = window.localStorage.getItem('user');
    if (value) {
      const user = JSON.parse(value) as UserModel;
      this.userEvents.next(user);
    }
  }

  logout(): void {
    this.userEvents.next(null);
    window.localStorage.removeItem('user');
  }
}
