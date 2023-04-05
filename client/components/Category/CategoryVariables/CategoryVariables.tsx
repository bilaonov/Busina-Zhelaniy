import Link from 'next/link'
import React from 'react'
import { IProducts } from '../../../lib/sanity_studio/types/products.types'
import { urlForImage } from '../../../lib/sanity_studio/urlForImage'
import BlurImage from '../../ui/BlurImage/BlurImage'
import styles from '../Category.module.scss'

interface IProps {
    product: IProducts
    handleMenuClose: () => void
}

const CategoryVariables:React.FC<IProps> = ({product, handleMenuClose}) => {
  return (
    <Link href={`/product/${product.slug.current}`} key={product._id}>
    <a>
        <div
            onClick={handleMenuClose}
            className={styles.categoryProducts}
        >
            <div className={styles.categoryProductsImages}>
                <BlurImage
                    src={urlForImage(product.variants[0].images[0])
                        .url()
                        .toString()}
                    alt="Cart"
                    fill
                />
            </div>

            <div className={styles.categoryProductsOther}>
                <div className={styles.categoryProductsTitle}>
                    {product.title}
                </div>
                <div className={styles.categoryProductsDescription}>
                    {product.description}
                </div>
            </div>

            <div className={styles.categoryProductsPrice}>
                {product.variants[0].price}p
            </div>
        </div>
    </a>
</Link>
  )
}

export default CategoryVariables