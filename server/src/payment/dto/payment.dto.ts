import { IsNotEmpty, IsNumber } from 'class-validator';

export class PaymentDto {
  @IsNumber()
  amount: number;
}

export class PaymentCheckDto {
  @IsNotEmpty()
  readonly paymentId: string;
}
