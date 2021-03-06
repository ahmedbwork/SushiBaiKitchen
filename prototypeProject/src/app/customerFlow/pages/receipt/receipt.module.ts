import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceiptPageRoutingModule } from './receipt-routing.module';

import { ReceiptPage } from './receipt.page';
import { CustomerComponentsModule } from '../../components/customer-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerComponentsModule,
    ReceiptPageRoutingModule
  ],
  declarations: [ReceiptPage]
})
export class ReceiptPageModule {}
