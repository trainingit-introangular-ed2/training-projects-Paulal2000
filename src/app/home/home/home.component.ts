import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
import { environment } from '../../../environments/environment';
 
let projects = environment.projects; 
>>>>>>> 161a7b4616de2911258995cd1bf64d25d2a1914a

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public homeClass = 'content';
<<<<<<< HEAD
  
=======
  public numProjects: number;
>>>>>>> 161a7b4616de2911258995cd1bf64d25d2a1914a

  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
    
=======
    this.numProjects = projects.length;
>>>>>>> 161a7b4616de2911258995cd1bf64d25d2a1914a
  }

}
