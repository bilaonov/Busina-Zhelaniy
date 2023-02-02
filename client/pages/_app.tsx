import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/core/Layout/Layout'
import { Head } from 'next/document'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
