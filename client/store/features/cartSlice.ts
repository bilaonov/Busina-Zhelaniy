import { ActionCreator, PayloadAction, SliceCaseReducers, createSlice } from '@reduxjs/toolkit'
import { IProducts } from '../../lib/sanity_studio/types/products.types'
import { RootState } from '../app/store'

interface CartState {
    items: IProducts[]
}

const initialState: CartState = {
    items: [],
}

export const cartSlice = createSlice<CartState, SliceCaseReducers<CartState>>({
    name: 'cart',
    initialState,
    reducers: {
        addToProductCart: (state: CartState, action: PayloadAction<IProducts>) => {
            state.items.push({ ...action.payload })
        },
        removeProductCart: (state: CartState, action: PayloadAction<string>) => {
            const productSlug = action.payload
            state.items = state.items.filter((item) => item.slug.current !== productSlug)
        },
        clearCart(state) {
            state = initialState
        },
    },
})

export const cartActions = cartSlice.actions

export const getCart = (state: RootState) => state.cart.items

export default cartSlice.reducer
