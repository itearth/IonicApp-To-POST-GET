import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {

    const _userData = localStorage.getItem('userData');

    if (_userData) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['session']);
    }
  }

}
