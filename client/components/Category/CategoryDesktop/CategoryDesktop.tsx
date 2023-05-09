import React from 'react'
import styles from '../Category.module.scss'
import { ICategoryDeviceProps } from '../../../types/categoryDeviceProps'
import { ICategory } from '../../../lib/sanity_studio/types/category.types'
import CategoryList from '../CategoryList/CategoryList'
import CategoryCount from '../CategoryCount/CategoryCount'
import { IProducts } from '../../../lib/sanity_studio/types/products.types'
import CategoryVariables from '../CategoryVariables/CategoryVariables'

const CategoryDesktop: React.FC<ICategoryDeviceProps> = ({
    data,
    categories,
    handleMenuClose,
    categoryVariables,
    setCategoryVariables,
}) => {
    return (
        <>
            <div className={styles.categoryCenterContent}>
                <div className={styles.categoryContent}>
                    <div className={styles.categoryTitle}>
                        <p>Ювелирные изделия</p>
                    </div>

                    <div className={styles.categoryItems}>
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
            <div className={styles.categoryRightContent}>
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
        </>
    )
}

export default CategoryDesktop
