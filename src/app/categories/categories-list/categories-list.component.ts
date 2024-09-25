import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  public categories = [
    {
      id: 1,
      name: 'Deportes',
      description: 'Actividades para mantenerse en forma',
      clock_style: '2',  
    },
    {
      id: 2,
      name: 'Tiempo Personal',
      description: 'Actividades para el tiempo libre',
      clock_style: '1',
    },
    {
      id: 3,
      name: 'Trabajo',
      description: 'Actividades relacionadas con el trabajo',
      clock_style: '3',
    },
    {
      id: 4,
      name: 'Salud',
      description: 'Actividades relacionadas con la salud',
      clock_style: '2',
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('CategoriesListComponent initialized');
  }

  edit () {
    this.router.navigate(['/categories/edit']);
  }
}
