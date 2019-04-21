import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filter-projects-form',
  templateUrl: './filter-projects-form.component.html',
  styleUrls: ['./filter-projects-form.component.css']
})
export class FilterProjectsFormComponent implements OnInit {
  @Input() public filterClass = 'content';
  @Input() public id1: number=0;
  @Input() public id2: number=3;
  @Output() public filtrar = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  


}
