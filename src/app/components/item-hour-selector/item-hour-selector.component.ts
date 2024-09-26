import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-hour-selector',
  templateUrl: './item-hour-selector.component.html',
  styleUrls: ['./item-hour-selector.component.css']
})
export class ItemHourSelectorComponent implements OnInit {

  @Input() index: number = 0;
  @Input() itemValueType: number = 0;
  value: String = '';


  constructor() { }

  ngOnInit() {
    this.value = this.getValuesByType(this.itemValueType)[this.index];

    if (this.itemValueType === 0) {
      this.value = this.value + ' : ';
    }
  }

  nextValue(itemValueType: number) {
    const values = this.getValuesByType(itemValueType);

    this.index = (this.index + 1) % values.length;
    this.value = values[this.index];

    if (itemValueType === 0) {
      this.value = this.value + ' : ';
    }
  }

  prevValue(itemValueType: number) {
    const values = this.getValuesByType(itemValueType);

    this.index = (this.index - 1 + values.length) % values.length;
    this.value = values[this.index];

    if (itemValueType === 0) {
      this.value = this.value + ' : ';
    }
  }

  getValuesByType(itemValueType: number) {
    switch (itemValueType) {
      case 0:
        return ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
      case 1:
        return ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', 
          '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', 
          '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
          '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', 
          '55', '56', '57', '58', '59'];
      case 2:
        return ['AM', 'PM'];
      default:
        return [];
    }
  }
}
