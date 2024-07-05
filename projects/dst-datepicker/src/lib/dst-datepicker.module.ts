import { NgModule } from '@angular/core';
import { DstDatepickerComponent } from './dst-datepicker.component';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DstDatepickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DstDatepickerComponent
  ],
  providers: [
    DatePipe
  ]
})
export class DstDatepickerModule { }
