import { ICategory } from './../../lib/sanity_studio/types/category.types'
import { createAction, createSlice, SliceCaseReducers } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { HYDRATE } from 'next-redux-wrapper'
import fetchCategories from '../thunk/fetchCategoriesThunk'

interface CategoriesState {
    list: ICategory[]
}
const hydrate = createAction<RootState>(HYDRATE)

const initialState: CategoriesState = {
    list: [],
}

export const categoriesSlice = createSlice<CategoriesState, SliceCaseReducers<CategoriesState>>({
    name: 'categories',
    initialState,

    reducers: {
        setCategories: (state: CategoriesState, action) => {
            state.list = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(hydrate, (state: CategoriesState, action) => {
            state.list = action.payload.categories.list
        })
        // .addCase(fetchCategories.pending, (state) => {
        //     state.status = 'loading'
        // })
        // .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        //     return { ...state, status: 'succeeded', list: payload }
        // })
        // .addCase(fetchCategories.rejected, (state, { payload }) => {
        //     return { ...state, status: 'failed' }
        // })
    },
})

export const { setCategories } = categoriesSlice.actions

export const selectCategories = (state: RootState) => state.categories

export default categoriesSlice.reducer
