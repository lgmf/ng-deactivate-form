import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SecondComponent } from './components';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/first',
    pathMatch: 'full'
  },
  {
    path: 'first',
    loadChildren: './components/first-component/first.module#FirstModule'
  },
  {
    path: 'second',
    component: SecondComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    SecondComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
