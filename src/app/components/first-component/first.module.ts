import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './first.component';
import { ChangesInProgressGuard } from 'src/app/guards';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
    canDeactivate: [ChangesInProgressGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FirstComponent
  ]
})
export class FirstModule { }
