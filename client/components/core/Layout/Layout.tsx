import { FC } from 'react'
import { LayoutProps } from '../../../types/Layout/Layout'
import VideoContent from '../../Home/VideoContent/VideoContent'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout
