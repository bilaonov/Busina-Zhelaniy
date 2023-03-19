import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'

import { urlForImage } from '../../../lib/sanity_studio/urlForImage'
import BlurImage from '../../ui/BlurImage/BlurImage'

import styles from './ProductCard.module.scss'
import { IProducts } from '../../../lib/sanity_studio/types/products.types'
interface Props {
    products: IProducts
}

const ProductCard: NextPage<Props> = ({ products }) => {
    return (
        <Link href={`/product/${products.slug.current}`}>
            <a>
                <div className={styles.product} key={products._id}>
                    <div className={styles.productImageBlock}>
                        <div className={styles.productImageHeart}>
                            <BlurImage src="/heart.svg" alt="heart" width={30} height={30} />
                        </div>
                        <div className={styles.productImages}>
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

                    <div className={styles.productBox}>
                        <div className={styles.productLeftBox}>
                            <div className={styles.productTitle}>{products.title}</div>
                        </div>

                        <div className={styles.productRightBox}>
                            <div className={styles.productPrice}>
                                {products.variants[0].price} p
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default ProductCard
