import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-create',
  templateUrl: './categories-create.component.html',
  styleUrls: ['./categories-create.component.css']
})
export class CategoriesCreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('CategoriesCreateComponent initialized');
  }

  save() {
    this.router.navigate(['/categories']);
  }

  cancel() {
    this.router.navigate(['/categories']);
  }
}
