import React, { useState } from 'react'
import styles from './ProductCard.module.scss'
import Link from 'next/link'
import { NextPage } from 'next'
import { IProducts } from '../../../lib/sanity_studio/types/products.types'
import { urlForImage } from '../../../lib/sanity_studio/urlForImage'
import Image from 'next/image'

interface Props {
    products: IProducts
}
const ProductCard: NextPage<Props> = ({ products }) => {
    console.log(products)
    return (
        <Link href={`/product/${products.slug.current}`}>
            <div className={styles.items} key={products._id}>
                <div className={styles.imgBlock}>
                    <div className={styles.image2}>
                        <Image src="/heart.svg" alt="heart" width={30} height={30} />
                    </div>
                    <div className={styles.image1}>
                        <Image
                            src={urlForImage(products.image[0]).url().toString()}
                            className={styles.MainImage}
                            alt="Cart"
                            fill
                        />
                        <Image
                            src={urlForImage(products.imagesModels![0]).url().toString()}
                            className={styles.SecondImage}
                            alt="Cart"
                            fill
                        />
                    </div>
                </div>

                <div className={styles.block}>
                    <div className={styles.leftBlock}>
                        <div className={styles.title}>{products.title}</div>

                        {/* <>
                        <div className={styles.nameColor}>
                            {products.color.name}
                        </div>
                        <div className={styles.color}>
                            {products.color.map((color: IColors) => (
                                <span
                                    style={{
                                        background: color.colorCode?.hex,
                                    }}
                                ></span>
                            ))}
                        </div>
                    </> */}
                    </div>

                    <div className={styles.rightBlock}>
                        <div className={styles.price}>{products.price} p</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
