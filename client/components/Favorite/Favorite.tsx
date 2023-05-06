import { useSelector } from 'react-redux'
import { getFavorite } from '../../store/features/wishlistSlice'

import FavoriteItem from './FavoriteItem'

import styles from './Favorite.module.scss'

const Favorite = () => {
    const favoriteItems = useSelector(getFavorite)

    return (
        <div className={styles.pages}>
            {favoriteItems.length ? (
                <div>
                    {favoriteItems.map((favoriteItem) => (
                        <FavoriteItem key={favoriteItem.slug.current} product={favoriteItem} />
                    ))}
                </div>
            ) : (
                <div>
                    <h3>Нет товаров в израбанном</h3>
                </div>
            )}
        </div>
    )
}

export default Favorite
