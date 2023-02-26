import { axiosClassic } from '../api/axios'
import { IPaymentResponse } from '../types/payment.inteface'

const PAYMENT = 'payment'

export const PaymentService = {
    async createPayment(amount: number) {
        const { data } = await axiosClassic.post<IPaymentResponse>(PAYMENT, {
            amount,
        })

        return data
    },
}
