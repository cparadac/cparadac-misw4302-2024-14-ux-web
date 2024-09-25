import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public myAngularxQrCode: string = '';
  public qrCodeDownloadLink: SafeUrl = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log('LoginComponent initialized');
    this.myAngularxQrCode = 'Your QR code data string';
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

  onMouseEnter() {
    this.router.navigate(['/alarms']);
  }
}
