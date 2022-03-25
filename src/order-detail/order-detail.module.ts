import { Module } from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';

@Module({
  providers: [OrderDetailService]
})
export class OrderDetailModule {}
