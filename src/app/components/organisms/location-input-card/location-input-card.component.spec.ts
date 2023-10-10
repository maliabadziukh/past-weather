import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationInputCardComponent } from './location-input-card.component';

describe('LocationInputCardComponent', () => {
  let component: LocationInputCardComponent;
  let fixture: ComponentFixture<LocationInputCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationInputCardComponent],
    });
    fixture = TestBed.createComponent(LocationInputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
