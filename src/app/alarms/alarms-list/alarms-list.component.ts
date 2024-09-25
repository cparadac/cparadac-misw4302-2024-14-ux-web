import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms-list.component.html',
  styleUrls: ['./alarms-list.component.css']
})
export class AlarmsListComponent implements OnInit {
alarms = {
  earlies: [
  {id: 1,
      category: "Categoria por Defecto",
      title: "7:30 A.M",
      hour_label: "7:30 A.M",
      days: ["Lunes", "Viernes", "Sabado", "Domingo"],
      description: ""
    }
  ],
  nexts: [
    {id: 2,
      category: "Deporte",
      title: "Hacer Ejercicio",
      hour_label: "8:00 A.M",
      days: ["Lunes", "Miercoles", "Viernes", "Domingo"],
      description: "No olvidar realizar calentamiento antes de entrenar"
    },
    {id: 3,
      category: "Tiempo personal",
      title: "Sacar a Lucas",
      hour_label: "12:30 P.M",
      days: ["Lunes", "Martes", "Jueves", "Viernes"],
      description: ""
    }
  ]
}

  constructor() { }

  ngOnInit() {
    console.log('AlarmsListComponent initialized');
  }
}
