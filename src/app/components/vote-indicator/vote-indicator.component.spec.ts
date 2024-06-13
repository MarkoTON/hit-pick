import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteIndicatorComponent } from './vote-indicator.component';

describe('VoteIndicatorComponent', () => {
  let component: VoteIndicatorComponent;
  let fixture: ComponentFixture<VoteIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoteIndicatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoteIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
