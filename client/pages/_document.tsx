import { Html, Head, Main, NextScript } from 'next/document'
import Meta from '../components/core/Meta/Meta'

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fasthand&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,200;8..60,300;8..60,400;8..60,500;8..60,600;8..60,700&display=swap"
                    rel="stylesheet"
                />
                <Meta title="Busina Zhelaniy" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
