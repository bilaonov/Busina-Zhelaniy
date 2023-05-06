import React from 'react'
import styles from './SideBar.module.scss'

interface IProps {
    children: any
}

const SideBar: React.FC<IProps> = ({ children }) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarPage}>test</div>
        </div>
    )
}

export default SideBar
