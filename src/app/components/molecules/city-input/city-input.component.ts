/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { Component, forwardRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.css'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CityInputComponent), multi: true }],
})
export class CityInputComponent implements ControlValueAccessor, OnDestroy {
  formControl = new FormControl('');
  private onChange: Function;
  private onTouched: Function;
  private valueChangeSubscription = new Subscription();

  constructor() {
    this.onChange = () => {};
    this.onTouched = () => {};
    this.valueChangeSubscription.add(this.formControl.valueChanges.subscribe(value => this.onChange(value)));
  }

  writeValue(obj: any): void {
    this.formControl.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  ngOnDestroy(): void {
    this.valueChangeSubscription.unsubscribe();
  }
}
