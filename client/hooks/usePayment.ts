import { useRouter } from 'next/router'
import { getPayment, postPayment } from '../api/payment'
import { useEffect } from 'react'
import { clearCart } from '../store/features/cartSlice'
import { useDispatch } from 'react-redux'

interface IUsePaymentProps {
    total_price: number
}

interface IUsePaymentReturn {
    checkPayment: (paymentId: string) => Promise<void>
    makePayment: () => Promise<void>
}

const usePayment = ({ total_price }: IUsePaymentProps): IUsePaymentReturn => {
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        const paymentId = sessionStorage.getItem('paymentId')
        if (paymentId) {
            checkPayment(paymentId)
        }
    })
    const makePayment = async () => {
        try {
            const { data } = await postPayment(total_price)
            router.push(data.confirmation_url)

            sessionStorage.setItem('paymentId', data.id)
        } catch (err) {
            console.log((err as Error).message)
        }
    }

    const checkPayment = async (paymentId: string) => {
        try {
            const data = await getPayment(paymentId)
            if (data.status === 'succeeded') {
                resetCart()
            }
        } catch (err) {
            console.log((err as Error).message)
            resetCart()
        }
    }

    const resetCart = async () => {
        sessionStorage.removeItem('paymentId')
        dispatch(clearCart())
    }
    return { checkPayment, makePayment }
}

export default usePayment
