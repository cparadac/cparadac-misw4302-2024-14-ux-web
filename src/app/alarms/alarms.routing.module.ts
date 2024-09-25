import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlarmsListComponent } from './alarms-list/alarms-list.component';
import { AlarmsCreateComponent } from './alarms-create/alarms-create.component';
import { AlarmsEditComponent } from './alarms-edit/alarms-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AlarmsListComponent,
  },
  {
    path: 'create',
    component: AlarmsCreateComponent,
  },
  {
    path: 'edit',
    component: AlarmsEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AlarmRoutingModule { }
