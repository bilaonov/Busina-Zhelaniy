import classNames from 'classnames'
import React from 'react'
import cName from 'classnames'

interface NavigationTitleProps {
    title: string
    className?: string
}

const NavigationTitle: React.FC<NavigationTitleProps> = ({ title, className }) => {
    return <p className={className}>{title}</p>
}

export default NavigationTitle
