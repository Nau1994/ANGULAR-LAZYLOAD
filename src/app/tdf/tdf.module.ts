import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdfComponent } from './tdf/tdf.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  {path:"",component:TdfComponent}
]


@NgModule({
  declarations: [
    TdfComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class TDFModule { }
