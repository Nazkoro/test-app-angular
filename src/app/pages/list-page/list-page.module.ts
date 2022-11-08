import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './containers/list-page/list-page.component';
import {ListPageRoutingModule} from "./list-page-routing.module";
import { DisplayListComponent } from './components/display-list/display-list.component';
import { ListNavbarComponent } from './components/list-navbar/list-navbar.component';




@NgModule({
  declarations: [
    ListPageComponent,
    DisplayListComponent,
    ListNavbarComponent
  ],
  imports: [
    CommonModule,ListPageRoutingModule
  ]
})
export class ListPageModule { }
