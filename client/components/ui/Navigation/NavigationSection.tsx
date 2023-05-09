import React from 'react'
import styles from '../../core/Header/NavBar/NavBar.module.scss'
import cName from 'classnames'

interface INavigationSection {
    children: any
    className?: any
}

const NavigationSection: React.FC<INavigationSection> = ({ children, className }) => {
    const rootClassName = cName(className, styles.btn)
    return <div className={rootClassName}>{children}</div>
}

export default NavigationSection
