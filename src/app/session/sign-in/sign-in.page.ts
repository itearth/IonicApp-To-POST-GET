import { AuthenticationService } from '../../core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular'; // Import AlertController

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
    private alertController: AlertController ,// Inject AlertController
    
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
      if (res.statusCode === 200) {
        const userData = res.data[0]; 

         // Storing user data in local storage
      localStorage.setItem('userData', JSON.stringify(userData));

        // Navigate to the dashboard page on successful login
        this.router.navigate(['dashboard']); // Change here
      } else {
        this.presentAlert('Alert', res.message);
      }
  
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





