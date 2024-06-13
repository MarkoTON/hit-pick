import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOfMonthComponent } from './best-of-month.component';

describe('BestOfMonthComponent', () => {
  let component: BestOfMonthComponent;
  let fixture: ComponentFixture<BestOfMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestOfMonthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestOfMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
