import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddDoctorComponent } from './form-add-doctor.component';

describe('FormAddDoctorComponent', () => {
  let component: FormAddDoctorComponent;
  let fixture: ComponentFixture<FormAddDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAddDoctorComponent]
    });
    fixture = TestBed.createComponent(FormAddDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
