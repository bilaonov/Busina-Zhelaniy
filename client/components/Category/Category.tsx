import Image from 'next/image'
import Link from 'next/link'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { productAllQuery } from '../../lib/sanity_studio/query/products'
import { client } from '../../lib/sanity_studio/sanity'
import { ICategory, ICategoryVariable } from '../../lib/sanity_studio/types/category.types'
import { IProducts } from '../../lib/sanity_studio/types/products.types'
import { urlForImage } from '../../lib/sanity_studio/urlForImage'

import { selectCategories } from '../../store/features/categoriesSlice'
import BlurImage from '../ui/BlurImage/BlurImage'

import styles from './Category.module.scss'

interface Props {
    setVisible: Dispatch<SetStateAction<boolean>>
}

const Category: React.FC<Props> = ({ setVisible }) => {
    const [data, setData] = useState<IProducts[] | undefined>()
    const [categoryVariables, setCategoryVariables] = useState<ICategoryVariable>()

    const categories = useSelector(selectCategories)

    useEffect(() => {
        client.fetch(productAllQuery).then((date) => setData(date))
    }, [])

    const handleMenuClose = () => {
        setVisible(false)
    }

    return (
        <>
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
                                                    {category.count !== null ? category.count : '0'}
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
                            <Link href={`/product/${product.slug.current}`} key={product._id}>
                                <a>
                                    <div
                                        onClick={handleMenuClose}
                                        className={styles.categoryProducts}
                                    >
                                        <div className={styles.categoryProductsImages}>
                                            <BlurImage
                                                src={urlForImage(product.variants[0].images[0])
                                                    .url()
                                                    .toString()}
                                                alt="Cart"
                                                fill
                                            />
                                        </div>

                                        <div className={styles.categoryProductsOther}>
                                            <div className={styles.categoryProductsTitle}>
                                                {product.title}
                                            </div>
                                            <div className={styles.categoryProductsDescription}>
                                                {product.description}
                                            </div>
                                        </div>

                                        <div className={styles.categoryProductsPrice}>
                                            {product.variants[0].price}p
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        ) : null,
                    )}
            </div>
        </>
    )
}

export default Category
