import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-country-code-input',
  templateUrl: './country-code-input.component.html',
  styleUrls: ['./country-code-input.component.css'],
})
export class CountryCodeInputComponent implements OnInit {
  countryCode: AbstractControl;
  @Input() parentForm: FormGroup;

  ngOnInit(): void {
    this.countryCode = new FormControl('');
    this.parentForm.addControl('countryCode', this.countryCode);
  }
}
