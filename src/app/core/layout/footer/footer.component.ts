import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../projects/projects/store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  public mensajePie$: any;

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.mensajePie$ = this.storeService.select$();
  }
}
