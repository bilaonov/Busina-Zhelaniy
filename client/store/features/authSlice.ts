import {
    ActionCreator,
    createAction,
    createSlice,
    PayloadAction,
    SliceCaseReducers,
} from '@reduxjs/toolkit'
import { Session, User } from '@supabase/supabase-js'
import { HYDRATE } from 'next-redux-wrapper'
import { CustomError } from '../../types/error'
import { RequestStatus } from '../../types/request-status'
import { RootState } from '../app/store'

const hydrate = createAction<RootState>(HYDRATE)

export interface IAuthState {
    session: Session | null
    status: RequestStatus
}

const initialState: IAuthState = {
    session: null,
    status: RequestStatus.IDLE,
}

export const authSlice = createSlice<IAuthState, SliceCaseReducers<IAuthState>>({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (
            state: IAuthState,
            {
                payload,
            }: PayloadAction<{
                error: RequestStatus
                session: Session
            }>,
        ) => {
            state.session = payload.session
            state.status = payload.error ? RequestStatus.FAILED : RequestStatus.COMPLETED
        },
        setLoggedInUserLocal: (
            state: IAuthState,
            { payload }: PayloadAction<{ localSessionData: Session }>,
        ) => {
            state.session = payload.localSessionData
        },
        signOut: (state: IAuthState, { payload }: PayloadAction<{ error: CustomError | null }>) => {
            if (!payload.error) {
                state.session = null
                state.status = RequestStatus.IDLE
                return
            }
        },
    },
    extraReducers: (builder) => {
        // builder.addCase(hydrate, (state: IAuthState, action) => {
        //     state.session = action.payload.auth.session
        // })
    },
})

export const { signIn, setLoggedInUserLocal, signOut } = authSlice.actions

export const userState = (state: RootState) => state.auth
export const userId = (state: RootState) => state.auth.session?.user.id

export default authSlice.reducer
