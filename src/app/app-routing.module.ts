import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CORE_ROUTES} from "./routes/core-routes";


@NgModule({
  imports: [RouterModule.forRoot(CORE_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
