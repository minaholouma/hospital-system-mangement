import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../services/doctor.service';
import { IDoctor } from '../service/IDoctor';
import { map } from 'rxjs';
@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss'],
})
export class DoctorDetailsComponent {
  data: any;
  id: String = '';
  doctorDetails!: IDoctor;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _doctorSirvice: DoctorService
  ) {
    _ActivatedRoute.paramMap.subscribe((p: any) => {
      this.id = p.get('id');
    });
    console.log(this.id.toString());
  }
  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this.id ? this.getDoctorDidels() : '';
  }

  getDoctorDidels() {
    this._doctorSirvice.getDoctorById(this.id).subscribe((res: any) => {
      this.doctorDetails = res[0];
    });
  }
}
