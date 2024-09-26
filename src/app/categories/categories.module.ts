import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClocksModule } from '../components/clocks/clocks.module';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesCreateComponent } from './categories-create/categories-create.component';
import { CategoriesEditComponent } from './categories-edit/categories-edit.component';
import { CategoryRoutingModule } from './categories.routing.module';
import { DialogModule } from "../components/dialog/dialog.module";

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ClocksModule,
    DialogModule,
],
  declarations: [CategoriesListComponent, CategoriesCreateComponent, CategoriesEditComponent],
})
export class CategoriesModule { }
