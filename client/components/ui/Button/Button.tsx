//@ts-nocheck
import React from 'react'
import styles from './Button.module.scss'
import cName from 'classnames'

interface IButton {
    onClick?: () => void
    href?: string
    type?: 'button' | 'reset' | 'submit'
    title?: string
    variant?: 'default' | 'primary' | 'outline' | 'light'
    style?: React.CSSProperties
    disabled?: boolean
    icon?: React.ReactElement
    text?: boolean
    loading?: boolean
    className?: string
}

const Button: React.FC<IButton> = ({
    onClick,
    href,
    type,
    title,
    variant,
    style,
    disabled,
    icon,
    text,
    loading,
    className,
}) => {
    const rootClassName = cName(className, styles.btn, styles[variant])
    return (
        <>
            <button
                type={type}
                onClick={onClick}
                className={rootClassName}
                style={style}
                disabled={disabled}
            >
                <>
                    {icon && <p className={styles.icon}>{icon}</p>}
                    {title}
                </>
            </button>
        </>
    )
}

export default Button
