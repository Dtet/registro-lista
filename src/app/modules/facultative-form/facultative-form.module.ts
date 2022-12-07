import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultativeFormRoutingModule } from './facultative-form-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FormComponent } from './pages/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FacultativeFormRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FacultativeFormModule { }
