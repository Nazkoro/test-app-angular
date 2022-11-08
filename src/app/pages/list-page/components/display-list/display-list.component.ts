import { Component, Input } from '@angular/core';
import { UserInfo } from '../../../models/user-info';
@Component({
  selector: 'display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.scss']
})
export class DisplayListComponent {
  @Input() user!: UserInfo;
  constructor() { }

 
}
