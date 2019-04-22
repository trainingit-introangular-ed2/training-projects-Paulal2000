import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { DashboardComponent } from './home/dashboard/dashboard.component';

@NgModule({
  declarations: [HomeComponent, DashboardComponent],
=======

@NgModule({
  declarations: [HomeComponent],
>>>>>>> 161a7b4616de2911258995cd1bf64d25d2a1914a
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
