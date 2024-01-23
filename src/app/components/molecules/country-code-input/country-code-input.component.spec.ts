import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CountryCodeInputComponent } from './country-code-input.component';

describe('CountryCodeInputComponent', () => {
  let component: CountryCodeInputComponent;
  let fixture: ComponentFixture<CountryCodeInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CountryCodeInputComponent],
    });
    fixture = TestBed.createComponent(CountryCodeInputComponent);
    component = fixture.componentInstance;
    component.parentForm = new FormGroup({});
    fixture.detectChanges();
  });

  it('should show error message if input is invalid & touched', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');

    inputElement.value = '';
    component.countryCode.markAsTouched();
    fixture.detectChanges();
    const errorElement: HTMLInputElement = fixture.nativeElement.querySelector('span');

    expect(errorElement.textContent).toContain('Please enter a country code!');
  });
});
