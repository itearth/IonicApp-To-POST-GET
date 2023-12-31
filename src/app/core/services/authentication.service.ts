import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  serverUrl = 'https://new.hipoz.com/api';

  constructor(private http: HttpClient) {}

  login(params: any): Observable<any> {
    const url = `${this.serverUrl}/commanloginuser`;
    return this.http.post<any>(url, params);
  }

  getNewsFeed(): Observable<any> {
    const url = `${this.serverUrl}/getnewsfeed`;
    return this.http.get<any>(url);
  }
}
