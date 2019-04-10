import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
 
let projects = environment.projects; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public homeClass = 'content';
  public numProjects: number;

  constructor() { }

  ngOnInit() {
    this.numProjects = projects.length;
  }

}
