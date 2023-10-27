import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayWeatherQueryComponent } from './birthday-weather-query.component';

describe('BirthdayWeatherQueryComponent', () => {
  let component: BirthdayWeatherQueryComponent;
  let fixture: ComponentFixture<BirthdayWeatherQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BirthdayWeatherQueryComponent],
    });
    fixture = TestBed.createComponent(BirthdayWeatherQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
