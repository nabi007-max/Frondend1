import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interes } from './interes';

describe('Interes', () => {
  let component: Interes;
  let fixture: ComponentFixture<Interes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
