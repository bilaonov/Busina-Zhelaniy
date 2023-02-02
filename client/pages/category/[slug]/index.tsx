import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import { groq } from 'next-sanity'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../../components/core/Layout/Layout'
import ProductCard from '../../../components/Product/ProductCard/ProductCard'
import ProductList from '../../../components/Product/ProductList/ProductList'
import { categoryPathQuery, categorySlugQuery } from '../../../lib/sanity_studio/query/category'
import { findSlugQuery, productAllQuery } from '../../../lib/sanity_studio/query/products'
import { client } from '../../../lib/sanity_studio/sanity'
import { ICategory } from '../../../lib/sanity_studio/types/category.types'
import { IProducts } from '../../../lib/sanity_studio/types/products.types'
import { fetchCategories } from '../../../utils/fetchCategories'
import { fetchProducts } from '../../../utils/fetchProducts'

interface Props {
    products: IProducts[]
    categories: ICategory[]
}

const Index: NextPage<Props> = ({ products, categories }) => {
    const router = useRouter()
    return (
        <Layout categories={categories}>
            <ProductList products={products} />
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await client.fetch(categorySlugQuery)
    const paths = slugs.map((item: { slug: string }) => ({
        params: { slug: item.slug },
    }))
    return {
        paths: paths,
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
    const categories: ICategory[] = await fetchCategories()
    const products: IProducts[] = await client.fetch(categoryPathQuery, { slug: params?.slug })
    return {
        props: { products, categories },
    }
}

export default Index
