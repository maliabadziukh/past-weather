import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CityInputComponent } from './city-input.component';

describe('CityInputComponent', () => {
  let component: CityInputComponent;
  let fixture: ComponentFixture<CityInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CityInputComponent],
    });
    fixture = TestBed.createComponent(CityInputComponent);
    component = fixture.componentInstance;

    component.parentForm = new FormGroup({});
    fixture.detectChanges();
  });

  it('should show error message if input is invalid & touched', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');

    inputElement.value = '';
    component.city.markAsTouched();
    fixture.detectChanges();
    const errorElement: HTMLInputElement = fixture.nativeElement.querySelector('span');

    expect(errorElement.textContent).toContain('Please enter a city name!');
  });
});
