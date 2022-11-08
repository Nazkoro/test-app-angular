import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { UserInfo } from '../../models/user-info';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss'],
})
export class SummaryPageComponent implements OnInit {
  users!: UserInfo[];

  constructor(private router: Router, private usersService: UsersService) {}

  countType(type: string) {
    const fliteredType = this.users.filter((user) => user.type === type);
    return fliteredType.length;
  }

  ngOnInit(): void {
    this.users = this.usersService.getPreparedData();
  }
}
