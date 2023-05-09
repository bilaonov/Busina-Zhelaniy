import React from 'react'
import styles from '../../core/Header/NavBar/NavBar.module.scss'
import cName from 'classnames'
interface INavigationItemClickableProps {
    text: string
    onClick?: () => void
    onMouseEnter?: () => void
}

const NavigationItemClickable: React.FC<INavigationItemClickableProps> = ({
    text,
    onClick,
    onMouseEnter,
}) => {
    return (
        <div onMouseEnter={onMouseEnter} onClick={onClick} className={styles.navLinks}>
            <p>{text}</p>
            <span id="arrow"></span>
        </div>
    )
}

export default NavigationItemClickable
