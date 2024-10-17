import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  userService: any;
  router: any;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.minLength(3), Validators.required]],
        lastName: ['', [Validators.minLength(3), Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.minLength(3), Validators.required]],
        cPassword: [''],
      },
      {
        validators: MustMatch('password', 'confirmPwd'),
      }
    );
  }
  signup() {
    if (!this.signupForm.invalid) {
      console.log(this.signupForm.value);
      this.signupForm.value.roles = ['admin'];
      this.userService.signup(this.signupForm.value).subscribe((data: any) => {
        this.router.navigate(['login']);
      });
    }
  }
}
