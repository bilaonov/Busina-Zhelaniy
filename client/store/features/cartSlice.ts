import { ActionCreator, PayloadAction, SliceCaseReducers, createSlice } from '@reduxjs/toolkit'
import { IProducts } from '../../lib/sanity_studio/types/products.types'
import { RootState } from '../app/store'
import { Image } from '../../lib/sanity_studio/types/image.types'
import { toast } from 'react-toastify'

export interface ICardProduct {
    id: string
    color: string
    image: Image[]
    price: number
    slug: string
    title: string
    count: number
    size?: string
    colorHex: string
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
            const findItem = state.items.find(
                (obj) =>
                    obj.id === action.payload.id &&
                    obj.color === action.payload.color &&
                    obj.size === action.payload.size,
            )
            if (findItem) {
                findItem.count = (findItem.count || 0) + 1
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                })
            }

            state.total_price = state.items.reduce((sum, obj) => {
                return obj.price * (obj.count ?? 1) + sum
            }, 0)
        },
        removeProductCart: (
            state: CartState,
            action: PayloadAction<{
                productSlug: string
                productSize: string
                productColor: string
            }>,
        ) => {
            const productSlug = action.payload.productSlug
            const productSize = action.payload.productSize
            const productColor = action.payload.productColor
            state.items = state.items.filter(
                (item) =>
                    item.slug !== productSlug ||
                    item.size !== productSize ||
                    item.color !== productColor,
            )

            state.total_price = state.items.reduce((sum, obj) => sum + obj.price, 0)
        },
        clearCart: () => initialState,
    },
})

export const { clearCart, addToProductCart, removeProductCart } = cartSlice.actions

export const getCart = (state: RootState) => state.cart

export const totalPrice = (state: RootState) => state.cart.total_price

export default cartSlice.reducer
