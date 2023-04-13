import Link from 'next/link'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { productAllQuery } from '../../lib/sanity_studio/query/products'
import { client } from '../../lib/sanity_studio/sanity'
import { ICategory, ICategoryVariable } from '../../lib/sanity_studio/types/category.types'
import { IProducts } from '../../lib/sanity_studio/types/products.types'

import { selectCategories } from '../../store/features/categoriesSlice'
import Desktop from '../ui/Adoptation/Desktop/Desktop'
import Mobile from '../ui/Adoptation/Mobile/Mobile'

import Image from 'next/image'
import styles from './Category.module.scss'
import CategoryVariables from './CategoryVariables/CategoryVariables'
import Select from 'react-select'
import Tablet from '../ui/Adoptation/Tablet/Tablet'
import { useMediaQuery } from 'react-responsive'
interface Props {
    setVisible: Dispatch<SetStateAction<boolean>>
    setIsVisible?: any
}

const Category: React.FC<Props> = ({ setVisible, setIsVisible }) => {
    const [data, setData] = useState<IProducts[] | undefined>()
    const [categoryVariables, setCategoryVariables] = useState<ICategoryVariable | null>({
        value: 'all',
        label: 'Все продукты',
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
    const isDesktop = useMediaQuery({ minWidth: 992 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    const isMobile = useMediaQuery({ maxWidth: 767 })

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
                                categories.list.map(
                                    (category: ICategory) =>
                                        category.count !== null && (
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
                                        ),
                                )}
                        </div>
                    </div>
                </div>
                <div className={styles.navRightContent}>
                    {categoryVariables?.value && (
                        <div className={styles.categoryTitle} onClick={handleMenuClose}>
                            <Link
                                href={
                                    categoryVariables?.value === 'all'
                                        ? `/products`
                                        : `/category/${categoryVariables?.value}`
                                }
                            >
                                <a id="lineLink">
                                    Посмотреть{' '}
                                    {`${categoryVariables.value !== 'all' ? `все` : ''} ${
                                        categoryVariables?.label
                                    } (${categoryVariables?.product_count})`}
                                </a>
                            </Link>
                        </div>
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
                                            ),
                                    )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.tabletRightContent}>
                        {categoryVariables?.value && (
                            <div className={styles.tabletTitle} onClick={handleMenuClose}>
                                <Link
                                    href={
                                        categoryVariables?.value === 'all'
                                            ? `/products`
                                            : `/category/${categoryVariables?.value}`
                                    }
                                >
                                    <a id="lineLink">
                                        Посмотреть{' '}
                                        {`${categoryVariables.value !== 'all' ? `все` : ''} ${
                                            categoryVariables?.label
                                        } (${categoryVariables?.product_count})`}
                                    </a>
                                </Link>
                            </div>
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
                    <div className={styles.mobileBack} onClick={() => setIsVisible(null)}>
                        <p>Назад</p>
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
                        <div className={styles.categoryTitle} onClick={handleMenuClose}>
                            <Link
                                href={
                                    categoryVariables?.value === 'all'
                                        ? `/products`
                                        : `/category/${categoryVariables?.value}`
                                }
                            >
                                <a id="lineLink">
                                    Посмотреть{' '}
                                    {`${
                                        categoryVariables.value !== 'all' ? 'все' : ''
                                    } ${categoryVariables?.label?.toLocaleLowerCase()}`}
                                </a>
                            </Link>
                        </div>
                    )}
                </div>
            </Mobile>
        </>
    )
}

export default Category
