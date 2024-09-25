import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login-init/login.component';
import { LoginRoutingModule } from './login.routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { LoginLoaderComponent } from './login-loader/login-loader.component';

@NgModule({
  imports: [
    CommonModule,
    QRCodeModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent, LoginLoaderComponent]
})
export class LoginModule { }
