import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: User[] = this.userService.getUser();
  constructor(private userService: UserService) { }
  // tslint:disable-next-line:typedef
  getUser(){
    return this.userList;
  }
  ngOnInit(): void {
  }
}
