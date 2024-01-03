import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  newsData: any[] = [];

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.loadNewsData();
  }

  loadNewsData() {
    this.authService.getNewsFeed().subscribe(
      (response) => {
        if (response && response.status === 'SUCCESS') {
          this.newsData = response.data;
        }
      },
      (error) => {
        console.error('Error fetching news data:', error);
      }
    );
  }
}
