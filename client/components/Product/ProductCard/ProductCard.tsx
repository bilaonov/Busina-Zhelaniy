import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'

import { urlForImage } from '../../../lib/sanity_studio/urlForImage'
import BlurImage from '../../ui/BlurImage/BlurImage'
import Image from 'next/image'

import styles from './ProductCard.module.scss'
import { IProducts } from '../../../lib/sanity_studio/types/products.types'
import { useDispatch, useSelector } from 'react-redux'
import { getFavorite, wishListActions } from '../../../store/features/wishlistSlice'
interface Props {
    products: IProducts
}

const ProductCard: NextPage<Props> = ({ products }) => {
    const dispatch = useDispatch()
    const favoriteItems = useSelector(getFavorite)

    const isInFavorite = favoriteItems.some((item) => item.slug.current === products.slug.current)

    const toggleFavoriteHandler = () => {
        !isInFavorite
            ? dispatch(wishListActions.addToWishList(products))
            : dispatch(wishListActions.removeWishList(products.slug.current))
    }

    return (
        <Link href={`/product/${products.slug.current}`}>
            <div className={styles.product} key={products._id}>
                <div className={styles.productImageBlock}>
                    <div className={styles.productImageHeart} onClick={toggleFavoriteHandler}>
                        {!isInFavorite ? (
                            <Image src="/outlineHeart.svg" alt="heart" width={20} height={20} />
                        ) : (
                            <Image src="/primaryHeart.svg" alt="heart" width={20} height={20} />
                        )}
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
                        <div className={styles.productPrice}>{products.variants[0].price} p</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
