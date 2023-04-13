import classnames from 'classnames'
import Image from 'next/image'
import React from 'react'
import CreatableSelect from 'react-select/creatable'
import { ICategory } from '../../../lib/sanity_studio/types/category.types'
import styles from './Select.module.scss'

interface SelectProps {
    size?: string[]
    options?: ICategory[]
}

const Select: React.FC<SelectProps> = ({ size, options }) => {
    const cName = classnames(styles.column, styles.formSelect)

    return (
        <div>
            <select className={styles.select}>
                {options &&
                    options.map((value) => (
                        <option className={styles.selectOption} value={value.title}></option>
                    ))}
            </select>
        </div>
    )
}

export default Select
