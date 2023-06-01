import axios from 'axios'
import { ICheckPayment } from '../types/order'

const url = `http://localhost:5000/api/payment`

export const postPayment = async (total_price: number) => {
    try {
        const data = await axios.post(url, { amount: total_price })
        return data
    } catch (err) {
        console.error('Error amount payment status', err)
        throw err
    }
}

export const getPayment = async (paymentId: string) => {
    try {
        const { data } = await axios.post(`${url}/info/`, { paymentId })
        return data
    } catch (err) {
        console.error('Error fetching payment status', err)
        throw err
    }
}
