import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/core/Layout/Layout'
import { ICategory } from '../../lib/sanity_studio/types/category.types'
import { fetchCategories } from '../../utils/fetchCategories'

interface Props {
    categories: ICategory[]
}

const Index: NextPage<Props> = ({ categories }) => {
    return (
        <Layout categories={categories}>
            <h1>Категории</h1>
            {categories.map((item) => (
                <Link href={`/category/${item.slug.current}`}>{item.title}</Link>
            ))}
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
    const categories: ICategory[] = await fetchCategories()
    return {
        props: {
            categories,
        },
    }
}

export default Index
