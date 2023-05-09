import { useDispatch } from 'react-redux'
import { IProducts } from '../../lib/sanity_studio/types/products.types'
import { removeWishList } from '../../store/features/wishlistSlice'
import Link from 'next/link'
import styles from './Favorite.module.scss'
import Image from 'next/image'
import { urlForImage } from '../../lib/sanity_studio/urlForImage'
import { MouseEvent } from 'react'

interface FavoriteItemProps {
    product: IProducts
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({ product }) => {
    const dispatch = useDispatch()

    const onRemoveFavoriteItem = (
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
        productSlug: string,
    ) => {
        e.preventDefault()
        dispatch(removeWishList(productSlug))
    }

    return (
        <Link href={`product/${product.slug.current}`} key={product._id}>
            <div className={styles.favoriteProduct}>
                <div className={styles.favoriteProductImage}>
                    <Image
                        src={urlForImage(product.variants[0].images[0]).url().toString()}
                        width={100}
                        height={100}
                        alt={product.slug.current}
                    />
                </div>
                <div className={styles.favoriteProductInfo}>
                    <div>
                        <div className={styles.favoriteProductText}>{product.title}</div>
                        <div className={styles.favoriteDescription}>{product.description}</div>
                    </div>
                    <div className={styles.favoriteLink}>Перейти к товару</div>
                </div>
                <div className={styles.favoriteProductRemove}>
                    <div
                        className={styles.favoriteProductRemoveBtn}
                        onClick={(e) => onRemoveFavoriteItem(e, product.slug.current)}
                    >
                        <Image
                            src="/primaryHeart.svg"
                            alt="delete wishlist"
                            width={20}
                            height={20}
                        />
                    </div>
                    <div className={styles.favoriteProductPrice}>{product.variants[0].price}p</div>
                </div>
            </div>
        </Link>
    )
}

export default FavoriteItem
