import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-loader',
  templateUrl: './login-loader.component.html',
  styleUrls: ['./login-loader.component.css'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)', opacity: 0.1 })),
      state('progress_25', style({ transform: 'rotate(90deg)', opacity: 0.25})),
      state('progress_50', style({ transform: 'rotate(180deg)', opacity: 0.50 })),
      state('progress_80', style({ transform: 'rotate(270deg)', opacity: 0.80 })),
      state('progress_100', style({ transform: 'rotate(360deg)', opacity: 1 })),
      transition('default => progress_25', animate('400ms ease-out')),
      transition('progress_25 => progress_50', animate('400ms ease-out')),
      transition('progress_50 => progress_80', animate('400ms ease-out')),
      transition('progress_80 => progress_100', animate('400ms ease-out')),
      transition('progress_100 => progress_25', animate('400ms ease-out'))
    ])
  ]
})
export class LoginLoaderComponent implements OnInit {
  public myAngularxQrCode: string = '';
  public qrCodeDownloadLink: SafeUrl = "";
  state: string = 'default';

  constructor(
    private router: Router
  ) { 
    this.myAngularxQrCode = 'Your QR code data string';
  }

  ngOnInit() {
    this.runAnimation()
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

  rotate() {
    if (this.state === 'default') {
      this.state = 'progress_25'
      return;
    } else if (this.state === 'progress_25') {
      this.state = 'progress_50';
      return;
    } else if (this.state === 'progress_50') {
      this.state = 'progress_80';
      return;
    } else if (this.state === 'progress_80') {
      this.state = 'progress_100';
      return;
    } else if (this.state === 'progress_100') {
      this.state = 'progress_25';
      return;
    }
  }

  async runAnimation() {
    while (this.state !== 'progress_100') {
      this.rotate();
      await this.delay(700);
    }
    
    this.router.navigate(['/']);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
