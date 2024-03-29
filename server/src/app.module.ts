require('dotenv').config();
import { Module } from '@nestjs/common';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [PaymentModule],
  providers: [],
  controllers: [],
})
export class AppModule {}
