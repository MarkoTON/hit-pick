import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreIndicatorComponent } from './genre-indicator.component';

describe('GenreIndicatorComponent', () => {
  let component: GenreIndicatorComponent;
  let fixture: ComponentFixture<GenreIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenreIndicatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenreIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
