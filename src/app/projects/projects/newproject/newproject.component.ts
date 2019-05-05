import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ProjectsService } from './../projects.service';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {
  public mensajeVista: string;
  public idCreado$: any;
  public formGroup: FormGroup;

  private longitudMinima = 3;

  constructor(private projectsService: ProjectsService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', [this.validaNombre.bind(this)]]
    });
  }

  private validaNombre(control: AbstractControl) {
    const name = control.value;

    let errors = null;

    if (name === undefined) {
      errors = { ...errors, nombreVacio: 'El proyecto no se ha creado: el nombre introducido no es válido' };
    }

    if (name.length < this.longitudMinima) {
      errors = { ...errors, longitudMinima: 'El nombre ha de tener por lo menos ' + this.longitudMinima + ' caracteres' };
    }

    return errors;
  }

  public getError(controlName: string): Array<string> {
    const error = Array<string>();
    const control = this.formGroup.get(controlName);
    if (control.dirty && control.errors != null) {
      for (const tipoError of Object.getOwnPropertyNames(control.errors)) {
        error.push(control.errors[tipoError]);
      }
    }
    return error;
  }

  public saveProject() {
    this.idCreado$ = this.projectsService.creaProyecto(this.formGroup.value);
  }
}
