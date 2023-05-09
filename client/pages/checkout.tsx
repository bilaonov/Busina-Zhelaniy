import React from 'react'
import { ICardProduct, getCart } from '../store/features/cartSlice'
import { useSelector } from 'react-redux'
import Container from '../components/ui/Container/Container'

const Checkout = () => {
    const { items, total_price } = useSelector(getCart)
    console.log({ cart: items, total_price: total_price })
    return (
        <Container>
            {items.map((order: ICardProduct) => (
                <h1>{order.title}</h1>
            ))}
            <h1>{total_price}</h1>
        </Container>
    )
}

export default Checkout
