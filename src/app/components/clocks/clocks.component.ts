import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clocks',
  templateUrl: './clocks.component.html',
  styleUrls: ['./clocks.component.css']
})
export class ClocksComponent implements OnInit {

  @Input() index: number = 0;

  constructor() { }

  ngOnInit() {
    console.log('ClocksComponent initialized');
  }
}