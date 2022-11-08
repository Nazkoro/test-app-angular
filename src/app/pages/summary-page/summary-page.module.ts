import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { SummaryPageRoutingModule } from './summary-page-routing.module';

@NgModule({
  declarations: [SummaryPageComponent],
  imports: [CommonModule, SummaryPageRoutingModule],
})
export class SummaryPageModule {}
