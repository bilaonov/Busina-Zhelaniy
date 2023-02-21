import React, { useState } from 'react'
import styles from './ProductCard.module.scss'
import Link from 'next/link'
import { NextPage } from 'next'
import { urlForImage } from '../../../lib/sanity_studio/urlForImage'
import BlurImage from '../../ui/BlurImage/BlurImage'
interface Props {
    products: any
}

const ProductCard: NextPage<Props> = ({ products }) => {
    return (
        <Link href={`/product/${products.slug.current}`}>
            <a>
                <div className={styles.items} key={products._id}>
                    <div className={styles.imgBlock}>
                        <div className={styles.image2}>
                            {/* <BlurImage src="/heart.svg" alt="heart" width={30} height={30} /> */}
                        </div>
                        <div className={styles.image1}>
                            <BlurImage
                                src={urlForImage(products.variants[0].images[0]).url().toString()}
                                className={styles.MainImage}
                                alt="Cart"
                                width={500}
                                height={400}
                                fill
                            />
                            {products.image_models?.length && (
                                <BlurImage
                                    src={urlForImage(products.image_models![0]).url().toString()}
                                    className={styles.SecondImage}
                                    alt="Cart"
                                    fill
                                    width={500}
                                    height={400}
                                />
                            )}
                        </div>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.leftBlock}>
                            <div className={styles.title}>{products.title}</div>
                        </div>

                        <div className={styles.rightBlock}>
                            <div className={styles.price}>{products.variants[0].price} p</div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default ProductCard
