import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundError } from 'rxjs';
import { NavComponent } from './nav/nav.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorCarouselComponent } from './doctor-carousel/doctor-carousel.component';

const routes: Routes = [
  {path : '', redirectTo :'home',pathMatch:'full'},
  {path : 'nav', component : NavComponent},
  {path : 'register', component:RegisterComponent},
  {path : 'login', component:LoginComponent},
  {path : 'home', component:HomeComponent},
  {path : 'about', component:AboutComponent},
  {path : 'contacts', component:ContactsComponent},
  {path: 'doctors' , component:DoctorsComponent},
  {path:'Pharmacy', component:PharmacyComponent},
  {path :'DoctorDetails/:id' ,component: DoctorDetailsComponent},
  {path : 'DoctorCarousel' ,component:DoctorCarouselComponent},
  {path : '**', component:NotFoundError},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
