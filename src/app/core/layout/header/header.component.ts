import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  public formHomeActive = true;
  public formProjectsActive = false;
  constructor() { }

  ngOnInit() {
  }

}
