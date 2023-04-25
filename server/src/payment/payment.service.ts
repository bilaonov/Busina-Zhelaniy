import { Injectable } from '@nestjs/common';
import * as YooKassa from 'yookassa';
import {
  PaymentResponse,
  PaymentStatusDto,
} from './dto/payment-status.dto.ts ';
import { PaymentDto } from './dto/payment.dto';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

const yooKassa = new YooKassa({
  shopId: process.env.SHOP_ID,
  secretKey: process.env.PAYMENT_TOKEN,
});

@Injectable()
export class PaymentService {
  private supabaseClient: SupabaseClient;
  constructor() {
    this.supabaseClient = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY,
    );
  }

  async payment(paymentDto: PaymentDto) {
    const payment = {
      amount: {
        value: paymentDto.amount.toFixed(2),
        currency: 'RUB',
      },
      payment_method_data: {
        /* CHANGE */
        type: 'bank_card',
      },
      confirmation: {
        type: 'redirect',
        /* CHANGE */
        return_url: 'http://localhost:3000/thanks',
      },
      /* CHANGE */
      description: 'Order ',
    };
    const { id, confirmation }: PaymentResponse = await yooKassa.createPayment(
      payment,
    );

    const paymentInfo = {
      order_id: id,
      amount: paymentDto.amount.toFixed(2),
      user_info: 'test',
    };

    const { data, error } = await this.supabaseClient
      .from('payment')
      .insert(paymentInfo);

    if (error) {
      throw new Error(error.message);
    }
    return confirmation.confirmation_url;
  }

  async paymentStatus(dto: PaymentStatusDto) {
    /* Confirm Payment */
    if (dto.event !== 'payment.waiting_for_capture') return;

    const payment = await yooKassa.capturePayment(dto.object.id);
    return payment;
  }
}
