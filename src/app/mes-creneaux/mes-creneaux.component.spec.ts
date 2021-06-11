import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesCreneauxComponent } from './mes-creneaux.component';

describe('MesCreneauxComponent', () => {
  let component: MesCreneauxComponent;
  let fixture: ComponentFixture<MesCreneauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesCreneauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesCreneauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
