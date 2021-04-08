import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  isLoading: boolean = true;
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe(
      (data) => {
        this.users = data['data'];
        console.log(this.users);
      },
      (error) => {
        console.log('Something went wrong');
        console.log('Error : ' + error);
      },
      () => {
        console.log('Done');
        this.isLoading = false;
      }
    );
  }

  createANewUser() {
    this._userService
      .createUser({
        name: 'morpheus',
        job: 'leader',
      })
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log('Something went wrong');
          console.log('Error : ' + error);
        },
        () => {
          console.log('Done');
        }
      );
  }
}
