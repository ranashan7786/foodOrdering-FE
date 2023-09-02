
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  signup // Check if the user is authenticated by verifying their token or session
    (formData: any) {
      throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    // Send a POST request to the server to log in the user
    const body = { email, password };
    return this.httpClient.post(`${this.apiUrl}/login`, body);
  }

  register(email: string, password: string, name: string, confirmPassword: string ): Observable<any> {
    const signUpPayload = new FormData();
    signUpPayload.append('email', email)
    signUpPayload.append('password', password)
    signUpPayload.append('conformPassword', confirmPassword)
    signUpPayload.append('name', name)
    signUpPayload.append('role', 'buyer')

    // Send a POST request to the server to register a new user
    return this.httpClient.post(`${this.apiUrl}/register`, signUpPayload);
  }

  logout(): void {
    // Perform logout operations, such as clearing session data or tokens
  }

  isAuthenticated(): boolean {
    // Check if the user is authenticated by verifying their token or session
    return true; // Replace with actual authentication logic
  }
}


