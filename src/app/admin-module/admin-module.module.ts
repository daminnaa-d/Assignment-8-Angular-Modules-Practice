import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {UserService} from './services/user.service';
import {GroupService} from './services/group.service';

@NgModule({
  declarations: [
    AdminModuleComponent, UserComponent, GroupComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminModuleRoutingModule
  ],
  providers: [UserService, GroupService],
  exports: [
    AdminModuleComponent
  ]
})
export class AdminModuleModule { }
