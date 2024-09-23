import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmsComponent } from './alarms.component';
import { AlarmRoutingModule } from './alarms.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AlarmRoutingModule
  ],
  declarations: [AlarmsComponent]
})
export class AlarmsModule { }
