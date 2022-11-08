import { Component, Input} from '@angular/core';

@Component({
  selector: 'list-navbar',
  templateUrl: './list-navbar.component.html',
  styleUrls: ['./list-navbar.component.scss']
})
export class ListNavbarComponent {
  @Input() tab?: number;
  constructor() { }

 

}
