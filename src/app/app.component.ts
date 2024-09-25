import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UX Alarm App';

  constructor(public router: Router) {
    console.log('AppComponent initialized', this.router.url);
  }
}
