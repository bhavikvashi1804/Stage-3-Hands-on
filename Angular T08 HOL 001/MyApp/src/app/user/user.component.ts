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

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe((data) => {
      this.users = data["data"];
      console.log(this.users);
    });
  }
}
