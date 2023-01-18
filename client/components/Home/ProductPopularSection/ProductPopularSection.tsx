import styles from './ProductPopularSection.module.scss'
import { IProducts } from '../../../lib/sanity_studio/types/products.types'
import Heading from '../../ui/Heading/Heading'
import Button from '../../ui/Button/Button'
import ProductList from '../../Product/ProductList/ProductList'

interface Props {
    products: IProducts[]
}

const ProductPopularSection: React.FC<Props> = ({ products }) => {
    return (
        <div className={styles.container}>
            <Heading title="Лидеры продаж">
                Sculptural motifs crafted with uniquely cut lab-grown diamonds.
            </Heading>
            <ProductList products={products} />
            {/* <Button title="Загрузить больше" type="button" /> */}
        </div>
    )
}

export default ProductPopularSection
