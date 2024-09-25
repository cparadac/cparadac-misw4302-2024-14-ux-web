import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms-list.component.html',
  styleUrls: ['./alarms-list.component.css']
})
export class AlarmsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('AlarmsListComponent initialized');
  }
}
