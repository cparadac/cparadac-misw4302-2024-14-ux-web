import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomizeComponent } from './customize.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomizeComponent],
  exports: [CustomizeComponent]
})
export class CustomizeModule { }
