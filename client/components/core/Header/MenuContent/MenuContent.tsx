import React, { Dispatch, SetStateAction, useEffect } from 'react'
import styles from '../Header.module.scss'
import { motion, AnimatePresence } from 'framer-motion'

interface MenuContentProps {
    setVisible: Dispatch<SetStateAction<boolean>>
    visible: boolean
    children?: React.ReactNode
}

const MenuContent: React.FC<MenuContentProps> = ({ children, setVisible, visible }) => {
    useEffect(() => {
        console.log({ click: visible, onClick: setVisible })
    }, [setVisible, visible])

    return (
        <AnimatePresence>
            {visible && (
                <div className={styles.menuContentWrap}>
                    <motion.div
                        animate={{ y: '0%', opacity: 1 }}
                        initial={{ y: '-300%', opacity: 0 }}
                        exit={{ y: '-300%', opacity: 0 }}
                        className={styles.menuContent}
                        transition={{ duration: 1 }}
                    >
                        <nav className={styles.menuNavContent}>{children}</nav>

                        {/* <button
                            onClick={() => setVisible(false)}
                            className={styles.menuBack + ' ' + styles.unbutton}
                        >
                            <svg
                                width="10"
                                height="182"
                                viewBox="0 0 10 121"
                                preserveAspectRatio="xMidYMin meet"
                            >
                                <path d="M5 0 .5 9h9L5 0Zm.5 120.5V8h-1v113h1v-.5Z" />
                            </svg>
                        </button> */}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default MenuContent
