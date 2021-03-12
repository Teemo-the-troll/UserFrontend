import { Component, OnInit } from '@angular/core';
import {TokenService} from '../token.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email = '';
  username = '';
  password = '';

  constructor(private tokenService: TokenService, private http: HttpClient) {

  }
  register(){
    this.http.post(this.tokenService.getUrl() + '/user', {
      email: this.email,
      username: this.username,
      password: this.password
    }).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  ngOnInit(): void {
  }

}
