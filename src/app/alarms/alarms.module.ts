import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmsListComponent } from './alarms-list/alarms-list.component';
import { AlarmsCreateComponent } from './alarms-create/alarms-create.component';
import { AlarmsEditComponent } from './alarms-edit/alarms-edit.component';
import { AlarmRoutingModule } from './alarms.routing.module';
import { ClocksModule } from '../components/clocks/clocks.module';
import { ItemHourSelectorModule } from '../components/item-hour-selector/item-hour-selector.module';


@NgModule({
  imports: [
    CommonModule,
    AlarmRoutingModule,
    ClocksModule,
    ItemHourSelectorModule
  ],
  declarations: [AlarmsListComponent, AlarmsCreateComponent, AlarmsEditComponent],
})
export class AlarmsModule { }
