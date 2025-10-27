import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reconocimientos } from './reconocimientos';

describe('Reconocimientos', () => {
  let component: Reconocimientos;
  let fixture: ComponentFixture<Reconocimientos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reconocimientos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reconocimientos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
