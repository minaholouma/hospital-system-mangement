import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-add-doctor',
  templateUrl: './form-add-doctor.component.html',
  styleUrls: ['./form-add-doctor.component.scss'],
})
export class FormAddDoctorComponent {
  constructor(private http: HttpClient, private Router: Router) {}
  doctorInfo: FormGroup = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
    clinicName: new FormControl(''),
    location: new FormControl(''),
    phone: new FormControl(''),
    price: new FormControl(''),
    about: new FormControl(''),
  });

  get name(): any {
    return this.doctorInfo.get('name');
  }

  get title(): any {
    return this.doctorInfo.get('title');
  }

  get price(): any {
    return this.doctorInfo.get('price');
  }

  get clinicName(): any {
    return this.doctorInfo.get('clinicName');
  }
  get location(): any {
    return this.doctorInfo.get('location');
  }
  get phone(): any {
    return this.doctorInfo.get('phone');
  }
  get about(): any {
    return this.doctorInfo.get('about');
  }

  onSubmit() {
    this.http.post('http://localhost:3000/api/doctor/create', this.doctorInfo.value).subscribe(
      (response) => {
        console.log(response);
        this.Router.navigate(['/home'])
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
