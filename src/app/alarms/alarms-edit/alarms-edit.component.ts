import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarms-edit',
  templateUrl: './alarms-edit.component.html',
  styleUrls: ['./alarms-edit.component.css']
})
export class AlarmsEditComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('AlarmsEditComponent initialized');
  }

  save() {
    this.router.navigate(['/alarms']);
  }

  cancel() {
    this.router.navigate(['/alarms']);
  }
}
