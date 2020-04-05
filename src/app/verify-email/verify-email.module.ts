// Simo Partanen 1900414
// Inessa Rif    1901057
// Daniel Rif    1901058

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyEmailPageRoutingModule } from './verify-email-routing.module';

import { VerifyEmailPage } from './verify-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyEmailPageRoutingModule
  ],
  declarations: [VerifyEmailPage]
})
export class VerifyEmailPageModule {}
