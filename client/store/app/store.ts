import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { createLogger } from 'redux-logger'
import { authSlice } from '../features/authSlice'
import { categoriesSlice } from '../features/categoriesSlice'
import { wishListSlice } from '../features/wishlistSlice'
import { cartSlice } from '../features/cartSlice'
import storage from 'redux-persist/lib/storage'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist'
import { megaMenuSlice } from '../features/megaMenuSlice'

const logger = createLogger()

const rootReducer = combineReducers({
    categories: categoriesSlice.reducer,
    auth: authSlice.reducer,
    wishList: wishListSlice.reducer,
    cart: cartSlice.reducer,
    megaMenu: megaMenuSlice.reducer,
})

const persistConfig = {
    key: 'entitree_v1',
    whitelist: ['cart', 'wishList'],
    version: 5,
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    // middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
})

const makeStore = () => store

export const persistor = persistStore(store)

export default store

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>

export const wrapper = createWrapper<AppStore>(makeStore)
