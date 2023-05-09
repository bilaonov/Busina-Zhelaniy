import React from 'react'
import { ICategoryDeviceProps } from '../../../types/categoryDeviceProps'
import Select from 'react-select'
import CategoryCount from '../CategoryCount/CategoryCount'
import Image from 'next/image'
import styles from '../Category.module.scss'
import { IProducts } from '../../../lib/sanity_studio/types/products.types'
import CategoryVariables from '../CategoryVariables/CategoryVariables'
import { ICategory } from '../../../lib/sanity_studio/types/category.types'

const CategoryMobile: React.FC<ICategoryDeviceProps> = ({
    data,
    categories,
    handleMenuClose,
    categoryVariables,
    setCategoryVariables,
    setIsVisible,
}) => {
    const formatOptions = () => {
        const options =
            categories.list &&
            categories.list.map((category: ICategory) => ({
                value: category.slug.current,
                label: `${category.title} (${category.count ? category.count : 0})`,
                isDisabled: !category.count ? true : false,
            }))

        return options
    }
    return (
        <div className={styles.mobile}>
            <div className={styles.tabletBack} onClick={() => setIsVisible?.(null)}>
                <Image src="/backicon.webp" width="20" height="20" alt="Search" />
            </div>

            <Select
                options={formatOptions()}
                defaultValue={categoryVariables}
                onChange={setCategoryVariables}
            />

            {data &&
                data.map((product: IProducts) =>
                    product.product_category === categoryVariables?.value ||
                    categoryVariables?.value === 'all' ? (
                        <CategoryVariables product={product} handleMenuClose={handleMenuClose} />
                    ) : null,
                )}
            {categoryVariables?.value && (
                <CategoryCount
                    handleMenuClose={handleMenuClose}
                    categoryVariables={categoryVariables}
                />
            )}
        </div>
    )
}

export default CategoryMobile
