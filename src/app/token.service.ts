import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: string;
  private url = 'http://localhost:4200/UserAPI/api';
  constructor() { }

  getToken(): string{
    return this.token;
  }

  getUrl(): string{
    return this.url;
  }

  setToken(token): void{
    this.token = token;
  }
}
