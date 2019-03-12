import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatSnackBarModule],
  declarations: [],
  exports: [],
  entryComponents: [],
  providers: [MatSnackBarModule]
})
export class SharedModule {}
