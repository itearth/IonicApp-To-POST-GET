import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  serverUrl = 'https://new.hipoz.com/api';

  getLoggedInUserId(): number | null {
    const userId = localStorage.getItem('userId');
    return userId ? +userId : null;
  }

  constructor(private http: HttpClient) { }

  login(params: any): Observable<any> {
    const url = `${this.serverUrl}/commanloginuser`;
    return this.http.post<any>(url, params);
  }

  getNewsFeed(): Observable<any> {
    const url = `${this.serverUrl}/getnewsfeed?status_enum_id=1&news_user_type_id=149`;
    return this.http.get<any>(url);
  }

  getUserProfile(userId: number): Observable<any> {
    const url = `${this.serverUrl}/userprofile?user_id=${userId}`;
    return this.http.get<any>(url).pipe(
      tap(response => console.log('getUserProfile response:', response)),
      catchError(error => {
        console.error('Error in getUserProfile:', error);
        throw error;
      })
    );
  }
  
  
  updateUserProfileDescription(userId: number, description: string): Observable<any> {
    const url = `${this.serverUrl}/updateuserprofile`;
    const body = {
      user_id: userId,
      description: description,
    };

    return this.http.put<any>(url, body);
  }

}
