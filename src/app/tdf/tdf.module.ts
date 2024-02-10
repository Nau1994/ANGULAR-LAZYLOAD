import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdfComponent } from './tdf/tdf.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:"",component:TdfComponent}
]


@NgModule({
  declarations: [
    TdfComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TDFModule { }
