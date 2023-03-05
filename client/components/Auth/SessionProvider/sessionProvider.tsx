import { Session } from '@supabase/supabase-js'
import { useRouter } from 'next/router'
import { ReactNode, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLoggedInUserLocal } from '../../../store/features/authSlice'

export const selectLocalSessionData = (): Session | null => {
    const localSessionDataString: string | null = localStorage.getItem(
        `sb-${process.env.SUPABASE_ID}-auth-token`,
    )

    if (!localSessionDataString) return null

    return JSON.parse(localSessionDataString)
}

type SessionProviderProps = {
    children: ReactNode
}

export const SessionProvider = ({ children }: SessionProviderProps) => {
    const router = useRouter()
    const dispatch = useDispatch()

    const getLoggedInUserDataOrRedirectToSignInPage = () => {
        const localSessionData: Session | null = selectLocalSessionData()

        dispatch(setLoggedInUserLocal({ localSessionData }))
    }

    useEffect(() => {
        getLoggedInUserDataOrRedirectToSignInPage()
    }, [])

    return <>{children}</>
}
