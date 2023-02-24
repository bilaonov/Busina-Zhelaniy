import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion'

import { FC } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export interface LayoutProps {
    children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <LazyMotion features={domAnimation}>
                <AnimatePresence mode="wait">
                    <Header />
                    {children}
                    <Footer />
                </AnimatePresence>
            </LazyMotion>
        </>
    )
}

export default Layout
