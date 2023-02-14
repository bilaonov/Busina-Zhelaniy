import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { CategoriesState } from '../../lib/sanity_studio/types/category.types'
import { RootState } from '../store'

const name = 'category'

const initialState: CategoriesState = {
    list: [],
}

export const categoriesSlice = createSlice<
    CategoriesState,
    SliceCaseReducers<CategoriesState>,
    typeof name
>({
    name,
    initialState,
    reducers: {
        setCategories: (state: CategoriesState, action) => {
            state.list = action.payload
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

export const { setCategories } = categoriesSlice.actions

export const selectCategories = (state: RootState) => state[name]

export default categoriesSlice.reducer
