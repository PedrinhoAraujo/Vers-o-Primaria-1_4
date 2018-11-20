import * as testing from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: testing.ComponentFixture<RegistrationComponent>;

  beforeEach(testing.async(() => {
    testing.TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = testing.TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
