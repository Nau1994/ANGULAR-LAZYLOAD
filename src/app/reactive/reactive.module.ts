import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponent } from './reactive/reactive.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:"",component:ReactiveComponent}
]


@NgModule({
  declarations: [
    ReactiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReactiveModule { }
