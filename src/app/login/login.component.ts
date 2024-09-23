import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public myAngularxQrCode: string = '';
  public qrCodeDownloadLink: SafeUrl = "";

  constructor() { 
    this.myAngularxQrCode = 'Your QR code data string';
  }

  ngOnInit() {
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

}
