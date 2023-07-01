import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.scss'],
})
export class ViewDoctorComponent implements OnInit {
  data: any;
  id: any;
  constructor(private route: ActivatedRoute, private doc: DoctorService) {
    route.paramMap.subscribe((p: any) => {
      this.id = p.get('id');
    });
    console.log(this.id.toString());
  }
  ngOnInit(): void {
    this.doc.getDoctorById(this.id).subscribe((data) => {
      this.data = data;
    });
  }
  /**
   * TODO
   * 1- GET ID FROM ROUTE //ts
   * 2- DO REQUEST TO GET DATA BY ID //ts
   * 3- pind data to HTML/html
   */
}
