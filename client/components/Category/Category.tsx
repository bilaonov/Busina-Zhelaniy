import Image from 'next/image'
import Link from 'next/link'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { productAllQuery } from '../../lib/sanity_studio/query/products'
import { client } from '../../lib/sanity_studio/sanity'
import { ICategory } from '../../lib/sanity_studio/types/category.types'
import { IProducts } from '../../lib/sanity_studio/types/products.types'
import { urlForImage } from '../../lib/sanity_studio/urlForImage'

import { selectCategories } from '../../store/features/categoriesSlice'

import Title from '../ui/Title/Title'

import styles from './Category.module.scss'

interface Props {
    setVisible: Dispatch<SetStateAction<boolean>>
}

const Category: React.FC<Props> = ({ setVisible }) => {
    const [data, setData] = useState<IProducts[] | undefined>()
    const [categorySlug, setCategorySlug] = useState<any>()

    const categories = useSelector(selectCategories)

    useEffect(() => {
        client.fetch(productAllQuery).then((date) => setData(date))
    }, [])

    return (
        <>
            <div className={styles.navCenterContent}>
                <div className={styles.categoryTitle}>
                    <h3>Ювелирные изделия</h3>
                </div>

                <div className={styles.categoryItems}>
                    {categories.list &&
                        categories.list.map((category: ICategory) => (
                            <div
                                onClick={() => setVisible(false)}
                                onMouseEnter={(e) => {
                                    setCategorySlug(category.slug?.current)
                                }}
                            >
                                <Link
                                    href={
                                        !category.slug
                                            ? `/products`
                                            : `/category/${category.slug?.current}`
                                    }
                                >
                                    <a>
                                        <p className={styles.categoryItem}>
                                            {category.title}
                                            <span>
                                                ({category.count !== null ? category.count : '0'})
                                            </span>
                                        </p>
                                    </a>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
            <div className={styles.navRightContent}>
                <div className={styles.categoryTitle}>
                    <h3>Все товары</h3>
                </div>

                {data &&
                    data.map((product: IProducts) =>
                        product.product_category === categorySlug || categorySlug === 'all' ? (
                            <Link href={`/product/${product.slug.current}`}>
                                <a>
                                    <div
                                        className={styles.categoryProducts}
                                        onClick={() => setVisible(false)}
                                    >
                                        <div className={styles.categoryProductsImages}>
                                            <Image
                                                src={urlForImage(product.variants[0].images[0])
                                                    .url()
                                                    .toString()}
                                                alt="Cart"
                                                width={100}
                                                height={100}
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
