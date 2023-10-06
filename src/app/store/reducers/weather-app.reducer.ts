import { createReducer } from '@ngrx/store';
import { createFormGroupState, FormGroupState, onNgrxForms } from 'ngrx-forms';

export interface InputFormValue {
  cityInput: string;
  countryCodeInput: string;
}

const FORM_ID = 'location input form';

const initialFormState = createFormGroupState<InputFormValue>(FORM_ID, {
  cityInput: '',
  countryCodeInput: '',
});

export interface appState {
  inputForm: FormGroupState<InputFormValue>;
}

export const initialState: appState = {
  inputForm: initialFormState,
};
export const weatherAppReducer = createReducer(initialState, onNgrxForms());
