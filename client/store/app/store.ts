import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { createLogger } from 'redux-logger'
import { authSlice } from '../features/authSlice'
import { categoriesSlice } from '../features/categoriesSlice'
import { wishListSlice } from '../features/wishlistSlice'
import { cartSlice } from '../features/cartSlice'

const logger = createLogger()

const makeStore = () =>
    configureStore({
        reducer: {
            categories: categoriesSlice.reducer,
            auth: authSlice.reducer,
            wishList: wishListSlice.reducer,
            cart: cartSlice.reducer,
        },
        // middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
    })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>

export const wrapper = createWrapper<AppStore>(makeStore)
