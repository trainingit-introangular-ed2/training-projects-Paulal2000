import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  public nombreNuevo: string;
  public idNuevo: number;
  @Input() public mensajeVista: string;
  @Input() public idCreado$: number;

  @Output() public saveProject = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
