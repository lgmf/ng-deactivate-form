import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CanComponentDeactivate, FirstForm } from 'src/app/models';
import { fromEvent, Subject, Observable } from 'rxjs';
import { takeUntil, skipWhile } from 'rxjs/operators';

@Component({
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit, OnDestroy, CanComponentDeactivate {

  destroyed$ = new Subject<void>();
  beforeUnload$ = fromEvent(window, 'beforeunload');

  form: FormGroup;
  initialState: FirstForm = {
    name: '',
    age: null
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.getForm(this.initialState);

    this.handleValueChanges(this.form);
    this.handleBeforeUnload(this.beforeUnload$);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  getForm(state: FirstForm): FormGroup {
    const keys = Object.keys(state);
    const values = Object.values(state);
    const form = this.buildForm(keys, values);

    return this.fb.group(form);
  }

  handleValueChanges(form: FormGroup) {
    form.valueChanges
      .pipe(
        skipWhile(formValue => !this.isOnEmptyState(formValue)),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => this.form.markAsPristine());
  }

  handleBeforeUnload(beforeUnload$: Observable<Event>) {
    beforeUnload$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(event => {
        if (this.form.pristine) {
          return;
        }

        return event.returnValue = true;
      });
  }

  isOnEmptyState(currentState: FirstForm, initialState = this.initialState) {
    const keys = Object.keys(currentState);
    const values = Object.values(currentState);

    return values.every((value, index) => {
      const key = keys[index];
      const initialValue = initialState[key];

      return value === initialValue;
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  canDeactivate() {
    return this.form.pristine
      ? true
      : confirm('There are unsubmitted changes. Are you sure you want to leave?');
  }

  private buildForm(keys: string[], values: any[]) {
    return keys.reduce((prev, key) => {
      return {
        ...prev,
        [key]: [values[key]]
      }
    }, {});
  }

}
