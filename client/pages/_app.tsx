import type { AppProps } from 'next/app'
import { FC } from 'react'

import { wrapper } from '../redux/store'
import { Provider } from 'react-redux'

import Layout from '../components/core/Layout/Layout'

import '../styles/globals.scss'

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
    const { store, props } = wrapper.useWrappedStore(rest)
    return (
        <Provider store={store}>
            <Layout>
                <Component {...props.pageProps} />
            </Layout>
        </Provider>
    )
}

export default MyApp
