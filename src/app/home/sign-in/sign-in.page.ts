import { AuthenticationService } from './../../core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavController, AlertController } from '@ionic/angular'; // Import AlertController

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPageComponent implements OnInit {

  subscription: Subscription[] = [];
  email: string = "";
  password: string = "";

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private navCtrl: NavController,
    private alertController: AlertController // Inject AlertController
  ) { }

  ngOnInit() {
  }

  async signIn() {
    console.log('Email', this.email);
    console.log('Password', this.password);
    const params = {
      email_id: this.email,
      password: this.password
    };

    try {
      const res: any = await this.authenticationService.login(params).toPromise();

      console.log('Response:', res);

      // Check if the response is an array and has at least one element
      if (Array.isArray(res) && res.length > 0) {
        console.log('First object in the array:', res[0]);
      }

      // Navigate to the dashboard page on successful login
      this.navCtrl.navigateRoot('/dashboard');

    } catch (error: any) {
      console.error('Error fetching posts:', error);
    
      // Show an alert for the error message
      this.presentAlert('Error', (error as any).message || 'An error occurred');
    }
  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  signUp() {
    this.router.navigate(['/signup']);
  }

}











// import { AuthenticationService } from './../../core/services/authentication.service';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { NavController, AlertController} from '@ionic/angular';


// @Component({
//   selector: 'app-sign-in',
//   templateUrl: './sign-in.page.html',
//   styleUrls: ['./sign-in.page.scss'],
// })
// export class SignInPageComponent implements OnInit {

//   subscription: Subscription[] = [];
//    email: string ="";
//    password: string = "";

//   constructor(
//     private router: Router,
//     private authenticationService: AuthenticationService,
//     private navCtrl: NavController,
//     private alertController: AlertController 

//     ) { }

//   ngOnInit() {
//   }

//   signIn(){
//       console.log('Email', this.email);
//       console.log('Password', this.password);
//       const params = {
//         email_id : this.email,
//         password: this.password
//       };

//       this.subscription.push(
//         this.authenticationService.login(params).subscribe(
//           (res: any) => {
//             console.log('Response:', res);
  
//             // Check if the response is an array and has at least one element
//             if (Array.isArray(res) && res.length > 0) {
//               console.log('First object in the array:', res[0]);
//             }
  
//             // Navigate to the dashboard page on successful login
//             this.navCtrl.navigateRoot('/dashboard');
  
//           },
//           (error) => {
//             console.error('Error fetching posts:', error);
//           }
//         )
//       );
    
//   }
  

//   signUp() {
//     this.router.navigate(['/signup']);
//   }
  
// }











// import { AuthenticationService } from './../../core/services/authentication.service';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';


// @Component({
//   selector: 'app-sign-in',
//   templateUrl: './sign-in.page.html',
//   styleUrls: ['./sign-in.page.scss'],
// })
// export class SignInPageComponent implements OnInit {

//   subscription: Subscription[] = [];
//    email: string ="";
//    password: string = "";

//   constructor(
//     private router: Router,
//     private authenticationService: AuthenticationService
//     ) { }

//   ngOnInit() {
//   }

//   signIn(){
//       console.log('Email', this.email);
//       console.log('Password', this.password);
//       const params = {
//         email_id : this.email,
//         password: this.password
//       };

//       this.subscription.push(
//         this.authenticationService.login(params).subscribe(
//           (res: any) => {
//             console.log('Posts:', res);
//             // this.posts = res;
//             // this.loader.dismiss(); // Hiding the loader when data is loaded
//           },
//           (error) => {
//             console.error('Error fetching posts:', error);
//             // this.loader.dismiss(); // Hiding the loader in case of an error
//           }
//         )
//       );
//   }
  

//   signUp() {
//     this.router.navigate(['/signup']);
//   }
  
// }


