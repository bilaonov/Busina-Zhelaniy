import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ICategory } from '../../lib/sanity_studio/types/category.types'
import Meta from '../core/Meta/Meta'
import Title from '../ui/Title/Title'
import styles from './Category.module.scss'

interface CategoryProps {
    categories: ICategory[]
}

const Category: React.FC<CategoryProps> = ({ categories }) => {
    console.log(categories)
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
                            <div>
                                <p>Ювелирные изделия</p>
                                <span id="arrow"></span>
                            </div>
                            <div>
                                <p>Ювелирные изделия</p>
                                <span id="arrow"></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.categoryBlock2}>
                        <Title>
                            <p className={styles.categoryText}>Ювелирные изделия</p>
                        </Title>

                        <div className={styles.selectItems2}>
                            {categories &&
                                categories.map((category: ICategory) => (
                                    <div>
                                        <Link href={`/category/${category.slug.current}/`}>
                                            {category.title}
                                        </Link>
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
