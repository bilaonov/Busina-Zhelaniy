import { IsNumber } from 'class-validator';

export class PaymentDto {
  @IsNumber()
  amount: number;
  user_info?: any;
}
