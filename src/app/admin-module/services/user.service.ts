import { Injectable } from '@angular/core';
import {User} from '../user/user';


@Injectable()
export class UserService {

  constructor() {
  }
  // tslint:disable-next-line:typedef
  getUser() {
    let userList: User[];
    userList = [
      new User(1, 'Damina', 'Temirtay'),
      new User(2, 'Uldana', 'Usserbayeba'),
      new User(3, 'Botagoz', 'Dauletbek'),
      new User(4, 'Alibi', 'Tolegenov'),
      new User(5, 'Akzhan', 'Turarova')
    ];
    return userList;
  }
}
