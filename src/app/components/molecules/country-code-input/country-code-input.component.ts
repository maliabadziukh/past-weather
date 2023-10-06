import { Component, Input } from '@angular/core';
import { FormGroupState } from 'ngrx-forms';
import { InputFormValue } from 'src/app/store/reducers/weather-app.reducer';

@Component({
  selector: 'app-country-code-input',
  templateUrl: './country-code-input.component.html',
  styleUrls: ['./country-code-input.component.css'],
})
export class CountryCodeInputComponent {
  @Input() formState: FormGroupState<InputFormValue>;
}
