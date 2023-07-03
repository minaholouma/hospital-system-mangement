<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, HostListener} from '@angular/core';
>>>>>>> c475ab07e786d0d8ecde40c6ad39cd39d286f601
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
<<<<<<< HEAD
  responsive() {}
=======
  isLogin:boolean=false;
  
  isNavbarFixed = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isNavbarFixed = window.pageYOffset > 0;
  }

  constructor(private _AuthService:AuthService){}
  ngOnInit(): void {
    this._AuthService.userData.subscribe(()=>{
      if (this._AuthService.userData.getValue() !=null){
        this.isLogin=true
    }
  else{
    this.isLogin=false
  }
  })
    }
  

>>>>>>> c475ab07e786d0d8ecde40c6ad39cd39d286f601
}
