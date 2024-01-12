import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent  implements OnInit {

  constructor(private router: Router) { }

 navigateToLandingPage() {
    this.router.navigate(['landing']);
  }

  logOut() {
    console.log('Logging out...');
    this.router.navigate(['session/sign-in']); 
  }
  
  navigateToProfilePage() {
    this.router.navigate(['profile']);
  }

  ngOnInit() {}

}
