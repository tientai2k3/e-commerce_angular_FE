import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/service/Storage.service';
import { AuthService } from 'src/app/service/auth.service';
import { Singin } from '../../../interface/IUser';
import { TokenCookiesService } from 'src/app/util/tokenCookies.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  isSuccessful = false;
  isSignUpFailed = false;
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  errorMessage = '';

  loginForm: any = {
    username: null,
    password: null,
  };

  registerForm: any = {
    username: null,
    email: null,
    password: null,
  };

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private tokenService: TokenCookiesService
  ) {}

  ngOnInit(): void {}

  login(): void {
    const { username, password } = this.loginForm;
    console.log(this.loginForm);
    this.authService.login(username, password).subscribe({
      next: (res) => {
        console.log(res);

        this.storageService.saveUser(res);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.tokenService.setToken(res.token);
        this.roles = this.storageService.getUser().roles;
        if (this.roles.includes('ROLE_ADMIN')) {
          this.router.navigate(['/admin']);
        } else if (this.roles.includes('ROLE_USER')) {
          this.router.navigate(['/']);
        }
      },
      error: (err) => {
        console.log(err);
        this.isLoggedIn = false;
        this.isLoginFailed = true;
      },
    });
  }

  register(): void {
    const { username, email, password } = this.registerForm;
    console.log(this.registerForm);
    this.authService.register(username, email, password).subscribe({
      next: (res) => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        alert('Đăng ký thành công');
        this.loginForm.username = username;
        this.loginForm.password = password;
        this.login();
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        alert('Đăng ký thất bại .' + this.errorMessage);
        this.isSignUpFailed = true;
      },
    });
  }

  loginFormChange() {
    document
      .getElementById('container')
      ?.classList.remove('right-panel-active');
  }
  registerFormChange() {
    document.getElementById('container')?.classList.add('right-panel-active');
  }
}
