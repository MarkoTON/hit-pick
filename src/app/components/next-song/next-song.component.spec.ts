import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextSongComponent } from './next-song.component';

describe('NextSongComponent', () => {
  let component: NextSongComponent;
  let fixture: ComponentFixture<NextSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextSongComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
