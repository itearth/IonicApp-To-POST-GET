import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }
  isEnglish: boolean = true; // Initialize isEnglish property

  ngOnInit() { }

  signIn() {
    // Navigating to the "SignIn" page
    this.router.navigate(['session/sign-in']);
  }
  toggleLanguage() {
    // Your language toggle logic goes here
  }

}
