import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clocks',
  templateUrl: './clocks.component.html',
  styleUrls: ['./clocks.component.css']
})
export class ClocksComponent implements OnInit {

  @Input() index: number = 0;
  @Input() style: string = '1';
  @Input() size: string = 'small';

  constructor() { }

  ngOnInit() {
    console.log('ClocksComponent initialized');
  }
}