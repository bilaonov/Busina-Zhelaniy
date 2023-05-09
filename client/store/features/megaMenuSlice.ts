import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface IMegaMenuState {
    visible: boolean
}

const initialState: IMegaMenuState = {
    visible: false,
}

export const megaMenuSlice = createSlice({
    name: 'megaMenu',
    initialState,
    reducers: {
        onVisible: (state) => {
            state.visible = !state.visible
        },
        closeMenu: (state) => {
            state.visible = false
        },
    },
    extraReducers: (builder) => {
        // builder.addCase(hydrate, (state: IAuthState, action) => {
        //     state.session = action.payload.auth.session
        // })
    },
})

export const { onVisible, closeMenu } = megaMenuSlice.actions

export const getVisible = (state: RootState) => state.megaMenu

export default megaMenuSlice.reducer
