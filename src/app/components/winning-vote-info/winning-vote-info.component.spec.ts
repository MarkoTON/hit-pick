import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinningVoteInfoComponent } from './winning-vote-info.component';

describe('WinningVoteInfoComponent', () => {
  let component: WinningVoteInfoComponent;
  let fixture: ComponentFixture<WinningVoteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinningVoteInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WinningVoteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
