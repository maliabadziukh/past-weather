import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { appState, InputFormValue } from 'src/app/store/reducers/weather-app.reducer';
import { selectFormViewModel } from 'src/app/store/selectors/weather-app.selector';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.css'],
})
export class InputCardComponent implements OnInit {
  formState$: Observable<FormGroupState<InputFormValue>>;
  viewModel$: Observable<FormGroupState<InputFormValue>>;

  constructor(private store: Store<appState>) {
    this.formState$ = this.store.select(s => s.inputForm);
  }

  ngOnInit(): void {
    this.viewModel$ = this.store.select(selectFormViewModel);
  }
}
