import {Component, OnInit} from '@angular/core';
import {TokenService} from '../token.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private tokenService: TokenService, private http: HttpClient, private router: Router) {

  }

  username = '';
  password = '';

  login(): void {
    const url = this.tokenService.getUrl() + '/auth';

    this.http.post(url, {
      username: this.username,
      password: this.password
    }).subscribe(
      (data) => {
        this.tokenService.setToken(data);
        this.router.navigateByUrl('dashboard');
      }
    );
  }

  ngOnInit(): void {
  }

}
