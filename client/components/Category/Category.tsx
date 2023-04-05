import Link from 'next/link'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'

import { productAllQuery } from '../../lib/sanity_studio/query/products'
import { client } from '../../lib/sanity_studio/sanity'
import { ICategory, ICategoryVariable } from '../../lib/sanity_studio/types/category.types'
import { IProducts } from '../../lib/sanity_studio/types/products.types'

import { selectCategories } from '../../store/features/categoriesSlice'
import Desktop from '../ui/Adoptation/Desktop/Desktop'
import Mobile from '../ui/Adoptation/Mobile/Mobile'

import styles from './Category.module.scss'
import CategoryVariables from './CategoryVariables/CategoryVariables'

interface Props {
    setVisible: Dispatch<SetStateAction<boolean>>
    setIsVisible: any
}

const Category: React.FC<Props> = ({ setVisible, setIsVisible }) => {
    const [currentSlug, setCurrentSlug] = useState<string | undefined>('')

    const [data, setData] = useState<IProducts[] | undefined>()
    const [categoryVariables, setCategoryVariables] = useState<ICategoryVariable>()

    const categories = useSelector(selectCategories)
    const [categoriesData, setCategoryData] = useState(categories)
    console.log(categories)

    useEffect(() => {
        client.fetch(productAllQuery).then((date) => setData(date))
    }, [])

    const handleMenuClose = () => {
        setVisible(false)
    }

    const dropDownMenu = (slug: string | undefined) => {}

    return (
        <>
            <Desktop>
                <div className={styles.categoryCenterContent}>
                    <div className={styles.categoryContent}>
                        <div className={styles.categoryTitle}>
                            <h3>Ювелирные изделия</h3>
                        </div>

                        <div className={styles.categoryItems}>
                            {categories.list &&
                                categories.list.map((category: ICategory) => (
                                    <div
                                        onClick={handleMenuClose}
                                        onMouseEnter={() => {
                                            setCategoryVariables({
                                                category_slug: category.slug.current,
                                                category_title: category.title,
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
                                                <p className={styles.categoryItem}>
                                                    {category.title}
                                                    <span>
                                                        (
                                                        {category.count !== null
                                                            ? category.count
                                                            : '0'}
                                                        )
                                                    </span>
                                                </p>
                                            </a>
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className={styles.navRightContent}>
                    {categoryVariables?.category_slug && (
                        <div className={styles.categoryTitle} onClick={handleMenuClose}>
                            <Link
                                href={
                                    categoryVariables?.category_slug === 'all'
                                        ? `/products`
                                        : `/category/${categoryVariables?.category_slug}`
                                }
                            >
                                <a id="lineLink">
                                    Посмотреть все{' '}
                                    {`${categoryVariables?.category_title} (${categoryVariables?.product_count})`}
                                </a>
                            </Link>
                        </div>
                    )}

                    {data &&
                        data.map((product: IProducts) =>
                            product.product_category === categoryVariables?.category_slug ||
                            categoryVariables?.category_slug === 'all' ? (
                                <CategoryVariables
                                    product={product}
                                    handleMenuClose={handleMenuClose}
                                />
                            ) : null,
                        )}
                </div>
            </Desktop>
            <Mobile>
                <div className={styles.mobile}>
                    <div onClick={() => setIsVisible(null)}>
                        <p>Назад</p>
                    </div>

                    <div className={styles.mobileCategory}>
                        {categories.list &&
                            categories.list.map((category: ICategory) => (
                                <div
                                    // onClick={handleMenuClose}
                                    onMouseEnter={() => {
                                        setCategoryVariables({
                                            category_slug: category.slug.current,
                                            category_title: category.title,
                                            product_count: category.count,
                                        })
                                    }}
                                    key={category._id}
                                >
                                    <>
                                        <Link
                                            href={
                                                category.slug?.current === 'all'
                                                    ? `/products`
                                                    : `/category/${category.slug.current}`
                                            }
                                            key={category._id}
                                        >
                                            <a
                                                className={styles.mobileLink}
                                                onClick={() =>
                                                    setCurrentSlug(category.slug.current)
                                                }
                                            >
                                                <p>
                                                    {category.title}
                                                    <span>
                                                        (
                                                        {category.count !== null
                                                            ? category.count
                                                            : '0'}
                                                        )
                                                    </span>
                                                </p>
                                                <p>+</p>
                                            </a>
                                        </Link>
                                    </>
                                </div>
                            ))}
                        {data &&
                            data.map((product: IProducts) =>
                                product.product_category === currentSlug ? (
                                    <div>{product.title}</div>
                                ) : null,
                            )}
                    </div>
                </div>
            </Mobile>
        </>
    )
}

export default Category
