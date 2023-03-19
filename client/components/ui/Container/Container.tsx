import React from 'react'
import styles from './Container.module.scss'
import cName from 'classnames'
interface ContainerProps {
    className?: string
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    const rootClassName = cName(styles[`${className}`], styles.container)
    return (
        <div className={rootClassName}>
            <div className={styles.box}>{children}</div>
        </div>
    )
}

export default Container
