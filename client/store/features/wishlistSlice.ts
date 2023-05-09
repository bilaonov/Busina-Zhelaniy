import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { IProducts } from '../../lib/sanity_studio/types/products.types'

interface WishListState {
    items: IProducts[]
}

const initialState: WishListState = {
    items: [],
}

export const wishListSlice = createSlice({
    name: 'wishlist',
    initialState,

    reducers: {
        addToWishList: (state: WishListState, action: PayloadAction<IProducts>) => {
            state.items.push({ ...action.payload })
        },
        removeWishList: (state: WishListState, action: PayloadAction<string>) => {
            const productSlug = action.payload
            state.items = state.items.filter((item) => item.slug.current !== productSlug)
        },
        clearWishList: () => initialState,
    },
    extraReducers: () => {},
})

export const { addToWishList, removeWishList, clearWishList } = wishListSlice.actions

export const getFavorite = (state: RootState) => state.wishList.items

export default wishListSlice.reducer
