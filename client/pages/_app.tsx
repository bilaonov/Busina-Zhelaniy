import type { AppProps } from 'next/app'
import { FC } from 'react'

import Layout from '../components/core/Layout/Layout'
import { wrapper } from '../store/app/store'

import '../styles/globals.scss'

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default wrapper.withRedux(App)
