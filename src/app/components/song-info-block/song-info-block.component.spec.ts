import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongInfoBlockComponent } from './song-info-block.component';

describe('SongInfoBlockComponent', () => {
  let component: SongInfoBlockComponent;
  let fixture: ComponentFixture<SongInfoBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongInfoBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SongInfoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
