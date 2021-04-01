import { Component, OnInit } from '@angular/core';
import {Group} from './group';
import {GroupService} from '../services/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  groupList: Group[] = this.groupService.getGroup();
  constructor(private groupService: GroupService) { }
  // tslint:disable-next-line:typedef
  getUser(){
    return this.groupList;
  }
  ngOnInit(): void {
  }

}
