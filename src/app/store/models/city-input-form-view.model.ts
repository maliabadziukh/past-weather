import { FormGroupState } from 'ngrx-forms';

import { InputFormValue } from '../reducers/weather-app.reducer';

export interface CityInputFormView {
  form: FormGroupState<InputFormValue>;
}
