import React from 'react'
import styles from './Title.module.scss'

interface TitleProps {
    children: React.ReactNode
}

const Title: React.FC<TitleProps> = ({ children }) => {
    return (
        <div className={styles.categoryTitle}>
            <p>{children}</p>
        </div>
    )
}

export default Title
