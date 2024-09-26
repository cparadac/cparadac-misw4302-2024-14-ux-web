import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { ClocksModule } from './components/clocks/clocks.module';
import { CustomizeModule } from './components/customize/customize.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { QRCodeModule } from 'angularx-qrcode';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    BrowserAnimationsModule,
    QRCodeModule,
    ClocksModule,
    CustomizeModule,
    AppRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
