import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
 
let projects = environment.projects; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() public numProjects: number;

  constructor() { }

  ngOnInit() {
    this.numProjects = projects.length;
  }

}
