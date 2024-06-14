import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextHitComponent } from './next-hit.component';

describe('NextHitComponent', () => {
  let component: NextHitComponent;
  let fixture: ComponentFixture<NextHitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextHitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextHitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
