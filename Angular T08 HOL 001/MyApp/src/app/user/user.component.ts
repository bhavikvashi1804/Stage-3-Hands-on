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
  message: string = '';
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
          this.message = JSON.stringify(data);
        },
        (error) => {
          console.log('Something went wrong');
          console.log('Error : ' + error);
          this.message = 'Something went wrong';
        },
        () => {
          console.log('Done');
        }
      );
  }

  updateUser() {
    this._userService
      .updateUser({
        name: 'morpheus',
        job: 'leader',
      })
      .subscribe(
        (data) => {
          console.log(data);
          this.message = JSON.stringify(data);
        },
        (error) => {
          console.log('Something went wrong');
          console.log('Error : ' + error);
          this.message = 'Something went wrong';
        },
        () => {
          console.log('Done');
        }
      );
  }

  deleteUser() {
    this._userService.deleteUser(2).subscribe(
      (data) => {
        console.log(data);
        if(data == null){
          //as per the API documentation if delete done then it returns null object
          this.message = "Delete done";
        }
      },
      (error) => {
        console.log('Something went wrong');
        console.log('Error : ' + error);
        this.message = 'Something went wrong';
      },
      () => {
        console.log('Done');
      }
    );
  }
}
