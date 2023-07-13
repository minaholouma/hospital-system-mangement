import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    // birthOfDate: new FormControl(''),
    phoneNumber: new FormControl(''),
  });
  errors: any = '';
  router: any;

  constructor(public _AuthService: AuthService, private Router: Router) {}
  ngOnInit(): void {}

  get firstName(): any {
    return this.registerForm.get('firstName');
  }
  get lastName(): any {
    return this.registerForm.get('lastName');
  }

  onSubmit() {
     this.registerForm.markAllAsTouched();
    console.log(this.registerForm.value);
    
    if (this.registerForm.valid) {
      this._AuthService.register(this.registerForm.value).subscribe(
        (res) => {
          console.log('dsttttttttttttttttta ----> ', res)
          if (res) {
            this.Router.navigate(['login']);
          } else {
            alert('ddddddddddddddddddddddddd')
          }
          // else {
          //   this.errors = Response.email.error.message;
          // }
        }, error => {
          alert('User Already Registered Before, You Can Login');
          this.Router.navigate(['/login']);
        });
    }
  }
}
