import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenService} from '../token.service';
import {User} from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  private usersArray: User[];

  constructor(private http: HttpClient, private token: TokenService) {
    this.getUsers();
  }

  getUsers() {
    this.http.get<User[]>(this.token.getUrl() + '/user', {
      headers: {
        token: this.token.getToken()
      }
    }).subscribe(
      (data) => {
        this.usersArray = data;
      }
    );
  }

  get users() {
    return this.usersArray;
  }

  deleteUser(id: number) {
    this.http.delete(this.token.getUrl() + '/user/' + id, {
      headers: {
        token: this.token.getToken()
      }
    }).subscribe(
      (data) => {
        console.log(data);
        this.getUsers();
      }
    );
  }

  ngOnInit(): void {

  }

}
