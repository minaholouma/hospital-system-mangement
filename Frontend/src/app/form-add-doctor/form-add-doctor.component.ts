import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-add-doctor',
  templateUrl: './form-add-doctor.component.html',
  styleUrls: ['./form-add-doctor.component.scss']
})
export class FormAddDoctorComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    image: null,
    clinicName: '',
    location: '',
    phoneNumber: '',
    message: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post('https://asd-6gr1.onrender.com/doctors', this.formData).subscribe(response => {
          console.log(response);
        },
        error => {
          console.error(error);
        }
      );
  }

  
}
