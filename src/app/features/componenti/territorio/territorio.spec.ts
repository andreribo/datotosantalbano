import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Territorio } from './territorio';

describe('Territorio', () => {
  let component: Territorio;
  let fixture: ComponentFixture<Territorio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Territorio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Territorio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
