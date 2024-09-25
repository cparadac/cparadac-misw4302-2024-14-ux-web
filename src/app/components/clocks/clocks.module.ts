import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClocksComponent } from './clocks.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClocksComponent],
  exports: [ClocksComponent]
})
export class ClocksModule { }