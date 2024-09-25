import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms-list.component.html',
  styleUrls: ['./alarms-list.component.css']
})
export class AlarmsListComponent implements OnInit {

alarms = {
  earlies: [
  {id: 0,
      category: "Categoria por Defecto",
      title: "7:30 A.M",
      hour_label: "7:30 A.M",
      days: ["L", "V", "S", "D"],
      description: ""
    }
  ],
  nexts: [
    {id: 1,
      category: "Deporte",
      title: "Hacer Ejercicio",
      hour_label: "8:00 A.M",
      days: ["L", "M", "V", "D"],
      description: "No olvidar realizar calentamiento antes de entrenar"
    },
    {id: 2,
      category: "Tiempo personal",
      title: "Sacar a Lucas",
      hour_label: "12:30 P.M",
      days: ["L", "M", "J", "V"],
      description: ""
    }
  ]
}

days = [
  {id: "L", label: "L"},
  {id: "M", label: "M"},
  {id: "Mi", label: "M"},
  {id: "J", label: "J"},
  {id: "V", label: "V"},
  {id: "S", label: "S"},
  {id: "D", label: "D"},
];

getId(alarm: any): number {
  return alarm.id;
}

validateDay(day:any, alarmDays: string[]) {
  return alarmDays.includes(day.id);
}

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('AlarmsListComponent initialized');
  }

  create () {
    this.router.navigate(['/alarms/create']);
  }

  edit () {
    this.router.navigate(['/alarms/edit']);
  }
}
