import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultativeFormRoutingModule } from './facultative-form-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FormComponent } from './pages/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FacultativeFormRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatAutocompleteModule,
  ]
})
export class FacultativeFormModule { }
