import { ActionCreator, PayloadAction, SliceCaseReducers, createSlice } from '@reduxjs/toolkit'
import { IProducts } from '../../lib/sanity_studio/types/products.types'
import { RootState } from '../app/store'
import { Image } from '../../lib/sanity_studio/types/image.types'
import { toast } from 'react-toastify'

interface ICardProduct {
    id: string
    color: string
    image: Image[]
    price: number
    slug: string
    title: string
    count: number
}

interface CartState {
    items: ICardProduct[]
    total_price: any
}

const initialState: CartState = {
    items: [],
    total_price: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToProductCart: (state: CartState, action: PayloadAction<ICardProduct>) => {
            // state.items.push({ ...action.payload })
            const findItem = state.items.find((obj) => obj.id === action.payload.id)
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                })
            }

            state.total_price = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum
            }, 0)
        },
        removeProductCart: (state: CartState, action: PayloadAction<string>) => {
            const productSlug = action.payload
            state.items = state.items.filter((item) => item.slug !== productSlug)
            state.total_price = state.items.reduce((sum, obj) => obj.price - sum, 0)
        },
        clearCart: () => initialState,
    },
})

export const { clearCart, addToProductCart, removeProductCart } = cartSlice.actions

export const getCart = (state: RootState) => state.cart.items
export const totalPrice = (state: RootState) => state.cart.total_price

export default cartSlice.reducer
