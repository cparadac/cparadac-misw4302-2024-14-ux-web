import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesCreateComponent } from './categories-create/categories-create.component';
import { CategoriesEditComponent } from './categories-edit/categories-edit.component';
import { CategoryRoutingModule } from './categories.routing.module';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule
  ],
  declarations: [CategoriesListComponent, CategoriesCreateComponent, CategoriesEditComponent],
})
export class CategoriesModule { }
