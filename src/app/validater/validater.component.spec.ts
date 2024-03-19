import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidaterComponent } from './validater.component';

describe('ValidaterComponent', () => {
  let component: ValidaterComponent;
  let fixture: ComponentFixture<ValidaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
