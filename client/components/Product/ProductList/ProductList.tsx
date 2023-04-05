import { NextPage } from 'next'
import { IProducts } from '../../../lib/sanity_studio/types/products.types'
import styles from './ProductList.module.scss'

import ProductCard from '../ProductCard/ProductCard'

interface Props {
    products: IProducts[]
}

const ProductList: NextPage<Props> = ({ products }) => {

    return (
        <div className={styles.container}>
            {products &&
                products
                    .slice(0, 4)
                    .map((product: IProducts) => (
                        <ProductCard products={product} key={product._id} />
                    ))}
        </div>
    )
}

export default ProductList
