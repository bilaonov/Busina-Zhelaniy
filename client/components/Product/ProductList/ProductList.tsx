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
            {products && products.map((product: IProducts) => <ProductCard products={product} />)}
        </div>
    )
}

export default ProductList
