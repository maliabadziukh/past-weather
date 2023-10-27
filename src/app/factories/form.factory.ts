import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormFactory {
  createFormGroup(): FormGroup {
    return new FormGroup({});
  }
  createFormControl(initialValue: string, validators: ValidatorFn[]): FormControl {
    return new FormControl(initialValue, validators);
  }
}
