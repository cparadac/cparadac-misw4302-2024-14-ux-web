import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesCreateComponent } from './categories-create/categories-create.component';
import { CategoriesEditComponent } from './categories-edit/categories-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesListComponent,
  },
  {
    path: 'create',
    component: CategoriesCreateComponent,
  },
  {
    path: 'edit',
    component: CategoriesEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CategoryRoutingModule { }
