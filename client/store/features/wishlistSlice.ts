import { createAction, createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { HYDRATE } from 'next-redux-wrapper'
import fetchCategories from '../thunk/fetchCategoriesThunk'
import { IProducts } from '../../lib/sanity_studio/types/products.types'

interface WishListState {
    items: IProducts[]
}
const hydrate = createAction<RootState>(HYDRATE)

const initialState: WishListState = {
    items: [],
}

export const wishListSlice = createSlice<WishListState, SliceCaseReducers<WishListState>>({
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
        clearCart(state) {
            state = initialState
        },
    },
    extraReducers: () => {},
})

export const wishListActions = wishListSlice.actions

export const getFavorite = (state: RootState) => state.wishList.items

export default wishListSlice.reducer
