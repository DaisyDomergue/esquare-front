import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  public isAuthenticated(): boolean {
    const usertype=localStorage.getItem("type");
    return usertype && usertype.length > 0;
  }
}
