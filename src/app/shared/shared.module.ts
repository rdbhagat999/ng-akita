import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ LoadingIndicatorComponent, NavComponent, ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [ LoadingIndicatorComponent, NavComponent, ]
})
export class SharedModule { }
