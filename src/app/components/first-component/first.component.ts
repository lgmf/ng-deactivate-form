import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CanComponentDeactivate, FirstForm } from 'src/app/models';

@Component({
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit, CanComponentDeactivate {
  title: string;
  form: FormGroup;
  emptyState: FirstForm = {
    name: '',
    age: null
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.title = 'First Component';

    this.form = this.fb.group({
      name: [this.emptyState.name],
      age: [this.emptyState.age]
    });

    this.form.valueChanges.subscribe(formValue => this.handleValueChanges(formValue));
  }

  handleValueChanges(formValue: FirstForm) {
    const isOnEmptyState = this.isOnEmptyState(formValue);

    if (isOnEmptyState) {
      this.form.markAsPristine();
    }
  }

  isOnEmptyState(currentState: FirstForm, emptyState = this.emptyState) {
    const keys = Object.keys(currentState);
    const values = Object.values(currentState);

    return values.every((value, index) => {
      const key = keys[index];
      const initialValue = emptyState[key];

      return value === initialValue;
    });
  }

  getInitialValueBy(key: string) {
    return this.emptyState[key];
  }

  onSubmit() {
    console.log(this.form.value);
  }

  canDeactivate() {
    return this.form.pristine
      ? true
      : confirm('There are unsubmitted changes. Are you sure you want to leave?');
  }
}
