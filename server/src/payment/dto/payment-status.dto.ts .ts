export class PaymentResponse {
  id: string;
  status: string;
  paid: boolean;
  amount: AmountPayment;
  authorization_details?: any;
  captured_at: Date;
  expires_at: Date;
  created_at: Date;
  description: string;
  metadata?: any;
  recipient?: any;
  refundable: boolean;
  test: boolean;
  confirmation: Confirmation;
  payment_method: PaymentMethod;
  refunded_amount: RefundedAmount;
}



export class PaymentStatusDto {
  event:
    | 'payment.succeeded'
    | 'payment.waiting_for_capture'
    | 'payment.canceled'
    | 'refund.succeeded';
  type: string;
  object: ObjectPayment;
}

class AmountPayment {
  value: string;
  currency: string;
}

class ObjectPayment {
  id: string;
  status: string;
  amount?: AmountPayment;
  payment_method: {
    type: string;
    id: string;
    saved: boolean;
    title: string;
    card: object;
  };
  created_at: string;
  expires_at: string;
}

class PaymentMethod {
  id: string;
  type: string;
  saved: boolean;
  title?: string;
  card?: Card;
  accaunt?: any;
  phone?: any;
  payer?: any;
}

class RefundedAmount {
  value: number;
  currency: string;
}

class Card {
  first6: string;
  last4: string;
  expiry_year: string;
  expiry_month: string;
  card_type: string;
  issuer_country: string;
}

class Confirmation {
  type: string;
  return_url: string;
  confirmation_url: string;
}
