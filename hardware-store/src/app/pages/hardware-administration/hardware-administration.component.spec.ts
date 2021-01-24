import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareAdministrationComponent } from './hardware-administration.component';

describe('HardwareAdministrationComponent', () => {
  let component: HardwareAdministrationComponent;
  let fixture: ComponentFixture<HardwareAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
