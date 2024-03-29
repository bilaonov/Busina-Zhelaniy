import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import ProductList from '../components/Product/ProductList/ProductList'
import { IProducts } from '../lib/sanity_studio/types/products.types'
import { fetchProducts } from '../utils/fetchProducts'
import Container from '../components/ui/Container/Container'
import styles from '../styles/products.module.scss'
import Heading from '../components/ui/Heading/Heading'
import { ICategory } from '../lib/sanity_studio/types/category.types'
import { fetchCategories } from '../utils/fetchCategories'

interface productsProps {
    products: IProducts[]
}

const Products: NextPage<productsProps> = ({ products }) => {
    return (
        <Container>
            <div className={styles.products}>
                <Heading title={'Все продукты'} className={styles.productsTitle} />
                <ProductList products={products} />
            </div>
        </Container>
    )
}

export default Products

export const getServerSideProps: GetServerSideProps = async () => {
    const category: ICategory[] = await fetchCategories()
    const products: IProducts[] = await fetchProducts()
    // const productsCounts: IProductsCounts[] = await client.fetch(productsCountsQuery)

    return {
        props: {
            products,
            category,
        },
    }
}
