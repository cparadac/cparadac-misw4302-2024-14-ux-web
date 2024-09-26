import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarms-create',
  templateUrl: './alarms-create.component.html',
  styleUrls: ['./alarms-create.component.css']
})
export class AlarmsCreateComponent implements OnInit {

  public isOpenCustom = false;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('AlarmsCreateComponent initialized');
  }

  save() {
    this.router.navigate(['/alarms']);
  }

  cancel() {
    this.router.navigate(['/alarms']);
  }

  openCustom () {
    this.isOpenCustom = !this.isOpenCustom;
  }
}
