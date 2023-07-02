import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DoctorsComponent } from './doctors/doctors.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { DoctorComponent } from './doctor/doctor.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { DoctorCarouselComponent } from './doctor-carousel/doctor-carousel.component';
import { PaginatorModule } from 'primeng/paginator';
import { CartComponent } from './cart/cart.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    DoctorComponent,
    DoctorsComponent,
    PharmacyComponent,
    DoctorComponent,
    TreatmentComponent,
    DoctorDetailsComponent,
    DoctorCarouselComponent,
    CartComponent,
    PaginationComponent,
    SearchBarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TabViewModule,
    DropdownModule,
    BrowserAnimationsModule,
    InputTextModule,
    CarouselModule,
    InputTextModule,
    ButtonModule,
    OverlayPanelModule,
    NgxStarRatingModule,
    PaginatorModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
