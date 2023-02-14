import Link from 'next/link'
import React from 'react'

import { useSelector } from 'react-redux'
import { selectCategories } from '../../redux/categories/categoriesSlice'

import { CategoriesState, ICategory } from '../../lib/sanity_studio/types/category.types'

import Meta from '../core/Meta/Meta'
import Title from '../ui/Title/Title'

import styles from './Category.module.scss'

const Category: React.FC = () => {
    const categories: CategoriesState = useSelector(selectCategories)

    return (
        <>
            <Meta title="Категории" />
            <div className={styles.category}>
                <div className={styles.categorySelect}>
                    <div className={styles.selectBlock}>
                        <Title>
                            <p>Категории</p>
                        </Title>
                        <div className={styles.selectItems}>
                            <div>
                                <p>Ювелирные изделия</p>
                                <span id="arrow"></span>
                            </div>
                            <div>
                                <p>Коллекции</p>
                                <span id="arrow"></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.categoryBlock2}>
                        <Title>
                            <p className={styles.categoryText}>Ювелирные изделия</p>
                        </Title>

                        <div className={styles.selectItems2}>
                            {categories.list &&
                                categories.list.map((category: ICategory) => (
                                    <div>
                                        <Link href={`/category/${category.slug?.current}`}>{`${
                                            category.title
                                        } (${
                                            category.count !== null ? category.count : '0'
                                        })`}</Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category
