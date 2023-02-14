import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { RootState } from '../store'

const name = 'content_visible'

interface ContentVisibleState {
    content: 'auth' | 'search' | 'cart' | 'wishlist' | 'category'
    visible: boolean
}

const initialState: ContentVisibleState = {
    content: 'category',
    visible: false,
}

export const contentVisibleSlice = createSlice({
    name,
    initialState,
    reducers: {
        setContent: (state, action) => {
            state.content = action.payload
            state.visible = true
        },
    },
    extraReducers: {
        [HYDRATE]: (state: any, action) => {
            return {
                ...state,
                ...action.payload[name],
            }
        },
    },
})

export const { setContent } = contentVisibleSlice.actions

export const selectContent = (state: RootState) => state[name]

export default contentVisibleSlice.reducer
