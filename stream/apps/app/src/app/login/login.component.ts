import { Component } from '@angular/core';
import { Credentials } from '../../shared/models/credentials';
import { StorageService } from '../core/services/storage/storage.service';
import { LoginService } from './login.service';

@Component({
  selector: 'stream-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  passwordVisible = false;
  credentials: Credentials = {} as Credentials;
  constructor(private readonly loginService: LoginService,
    private storage : StorageService
    ) {}

  login() {
    this.loginService.login(this.credentials).subscribe((user)=>{
      console.log(user);
      this.storage.set('user',user);
    });
  }

  isValid(){
    return !!this.credentials.username && !!this.credentials.password;
  }
}
