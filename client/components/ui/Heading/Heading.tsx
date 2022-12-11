import React from 'react'
import styles from './Heading.module.scss'

interface HeadingProps {
    className?: string
    children?: React.ReactNode
    title: string
}
const Heading: React.FC<HeadingProps> = ({ className, children, title }) => {
    const headingStyles = `${styles.heading} ${className ? className : ''}`
    return (
        <div className={headingStyles}>
            {title}
            <span className={styles.text}>{children}</span>
        </div>
    )
}

export default Heading
