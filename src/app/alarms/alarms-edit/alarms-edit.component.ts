import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarms-edit',
  templateUrl: './alarms-edit.component.html',
  styleUrls: ['./alarms-edit.component.css']
})
export class AlarmsEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('AlarmsEditComponent initialized');
  }
}
