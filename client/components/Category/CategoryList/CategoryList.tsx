import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

import { ICategory, ICategoryVariable } from '../../../lib/sanity_studio/types/category.types'

import styles from '../Category.module.scss'

interface CategoryListProps {
    category: ICategory
    handleMenuClose: () => void
    setCategoryVariables: Dispatch<SetStateAction<ICategoryVariable | null>>
}
const CategoryList: React.FC<CategoryListProps> = ({
    category,
    handleMenuClose,
    setCategoryVariables,
}) => {
    return (
        <div
            onClick={handleMenuClose}
            onMouseEnter={() => {
                setCategoryVariables({
                    value: category.slug.current,
                    label: category.title,
                    product_count: category.count,
                })
            }}
            key={category._id}
        >
            <Link
                href={
                    category.slug?.current === 'all'
                        ? `/products`
                        : `/category/${category.slug.current}`
                }
                key={category._id}
            >
                <a>
                    <p className={styles.tabletItem}>
                        {category.title}
                        <span>({category.count !== null ? category.count : '0'})</span>
                    </p>
                </a>
            </Link>
        </div>
    )
}

export default CategoryList
