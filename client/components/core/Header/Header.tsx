import Head from 'next/head'
import Menu from './Menu/Menu'
import Content from './Content/Content'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <>
            <Head>
                <title>Busina Zhelaniy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={styles.main}>
                <Content />
                <Menu />
            </div>
        </>
    )
}

export default Header
