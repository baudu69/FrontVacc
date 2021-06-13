import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratiquantVaccComponent } from './pratiquant-vacc.component';

describe('PratiquantVaccComponent', () => {
  let component: PratiquantVaccComponent;
  let fixture: ComponentFixture<PratiquantVaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PratiquantVaccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PratiquantVaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
