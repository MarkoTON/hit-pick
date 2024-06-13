import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBuyComponent } from './account-buy.component';

describe('AccountBuyComponent', () => {
  let component: AccountBuyComponent;
  let fixture: ComponentFixture<AccountBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountBuyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
