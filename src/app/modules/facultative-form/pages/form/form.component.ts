import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formFacultative: FormGroup = new FormGroup ([]);

  constructor() { }

  ngOnInit(): void {
    this.formFacultative = new FormGroup(
      {
        cdDomicilio: new FormControl(0, [
          Validators.required
        ]),
        
        cdCedente: new FormControl(0, [
          Validators.required
        ]),

        cdCorredor: new FormControl(0, [
          Validators.required
        ]),

        grupoRamno: new FormControl(0, [
          Validators.required
        ]),

        cdRamo: new FormControl(0, [
          Validators.required
        ]),
        
        cdIndole: new FormControl(0, [
          Validators.required
        ]),

        cdMoneda: new FormControl(0, [
          Validators.required
        ]),

        cdTpFacultativo: new FormControl(0, [
          Validators.required
        ]),

        cdTpNegocio: new FormControl(0, [
          Validators.required
        ]),

        cdEstado: new FormControl('', [
          Validators.required
        ]),

        usrRegistro: new FormControl('', [
          Validators.required
        ]),
        
        cedente: new FormControl('', [
          Validators.required
        ]),

        corredor: new FormControl('',[
          Validators.required
        ]),

        indole: new FormControl('IMPORTADORA DE VEHICULOS', [
          Validators.required
        ])
      }
    )
  }

}
