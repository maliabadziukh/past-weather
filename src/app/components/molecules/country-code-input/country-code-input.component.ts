import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { FormFactory } from 'src/app/factories/form.factory';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country-code-input',
  templateUrl: './country-code-input.component.html',
  styleUrls: ['./country-code-input.component.css'],
})
export class CountryCodeInputComponent implements OnInit {
  countryCode: AbstractControl;
  @Input() parentForm: FormGroup;
  countryOptions: { name: string; code: string }[];

  constructor(
    private countriesService: CountriesService,
    private formFactory: FormFactory
  ) {}

  ngOnInit(): void {
    this.countryCode = this.formFactory.createFormControl('', [Validators.required]);
    this.parentForm.addControl('countryCode', this.countryCode);
    this.countryOptions = this.countriesService.getCountries();
  }
}
