import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';

import { CityInputFormView } from '../models/city-input-form-view.model';
import { InputFormValue } from '../reducers/weather-app.reducer';

export const selectFeature = createFeatureSelector<FormGroupState<InputFormValue>>;

export const selectForm = createSelector(selectFeature, state => state);
export const selectFormViewModel = createSelector(
  selectForm,
  (form): CityInputFormView => ({
    form,
  })
);
