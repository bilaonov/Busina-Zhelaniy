import Head from 'next/head'
import Menu from './Menu/Menu'
import Content from '../../Home/VideoContent/VideoContent'
import styles from './Header.module.scss'
import { ICategory } from '../../../lib/sanity_studio/types/category.types'

interface Props {
    categories: ICategory[]
}
const Header = ({ categories }: Props) => {
    return (
        <>
            <Head>
                <title>Busina Zhelaniy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={styles.main}>
                <Menu categories={categories} />
            </div>
        </>
    )
}

export default Header
