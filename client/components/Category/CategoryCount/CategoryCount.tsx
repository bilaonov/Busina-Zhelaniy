import Link from 'next/link'
import React from 'react'
import { ICategoryVariable } from '../../../lib/sanity_studio/types/category.types'
import styles from '../Category.module.scss'

interface CategoryCountProps {
    handleMenuClose: () => void
    categoryVariables: ICategoryVariable
}

const CategoryCount: React.FC<CategoryCountProps> = ({ handleMenuClose, categoryVariables }) => {
    console.log(categoryVariables)
    return (
        <div className={styles.categoryTitle} onClick={handleMenuClose}>
            <Link
                href={
                    categoryVariables?.value === 'all'
                        ? `/products`
                        : `/category/${categoryVariables?.value}`
                }
            >
                <a id="lineLink">
                    Посмотреть
                    {`${categoryVariables.value !== 'all' ? `все` : ''} ${
                        categoryVariables?.label
                    } `}
                </a>
            </Link>
        </div>
    )
}

export default CategoryCount
