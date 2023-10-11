import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
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

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countryCode = new FormControl('');
    this.parentForm.addControl('countryCode', this.countryCode);
    this.countryOptions = this.countriesService.getCountries();
  }
}
