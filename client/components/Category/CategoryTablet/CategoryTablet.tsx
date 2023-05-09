import React from 'react'
import styles from '../Category.module.scss'
import { ICategoryDeviceProps } from '../../../types/categoryDeviceProps'
import Image from 'next/image'
import { ICategory } from '../../../lib/sanity_studio/types/category.types'
import CategoryList from '../CategoryList/CategoryList'
import CategoryCount from '../CategoryCount/CategoryCount'
import CategoryVariables from '../CategoryVariables/CategoryVariables'
import { IProducts } from '../../../lib/sanity_studio/types/products.types'

const CategoryTablet: React.FC<ICategoryDeviceProps> = ({
    data,
    categories,
    handleMenuClose,
    categoryVariables,
    setCategoryVariables,
    setIsVisible,
}) => {
    return (
        <div className={styles.tablet}>
            <div className={styles.tabletLeftContent}>
                <div className={styles.tabletBack} onClick={() => setIsVisible?.(null)}>
                    <Image src="/backicon.webp" width="20" height="20" alt="Search" />
                </div>
                <div className={styles.tabletContent}>
                    <div className={styles.tabletItems}>
                        {categories.list &&
                            categories.list.map(
                                (category: ICategory) =>
                                    category.count !== null && (
                                        <CategoryList
                                            category={category}
                                            handleMenuClose={handleMenuClose}
                                            setCategoryVariables={setCategoryVariables}
                                        />
                                    ),
                            )}
                    </div>
                </div>
            </div>
            <div className={styles.tabletRightContent}>
                {categoryVariables?.value && (
                    <CategoryCount
                        handleMenuClose={handleMenuClose}
                        categoryVariables={categoryVariables}
                    />
                )}

                {data &&
                    data.map((product: IProducts) =>
                        product.product_category === categoryVariables?.value ||
                        categoryVariables?.value === 'all' ? (
                            <CategoryVariables
                                product={product}
                                handleMenuClose={handleMenuClose}
                            />
                        ) : null,
                    )}
            </div>
        </div>
    )
}

export default CategoryTablet
