import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  serverUrl='';

  constructor(
    private http: HttpClient
  ) {
    this.serverUrl=environment.serverUrl;
  }
   
  login(params: any): Observable<any>{
     const url = `${this.serverUrl}/commanloginuser`;
     return this.http.post<any>(url, params);
  }
}
