//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import styles from './SaleTop.module.scss'
import Link from 'next/link'

const data = [
    {
        id: 1,
        imageUri:
            'https://unsaid.com/_next/image?url=https%3A%2F%2Funsaid.centracdn.net%2Fclient%2Fdynamic%2Fimages%2F1044_33f4748cc2-u6rg7-18k-r_f1_g0.jpg&w=1920&q=100',
        imageUri2:
            'https://unsaid.com/_next/image?url=https%3A%2F%2Funsaid.centracdn.net%2Fclient%2Fdynamic%2Fimages%2F1018_9869e7264f-u10rg12-18k-r_f1_g0.jpg&w=1920&q=100',
        title: 'Lynn Pendant',
        colorName: 'Rele',
        color: ['#C5A041', '#DFD368', '#DBDBD4'],
        price: '3999',
        ratingReview: 4.3,
        review: 133,
    },
    {
        id: 2,
        imageUri:
            'https://unsaid.com/_next/image?url=https%3A%2F%2Funsaid.centracdn.net%2Fclient%2Fdynamic%2Fimages%2F1016_a0237d9a88-u10rg9-18k-y_f1_g0.jpg&w=1920&q=100',
        imageUri2:
            'https://unsaid.com/_next/image?url=https%3A%2F%2Funsaid.centracdn.net%2Fclient%2Fdynamic%2Fimages%2F1018_9869e7264f-u10rg12-18k-r_f1_g0.jpg&w=1920&q=100',
        title: 'Lynn Pendant',
        colorName: 'Rele',
        color: ['#C5A041', '#DFD368', '#DBDBD4'],
        price: '5999',
        ratingReview: 4.3,
        review: 133,
    },
    {
        id: 3,
        imageUri:
            'https://unsaid.com/_next/image?url=https%3A%2F%2Funsaid.centracdn.net%2Fclient%2Fdynamic%2Fimages%2F1018_9869e7264f-u10rg12-18k-r_f1_g0.jpg&w=1920&q=100',
        title: 'Lynn Pendant',
        colorName: 'Rele',
        color: ['#C5A041', '#DFD368', '#DBDBD4'],
        price: '19999',
        ratingReview: 4.3,
        review: 133,
    },
]

const SalesTop = () => {
    return (
        <div className={styles.container}>
            {data &&
                data.map((product): any => (
                    <div className={styles.items} key={product.id}>
                        <div className={styles.imgBlock}>
                            <div className={styles.image2}>
                                <Image src="/heart.svg" width={30} height={30} />
                            </div>
                            <Image
                                className={styles.image1}
                                src={product.imageUri}
                                alt="Cart"
                                width={500}
                                height={450}
                            />
                        </div>

                        <div className={styles.block}>
                            <div className={styles.leftBlock}>
                                <div className={styles.title}>{product.title}</div>
                                <div className={styles.nameColor}>{product.colorName}</div>
                                <div className={styles.color}>
                                    <span style={{ background: product.color[0] }}></span>
                                    <span style={{ background: product.color[1] }}></span>
                                    <span style={{ background: product.color[2] }}></span>
                                </div>
                            </div>
                            <div className={styles.rightBlock}>
                                <div className={styles.price}>{product.price} p</div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default SalesTop
