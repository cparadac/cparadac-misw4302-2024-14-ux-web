import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarms-create',
  templateUrl: './alarms-create.component.html',
  styleUrls: ['./alarms-create.component.css']
})
export class AlarmsCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('AlarmsCreateComponent initialized');
  }
}
