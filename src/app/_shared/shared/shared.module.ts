import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe, AgePipe } from 'src/app/_pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OrderByPipe,
    AgePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports:[
    OrderByPipe,
    AgePipe
  ]
})
export class SharedModule { }
