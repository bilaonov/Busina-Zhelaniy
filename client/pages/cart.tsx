import Head from 'next/head'
import React from 'react'
import Meta from '../components/core/Meta/Meta'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../store/features/cartSlice'

const Cart = () => {
    const dispacth = useDispatch()
    const cartItems = useSelector(getCart)

    console.log(cartItems)
    return (
        <>
            <Meta title="Корзина" />

            <div>Корзинаdd</div>
        </>
    )
}

export default Cart
