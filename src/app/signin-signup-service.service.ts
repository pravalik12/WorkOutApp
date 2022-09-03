import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SigninSignup } from './SigninSignup';

@Injectable({
  providedIn: 'root'
})
export class SigninSignupServiceService {

  private baseURL = "http://localhost:8080/gym/login/users";

  constructor(private httpClient: HttpClient) { }
  
  getUsersList(): Observable<SigninSignup[]>{
    return this.httpClient.get<SigninSignup[]>(`${this.baseURL}`);
  }
  createUser(signup: SigninSignup): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, signup);
  }
  updateUser(id: number, signup: SigninSignup): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, signup);
  }
}
