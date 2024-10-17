import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  private TOKEN_KEY = 'auth-token';
  private USER_KEY = 'auth-user';

  constructor() {}

  // Save the token to sessionStorage
  saveToken(token: string): void {
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  // Get the token from sessionStorage
  getToken(): string | null {
    return window.sessionStorage.getItem(this.TOKEN_KEY);
  }

  // Remove the token from sessionStorage
  signOut(): void {
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.removeItem(this.USER_KEY);
  }

  // Save user details to sessionStorage
  saveUser(user: any): void {
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  // Get user details from sessionStorage
  getUser(): any {
    const user = window.sessionStorage.getItem(this.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }
}
