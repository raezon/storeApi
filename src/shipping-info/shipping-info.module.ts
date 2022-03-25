import { Module } from '@nestjs/common';
import { ShippingInfoService } from './shipping-info.service';

@Module({
  providers: [ShippingInfoService]
})
export class ShippingInfoModule {}
