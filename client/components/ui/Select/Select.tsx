import classnames from 'classnames'
import Image from 'next/image'
import React from 'react'
import styles from './Select.module.scss'

interface SelectProps {
    size: string[]
}

const Select: React.FC<SelectProps> = ({ size }) => {
    const cName = classnames(styles.column, styles.formSelect)
    return (
        <div className={styles.column}>
            <select>{size && size.map((value) => <option>{value}</option>)}</select>
        </div>
    )
}

export default Select
