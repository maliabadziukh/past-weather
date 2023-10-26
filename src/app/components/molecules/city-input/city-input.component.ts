import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.css'],
})
export class CityInputComponent implements OnInit {
  city: AbstractControl;
  @Input() parentForm: FormGroup;

  ngOnInit(): void {
    this.city = new FormControl('', [Validators.required]);
    this.parentForm.addControl('city', this.city);
  }
}
