import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDoctor } from '../service/IDoctor';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DoctorService } from '../services/doctor.service';



interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
 tap=1;
 countries = [
  { name: 'Australia', code: 'AU' },
  { name: 'Brazil', code: 'BR' },
  { name: 'China', code: 'CN' },
  { name: 'Egypt', code: 'EG' },
  { name: 'France', code: 'FR' },
  { name: 'Germany', code: 'DE' },
  { name: 'India', code: 'IN' },
  { name: 'Japan', code: 'JP' },
  { name: 'Spain', code: 'ES' },
  { name: 'United States', code: 'US' }
];

 selectedCountry: string | undefined;

 cities: City[] | undefined;
 

 selectedCity: City | undefined;
//  ngOnInit() {
//      this.cities = [
//          { name: 'New York', code: 'NY' },
//          { name: 'Rome', code: 'RM' },
//          { name: 'London', code: 'LDN' },
//          { name: 'Istanbul', code: 'IST' },
//          { name: 'Paris', code: 'PRS' }
//      ];
//  }

 doctors: IDoctor[] = [];
 listDoctors: IDoctor[] = [];
 selectedDoctors ={
  name:'',
  title:'',
  price:'',
 };
 selectedName!:string;
 selectedTitle!:string;
 selectedPrice!:number;
  errorMessage: any;
  constructor(private doctorService: DoctorService, private router: Router) {}
  ngOnInit(): void {
  this.getListDoctors();  
  }
  searchDoctors(){
    let params ={
      name:this?.selectedName? this.selectedName  :'' ,
      title:this?.selectedTitle ? this?.selectedTitle  :'' ,
      price:this?.selectedPrice ? this?.selectedPrice  :'' ,
    }
    
    this.doctorService.searchDoctors(params).subscribe({
      next: (doctors) => {
        this.doctors = doctors;
        console.log(this.doctors);
        
      },
      error: (error) => (this.errorMessage = error),
    });

  }

getListDoctors(){
  this.doctorService.getDoctors().subscribe(res =>{
this.listDoctors=res;
  })
}
  
}


