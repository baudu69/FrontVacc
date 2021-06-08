import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVaccinComponent } from './liste-vaccin.component';

describe('ListeVaccinComponent', () => {
  let component: ListeVaccinComponent;
  let fixture: ComponentFixture<ListeVaccinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeVaccinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeVaccinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
