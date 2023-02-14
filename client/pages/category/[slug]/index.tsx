import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../../components/core/Layout/Layout'

import ProductList from '../../../components/Product/ProductList/ProductList'
import Container from '../../../components/ui/Container/Container'
import Heading from '../../../components/ui/Heading/Heading'
import { categoryPathQuery, categorySlugQuery } from '../../../lib/sanity_studio/query/category'

import { client } from '../../../lib/sanity_studio/sanity'
import { ICategory } from '../../../lib/sanity_studio/types/category.types'
import { IProducts } from '../../../lib/sanity_studio/types/products.types'
import { fetchCategories } from '../../../utils/fetchCategories'

interface Props {
    products: IProducts[]
    categories: ICategory[]
}

const Index: NextPage<Props> = ({ products, categories }) => {
    const router = useRouter()
    const title = categories.filter((i) => i.slug?.current === router.query.slug)

    return (
        <Container>
            <Heading title={`${title[0].title} ${title[0].count}`} />
            <ProductList products={products} />
        </Container>
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
