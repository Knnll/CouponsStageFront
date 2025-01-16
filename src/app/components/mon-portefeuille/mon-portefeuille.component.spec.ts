import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonPortefeuilleComponent } from './mon-portefeuille.component';

describe('MonPortefeuilleComponent', () => {
  let component: MonPortefeuilleComponent;
  let fixture: ComponentFixture<MonPortefeuilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonPortefeuilleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonPortefeuilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
