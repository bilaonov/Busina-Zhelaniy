import { FC } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export interface LayoutProps {
    children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            {/* <Footer /> */}
        </>
    )
}

export default Layout
