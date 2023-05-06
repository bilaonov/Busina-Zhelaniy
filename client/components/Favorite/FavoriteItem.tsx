import { useDispatch } from 'react-redux'
import { IProducts } from '../../lib/sanity_studio/types/products.types'
import { wishListActions } from '../../store/features/wishlistSlice'
import Link from 'next/link'
import Title from '../ui/Title/Title'
import styles from './Favorite.module.scss'
import Image from 'next/image'
import { urlForImage } from '../../lib/sanity_studio/urlForImage'
import Button from '../ui/Button/Button'

interface FavoriteItemProps {
    product: IProducts
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({ product }) => {
    const dispatch = useDispatch()
    const onRemoveFavoriteItem = (productSlug: string) => {
        dispatch(wishListActions.removeWishList(productSlug))
    }

    return (
        <div className={styles.favorite}>
            <div className={styles.favoriteHeading}>
                <Title>Товары в израбанном</Title>
            </div>
            <Link href={`product/${product.slug.current}`}>
                <div className={styles.favoriteProduct}>
                    <div className={styles.favoriteImage}>
                        <Image
                            src={urlForImage(product.variants[0].images[0]).url().toString()}
                            width={200}
                            height={200}
                            alt={product.slug.current}
                        />
                    </div>
                    <div className={styles.favoriteInfo}>
                        <div className={styles.favoriteTitle}>{product.title}</div>
                        <div className={styles.favoriteDescription}>{product.description}</div>
                        <div className={styles.favoriteAddCartBtn}>Добавить в карзину</div>
                    </div>
                    <div className={styles.favoriteRemove}>
                        <div
                            className={styles.favoriteRemoveBtn}
                            onClick={(e): void => {
                                e.preventDefault()
                                onRemoveFavoriteItem(product.slug.current)
                            }}
                        >
                            <Image src="/primaryHeart.svg" alt="heart" width={30} height={30} />
                        </div>
                        <div className={styles.favoritePrice}>{product.variants[0].price}p</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FavoriteItem
