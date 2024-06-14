import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingViewComponent } from './streaming-view.component';

describe('StreamingViewComponent', () => {
  let component: StreamingViewComponent;
  let fixture: ComponentFixture<StreamingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamingViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StreamingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
