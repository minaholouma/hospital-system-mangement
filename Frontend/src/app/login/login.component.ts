import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  errors: any = '';

  constructor(public _AuthService: AuthService, private Router: Router) {}
  ngOnInit(): void {}

  get email(): any {
    return this.loginForm.get('email');
  }
  get password(): any {
    return this.loginForm.get('password');
  }
  onSubmit() {
    this.loginForm.markAllAsTouched();
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this._AuthService.login(this.loginForm.value).subscribe((data) => {
        console.log(data);
        
        // if (data.message == 'success') {
          localStorage.setItem('usertoken', data.token);
          this._AuthService.saveuserdata();
          this.Router.navigate(['home']);
        // } else {
        //   this.errors = data.email.error.message;
        // }
      });
    }
  }
}
