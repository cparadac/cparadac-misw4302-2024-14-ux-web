import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.css']
})
export class CategoriesEditComponent implements OnInit {

  public category = {
    id: 1,
    name: 'Deportes',
    description: 'Actividades para mantenerse en forma',
    clock_style: '2',  
  }

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('CategoriesEditComponent initialized');
  }

  save() {
    this.router.navigate(['/categories']);
  }

  cancel() {
    this.router.navigate(['/categories']);
  }
}
