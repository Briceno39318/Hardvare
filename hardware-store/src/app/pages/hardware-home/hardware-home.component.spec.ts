import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareHomeComponent } from './hardware-home.component';

describe('HardwareHomeComponent', () => {
  let component: HardwareHomeComponent;
  let fixture: ComponentFixture<HardwareHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
