import Link from 'next/link'
import React from 'react'
import styles from '../../core/Header/NavBar/NavBar.module.scss'

interface NavigationLinkProps {
    href: string
    text: string
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ href, text }) => (
    <Link href={href}>
        <a className={styles.navLinks}>
            <p>{text}</p>
            <span id="arrow"></span>
        </a>
    </Link>
)

export default NavigationLink
