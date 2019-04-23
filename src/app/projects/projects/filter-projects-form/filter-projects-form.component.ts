import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component( {
  selector: 'app-filter-projects-form',
  templateUrl: './filter-projects-form.component.html',
  styleUrls: ['./filter-projects-form.component.css']
} )
export class FilterProjectsFormComponent implements OnInit {
  public filterClass = 'content';
  public filtroName: string;
  @Output() filtrarProyPorNombre = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }




}
