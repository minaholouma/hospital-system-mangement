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
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(12),
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(20),
      Validators.max(80),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      // Validators.min(11),
      // Validators.max(14),
      // Validators.pattern('^[0-9]'),
    ]),
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

  submit() {
    debugger;
    this.registerForm.markAllAsTouched();

    if (this.registerForm.valid) {
      this._AuthService
        .register(this.registerForm.value)
        .subscribe((Response) => {
          console.log(Response);

          if (Response.message == 'success') {
            this.router.navigate(['login']).then(() => {
              // Optional: You can do something after navigation if needed
            });
          } else {
            this.errors = Response.email.error.message;
          }
        });
    }
  }
}
