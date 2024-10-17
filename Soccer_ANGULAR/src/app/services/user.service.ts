import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userURL: string = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  // Method to  user signup
  signup(user: any) {
    return this.http.post(this.userURL + '/sign-up', user);
  }

  // Method to user login
  login(user: any) {
    return this.http.post(this.userURL + '/login', user);
  }
}
