import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any;
  readonly baseURL ='http://127.0.0.1:3000/student/';

  constructor(private http:HttpClient) { }

  authenticateUser(user)
  {
   return this.http.get(this.baseURL,user);
  }
}
