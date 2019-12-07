import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SignUpComponent],
  exports: [
    SignUpComponent
  ]

})
export class UiSignUpModule {}
