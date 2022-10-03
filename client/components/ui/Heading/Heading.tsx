import React from 'react'
import styles from './Heading.module.scss'

interface HeadingProps {
    className?: string
    children: React.ReactNode
}
const Heading: React.FC<HeadingProps> = ({ className, children }) => {
    const headingStyles = `${styles.heading} ${className ? className : ''}`
    return <div className={headingStyles}>{children}</div>
}

export default Heading
