// signup.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPageComponent {

  constructor(private router: Router) { }

  save() {
    this.router.navigate(['/home']);
  }
}
