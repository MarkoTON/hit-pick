import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongVoteIndicatorComponent } from './song-vote-indicator.component';

describe('SongVoteIndicatorComponent', () => {
  let component: SongVoteIndicatorComponent;
  let fixture: ComponentFixture<SongVoteIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongVoteIndicatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SongVoteIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
