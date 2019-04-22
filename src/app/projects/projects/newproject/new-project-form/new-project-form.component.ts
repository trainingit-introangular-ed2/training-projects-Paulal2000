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

  public newClass = 'content';

  @Output() public saveProject = new EventEmitter<{ id:number, name:string }>();

  constructor() { }

  ngOnInit() {

  }

  
  
}
