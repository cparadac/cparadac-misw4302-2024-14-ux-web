import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clocks',
  templateUrl: './clocks.component.html',
  styleUrls: ['./clocks.component.css']
})
export class ClocksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('ClocksComponent initialized');
  }
}