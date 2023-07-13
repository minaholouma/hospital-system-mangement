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
     this._AuthService.register(this.loginForm.value).subscribe(
       (res) => {
         console.log('dsttttttttttttttttta ----> ', res)
         if (res) {
           this.Router.navigate(['home']);
         } else {
           alert('ddddddddddddddddddddddddd')
         }
         // else {
         //   this.errors = Response.email.error.message;
         // }
       }, error => {
         alert('welcome user');
         this.Router.navigate(['/home']);
       });
   }
 }
}
