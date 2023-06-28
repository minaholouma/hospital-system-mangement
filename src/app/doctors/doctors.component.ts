import { Component } from '@angular/core';
import { DoctorServiceService } from '../service/doctor-service.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent {

      doctors:any[]=[];

  constructor(private serviceDoctor :DoctorServiceService ){

    serviceDoctor.returnData().subscribe((data)=>
      this.doctors=data
    )
  }
}
