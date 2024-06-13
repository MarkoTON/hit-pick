import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOfDayComponent } from './best-of-day.component';

describe('BestOfDayComponent', () => {
  let component: BestOfDayComponent;
  let fixture: ComponentFixture<BestOfDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestOfDayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
