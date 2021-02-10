import { Injectable } from '@angular/core';
import { User, UserRole } from '../../shared/models/user';
import { Credentials } from '../../shared/models/credentials';

import {Observable , of } from 'rxjs'
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private user: User = {
    id: 1,
    name: 'gaurav',
    username: 'grvrjt',
    role:UserRole.Cleint,
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login(credentials: Credentials): Observable<User> {
    return of(this.user);
  }
}