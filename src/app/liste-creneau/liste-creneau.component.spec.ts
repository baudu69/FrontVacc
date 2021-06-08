import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCreneauComponent } from './liste-creneau.component';

describe('ListeCreneauComponent', () => {
  let component: ListeCreneauComponent;
  let fixture: ComponentFixture<ListeCreneauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCreneauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCreneauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
