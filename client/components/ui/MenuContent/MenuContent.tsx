import React, { RefObject } from 'react'
import styles from '../../core/Header/Header.module.scss'

interface MenuContentProps {
    children: React.ReactNode
    closeMenu: (event: React.MouseEvent<HTMLElement>) => void
    menuContentRef: RefObject<HTMLDivElement>
}

const MenuContent: React.FC<MenuContentProps> = ({ children, closeMenu, menuContentRef }) => {
    return (
        <div className={styles.menuContentWrap}>
            <div className={styles.menuContent} ref={menuContentRef}>
                <nav className={styles.menuNavContent}>{children}</nav>
                <button onClick={closeMenu} className={styles.menuBack + ' ' + styles.unbutton}>
                    <svg
                        width="10"
                        height="182"
                        viewBox="0 0 10 121"
                        preserveAspectRatio="xMidYMin meet"
                    >
                        <path d="M5 0 .5 9h9L5 0Zm.5 120.5V8h-1v113h1v-.5Z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default MenuContent
