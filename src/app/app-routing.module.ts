import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlarmsComponent } from './alarms/alarms.component';
import { LoginLoaderComponent } from './login/login-loader/login-loader.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login/loader', component: LoginLoaderComponent },
  { path: 'alarms', component: AlarmsComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
