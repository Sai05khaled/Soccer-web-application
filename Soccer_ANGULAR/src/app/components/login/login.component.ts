import { Router } from '@angular/router';
import { TokenStorageService } from './../../services/token-storage.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  log: any;
  user: any = {};
  isLoggedIn!: boolean;
  roles: any = [];
  isLoginFailed = false;

  constructor(
    private tokenStorage: TokenStorageService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}
  login() {
    console.log('Here user', this.user);
    this.userService.login(this.user).subscribe((data: any) => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.router.navigate(['/']);
    });
  }
}
