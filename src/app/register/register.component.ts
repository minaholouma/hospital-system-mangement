import { Component} from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  registerForm:FormGroup= new FormGroup({
    first_name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
    last_name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(12)]),
    age: new FormControl(null,[Validators.required,Validators.min(20),Validators.max(80)]),
  })
errors:any ='';

  constructor(public _AuthService:AuthService ,private Router:Router){}
  ngOnInit(): void {}

  get first_name(): any {
    return this.registerForm.get('first_name');
} 
get last_name(): any {
  return this.registerForm.get('last_name');
}
  submit(registerForm:FormGroup){
    this.registerForm.markAllAsTouched()
    console.log(registerForm.value);
    if(registerForm.valid){
      this._AuthService.register(registerForm.value).subscribe((Response)=>{
        if (Response.message=='success'){
          this.Router.navigate(['login'])
      }
      else{
        this.errors = Response.email.error.message;
      }
    })
      
      
    }

    // if(this.registerForm.valid){
    //  this._AuthService.register(this.registerForm.value).subscribe((Response)=>{
    //   if (Response.message=='success'){
    //     // alert('Registration Successfull')
    //   }
    //   else{
          
    //   }
    //  }) 
    // }
  }

}
