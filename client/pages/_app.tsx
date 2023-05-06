import type { AppProps } from 'next/app'
import { FC } from 'react'

import Layout from '../components/core/Layout/Layout'
import { persistor, wrapper } from '../store/app/store'

import '../styles/globals.scss'
import { PersistGate } from 'redux-persist/integration/react'

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <PersistGate loading={null} persistor={persistor}>
           
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </PersistGate>
    )
}

export default wrapper.withRedux(App)
