import Link from 'next/link'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { selectCategories } from '../../store/features/categoriesSlice'

import Meta from '../core/Meta/Meta'
import Title from '../ui/Title/Title'

import styles from './Category.module.scss'

interface Props {
    setVisible: Dispatch<SetStateAction<boolean>>
}

const Category: React.FC<Props> = ({ setVisible }) => {
    const [data, setData] = useState([])
    const categories = useSelector(selectCategories)

    useEffect(() => {
        fetch('http://localhost:3000/api/getProducts')
            .then((res) => res.json())
            .then((date) => setData(date))
    }, [])

    console.log(data)
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
                                    <div onClick={() => setVisible(false)}>
                                        <Link
                                            href={
                                                !category.slug
                                                    ? `/products`
                                                    : `/category/${category.slug?.current}`
                                            }
                                        >{`${category.title} (${
                                            category.count !== null ? category.count : '0'
                                        })`}</Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className={styles.categoryBlock3}>
                        {data.products &&
                            data.products.map((product) => (
                                <div className={styles.selectItems2}>{product.title}</div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category
