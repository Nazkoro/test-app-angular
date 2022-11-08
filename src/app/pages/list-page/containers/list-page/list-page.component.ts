import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { TransactionType } from 'src/app/pages/models/transaction-type';
import { UserInfo } from 'src/app/pages/models/user-info';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent {
  users: UserInfo[];
  filteredUsers!: UserInfo[];
  tab?: number;
  loading: boolean;

  constructor(private router: Router, private usersService: UsersService) {
    this.loading = true;
    this.users = this.usersService.getPreparedData();
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.filteredUsers = this.users;
        this.tab = Number(event.url.split('=')[1]);
        this.filteredUsers = this.filterUsers(this.filteredUsers);
      }
    });
    this.loading = false;
  }

  filterUsers(users: UserInfo[]) {
    console.log();
    if (!TransactionType[this.tab!]) return users;
    return users.filter((user) => user.type === TransactionType[this.tab!]);
  }
}
