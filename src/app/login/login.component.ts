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
  state: string = 'default';

  constructor(
    private router: Router
  ) { 
    this.myAngularxQrCode = 'Your QR code data string';
  }

  ngOnInit() {
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

  onMouseEnter() {
    this.router.navigate(['/login/loader']);
  }
}
