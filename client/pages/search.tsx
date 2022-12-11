import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import Meta from '../components/core/Meta/Meta'
import Title from '../components/ui/Title/Title'

import styles from '../styles/search.module.scss'

const data = [
    {
        id: 1,
        imageUri:
            'https://unsaid.com/_next/image?url=https%3A%2F%2Funsaid.centracdn.net%2Fclient%2Fdynamic%2Fimages%2F1044_33f4748cc2-u6rg7-18k-r_f1_g0.jpg&w=1920&q=100',
        imageUri2:
            'https://unsaid.com/_next/image?url=https%3A%2F%2Funsaid.centracdn.net%2Fclient%2Fdynamic%2Fimages%2F1018_9869e7264f-u10rg12-18k-r_f1_g0.jpg&w=1920&q=100',
        title: 'Lynn Pendant',
        text: 'But how long have I heard the soul for this world, And show his hands of life be proved to stand',
        colorName: 'Rele',
        color: ['#C5A041', '#DFD368', '#DBDBD4'],
        price: '3999',
        ratingReview: 4.3,
        review: 133,
    },
    {
        id: 1,
        imageUri:
            'https://unsaid.com/_next/image?url=https%3A%2F%2Funsaid.centracdn.net%2Fclient%2Fdynamic%2Fimages%2F1044_33f4748cc2-u6rg7-18k-r_f1_g0.jpg&w=1920&q=100',
        imageUri2:
            'https://unsaid.com/_next/image?url=https%3A%2F%2Funsaid.centracdn.net%2Fclient%2Fdynamic%2Fimages%2F1018_9869e7264f-u10rg12-18k-r_f1_g0.jpg&w=1920&q=100',
        title: 'Lynn Pendant',
        text: 'But how long have I heard the soul for this world, And show his hands of life be proved to stand',
        colorName: 'Rele',
        color: ['#C5A041', '#DFD368', '#DBDBD4'],
        price: '3999',
        ratingReview: 4.3,
        review: 133,
    },
]

const Search: NextPage = () => {
    return (
        <>
            <Meta title="Поиск" />

            <div className={styles.searchPages}>
                <div className={styles.searchContent}>
                    <div className={styles.searchBlock}>
                        <Title>
                            <p>
                                Введите названия товара для <br /> поиска
                            </p>
                        </Title>
                        <div className={styles.searchInput}>
                            <label htmlFor="inp" id="Input">
                                <input type="text" id="inp" placeholder="&nbsp;" />
                                <span id="Label">Поиск</span>
                                <span id="FocusBg"></span>
                            </label>
                        </div>
                    </div>
                    <div className={styles.searchBlock}>
                        <Title>
                            <p className={styles.searchTitle}>Найдено 1 товар</p>
                        </Title>

                        {data &&
                            data.map((product: any) => (
                                <div key={product.id} className={styles.searchProduct}>
                                    <div className={styles.searchLeftBloks}>
                                        <p className={styles.searchProductName}>{product.title}</p>
                                        <p className={styles.searchProductText}>{product.text}</p>

                                        <div className={styles.searchPriceBlocks}>
                                            <p className={styles.searchProductPrice}>
                                                {product.price} p
                                            </p>
                                            <div className={styles.searchProductColor}>
                                                <span
                                                    style={{ background: product.color[0] }}
                                                ></span>
                                                <span
                                                    style={{ background: product.color[1] }}
                                                ></span>
                                                <span
                                                    style={{ background: product.color[2] }}
                                                ></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.searchRightBloks}>
                                        <Image
                                            className={styles.searchProductImage}
                                            src={product.imageUri}
                                            alt="Cart"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
