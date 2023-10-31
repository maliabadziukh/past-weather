import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { FormFactory } from 'src/app/factories/form.factory';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.css'],
})
export class CityInputComponent implements OnInit {
  city: AbstractControl;
  @Input() parentForm: FormGroup;
  constructor(private formFactory: FormFactory) {}

  ngOnInit(): void {
    this.city = this.formFactory.createFormControl('', [Validators.required]);
    this.parentForm.addControl('city', this.city);
  }
}
