import { configureStore, Action, combineReducers, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { AnyAction } from '@reduxjs/toolkit'
import { categoriesSlice } from './categories/categoriesSlice'
import { contentVisibleSlice } from './visibleContent/visibleContentSlice'

const makeStore = () =>
    configureStore({
        reducer: {
            [categoriesSlice.name]: categoriesSlice.reducer,
            [contentVisibleSlice.name]: contentVisibleSlice.reducer,
        },
        devTools: true,
    })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>

export const wrapper = createWrapper<AppStore>(makeStore)
