import { Injectable } from '@angular/core';
import {Group} from '../group/group';


@Injectable()
export class GroupService {

  constructor() {
  }
  // tslint:disable-next-line:typedef
  getGroup() {
    let groupList: Group[];
    groupList = [
      new Group(1, 'IS'),
      new Group(2, 'JUR'),
      new Group(3, 'FIN'),
      new Group(4, 'CS'),
      new Group(5, 'ITM'),
    ];
    return groupList;
  }
}
