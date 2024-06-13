import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreBlockComponent } from './genre-block.component';

describe('GenreBlockComponent', () => {
  let component: GenreBlockComponent;
  let fixture: ComponentFixture<GenreBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenreBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenreBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
