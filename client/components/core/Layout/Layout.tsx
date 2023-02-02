import { FC } from 'react'
import { ICategory } from '../../../lib/sanity_studio/types/category.types'
import VideoContent from '../../Home/VideoContent/VideoContent'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export interface LayoutProps {
    children: React.ReactNode
    categories: ICategory[]
}

const Layout: FC<LayoutProps> = ({ children, categories }) => {
    return (
        <>
            <Header categories={categories} />
            {children}
            <Footer />
        </>
    )
}

export default Layout
