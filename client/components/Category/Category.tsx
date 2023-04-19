import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { selectCategories } from '../../store/features/categoriesSlice'

import { productAllQuery } from '../../lib/sanity_studio/query/products'
import { client } from '../../lib/sanity_studio/sanity'

import { ICategory, ICategoryVariable } from '../../lib/sanity_studio/types/category.types'
import { IProducts } from '../../lib/sanity_studio/types/products.types'

import Desktop from '../ui/Adoptation/Desktop/Desktop'
import Mobile from '../ui/Adoptation/Mobile/Mobile'
import CategoryVariables from './CategoryVariables/CategoryVariables'
import Select from 'react-select'
import Tablet from '../ui/Adoptation/Tablet/Tablet'
import CategoryList from './CategoryList/CategoryList'
import CategoryCount from './CategoryCount/CategoryCount'
import Image from 'next/image'
import styles from './Category.module.scss'

interface Props {
    setVisible: Dispatch<SetStateAction<boolean>>
    setIsVisible?: any
}

const Category: React.FC<Props> = ({ setVisible, setIsVisible }) => {
    const [data, setData] = useState<IProducts[] | undefined>()
    const [categoryVariables, setCategoryVariables] = useState<ICategoryVariable | null>({
        value: 'all',
        label: 'Все продукты',
        product_count: 0,
    })

    const categories = useSelector(selectCategories)

    useEffect(() => {
        client.fetch(productAllQuery).then((date) => setData(date))
    }, [])

    const handleMenuClose = () => {
        setVisible(false)
    }
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
        <>
            <Desktop>
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
            </Desktop>

            <Tablet>
                <div className={styles.tablet}>
                    <div className={styles.tabletLeftContent}>
                        <div className={styles.tabletBack} onClick={() => setIsVisible(null)}>
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
            </Tablet>
            <Mobile>
                <div className={styles.mobile}>
                    <div className={styles.tabletBack} onClick={() => setIsVisible(null)}>
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
                                <CategoryVariables
                                    product={product}
                                    handleMenuClose={handleMenuClose}
                                />
                            ) : null,
                        )}
                    {categoryVariables?.value && (
                        <CategoryCount
                            handleMenuClose={handleMenuClose}
                            categoryVariables={categoryVariables}
                        />
                    )}
                </div>
            </Mobile>
        </>
    )
}

export default Category
