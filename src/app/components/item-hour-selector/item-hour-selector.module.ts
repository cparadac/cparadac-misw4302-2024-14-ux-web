import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemHourSelectorComponent } from './item-hour-selector.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ItemHourSelectorComponent],
  exports: [ItemHourSelectorComponent]
})
export class ItemHourSelectorModule { }