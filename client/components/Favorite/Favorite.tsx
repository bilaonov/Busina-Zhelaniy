import { useDispatch, useSelector } from 'react-redux'
import { clearWishList, getFavorite } from '../../store/features/wishlistSlice'

import FavoriteItem from './FavoriteItem'

import styles from './Favorite.module.scss'
import Title from '../ui/Title/Title'
import { urlForImage } from '../../lib/sanity_studio/urlForImage'
import Link from 'next/link'
import Image from 'next/image'
import Meta from '../core/Meta/Meta'
import { IProducts } from '../../lib/sanity_studio/types/products.types'

const Favorite = () => {
    const dispatch = useDispatch()
    const favoriteItems = useSelector(getFavorite)
    const handleClearWishList = () => {
        dispatch(clearWishList())
    }
    return (
        <>
            <Meta title="Избранное" />
            <div className={styles.favorite}>
                <div className={styles.favoriteHeading}>
                    <div className={styles.favoriteHeadingTitle}>
                        <Title>Список желаний</Title>
                    </div>

                    <p className={styles.favoriteHeadingText}>
                        Хотите, чтобы ваш список желаний сохранялся на разных устройствах? Войдите
                        или создайте учетную запись Busina Zhelaniy сегодня.
                    </p>
                </div>
                <div className={styles.favoriteProductHeadingBox}>
                    <div className={styles.favoriteProductTitle}>
                        Товары <span></span>
                    </div>
                    <div className={styles.favoriteProductClear} onClick={handleClearWishList}>
                        Очистить избранные
                    </div>
                </div>
                {favoriteItems.length ? (
                    <div className={styles.favoriteProductBlock}>
                        {favoriteItems &&
                            favoriteItems.map((product: IProducts) => (
                                <FavoriteItem product={product} />
                            ))}
                    </div>
                ) : (
                    <div className={styles.favoriteEmpty}>Корзина пуста</div>
                )}
            </div>
        </>
    )
}

export default Favorite
