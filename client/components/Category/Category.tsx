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

import Meta from '../core/Meta/Meta'
import Title from '../ui/Title/Title'
import Transition from '../ui/Transitions/Transition'

import styles from './Category.module.scss'

interface Props {
    setVisible: Dispatch<SetStateAction<boolean>>
}

const Category: React.FC<Props> = ({ setVisible }) => {
    const [data, setData] = useState<IProducts[] | undefined>()
    const [categoryID, setCategoryID] = useState<any>()
    const [isVisible, setIsVisible] = useState<'jewelry' | 'collection' | null>(null)
    
    const categories = useSelector(selectCategories)

    useEffect(() => {
        client.fetch(productAllQuery).then((date) => setData(date))
    }, [])
   
    return (
        <>
            <Meta title="Категории" />
            <div className={styles.category}>
                <div className={styles.categorySelect}>
                    <div className={styles.categoryBlock}>
                        <Title>
                            <p className={styles.categoryTitle}>Категории</p>
                        </Title>
                        <div className={styles.categoryItems}>
                            <div
                                className={styles.categoryBox}
                                onMouseEnter={() => setIsVisible('jewelry')}
                            >
                                <p>Ювелирные изделия</p>
                                <span id="arrow"></span>
                            </div>
                            <div
                                className={styles.categoryBox}
                                onMouseEnter={() => setIsVisible('collection')}
                            >
                                <p>Коллекции</p>
                                <span id="arrow"></span>
                            </div>
                        </div>
                    </div>
                    {isVisible === 'jewelry' && (
                        <>
                            <Transition>
                                <div className={styles.categoryBlock}>
                                    <Title>
                                        <p className={styles.categoryTitle}>Ювелирные изделия</p>
                                    </Title>

                                    <div className={styles.categoryItems}>
                                        {categories.list &&
                                            categories.list.map(
                                                (category: ICategory) =>
                                                    category.count !== null && (
                                                        <div
                                                            onClick={() => setVisible(false)}
                                                            onMouseEnter={(e) => {
                                                                setCategoryID(category._id)
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
                                                                    <p
                                                                        className={
                                                                            styles.categoryItem
                                                                        }
                                                                    >
                                                                        {category.title}
                                                                        <span>
                                                                            ({category.count})
                                                                        </span>
                                                                    </p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    ),
                                            )}
                                    </div>
                                </div>
                            </Transition>
                            <Transition>
                                <div className={styles.categoryBlock}>
                                    <Title>
                                        <p className={styles.categoryTitle}>Все товары</p>
                                    </Title>

                                    {data &&
                                        data.map((product: IProducts) =>
                                            product.category._ref === categoryID ? null : (
                                                <Link href={`/product/${product.slug.current}`}>
                                                    <a>
                                                        <div
                                                            className={styles.categoryProducts}
                                                            onClick={() => setVisible(false)}
                                                        >
                                                            <div
                                                                className={
                                                                    styles.categoryProductsImages
                                                                }
                                                            >
                                                                <Image
                                                                    src={urlForImage(
                                                                        product.variants[0]
                                                                            .images[0],
                                                                    )
                                                                        .url()
                                                                        .toString()}
                                                                    
                                                                    alt="Cart"
                                                                    width={100}
                                                                    height={100}
                                                                />
                                                            </div>

                                                            <div
                                                                className={
                                                                    styles.categoryProductsOther
                                                                }
                                                            >
                                                                <div
                                                                    className={
                                                                        styles.categoryProductsTitle
                                                                    }
                                                                >
                                                                    {product.title}
                                                                </div>
                                                                <div
                                                                    className={
                                                                        styles.categoryProductsDescription
                                                                    }
                                                                >
                                                                    {product.description}
                                                                </div>
                                                            </div>

                                                            <div
                                                                className={
                                                                    styles.categoryProductsPrice
                                                                }
                                                            >
                                                                {product.variants[0].price}p
                                                            </div>
                                                        </div>
                                                    </a>
                                                </Link>
                                            ),
                                        )}
                                </div>
                            </Transition>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Category
