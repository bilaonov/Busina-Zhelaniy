import React, { Dispatch, SetStateAction, useEffect } from 'react'
import styles from '../Header.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { getVisible } from '../../../../store/features/megaMenuSlice'

interface MenuContentProps {
    visibleContent: any
    children?: React.ReactNode
}

const MenuContent: React.FC<MenuContentProps> = ({ children, visibleContent }) => {
    const { visible } = useSelector(getVisible)

    const sidebar = visibleContent === 'cart' || visibleContent === 'wishlist'

    useEffect(() => {})
    return (
        <AnimatePresence>
            {visible && (
                <div className={!sidebar ? styles.menuContentWrap : styles.menuSidebar}>
                    <motion.div
                        animate={{ y: '0%', opacity: 1 }}
                        initial={{ y: '-300%', opacity: 0 }}
                        exit={{ y: '-300%', opacity: 0 }}
                        className={styles.menuContent}
                        transition={{ duration: 1 }}
                    >
                        <nav className={styles.menuNavContent}>{children}</nav>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default MenuContent
