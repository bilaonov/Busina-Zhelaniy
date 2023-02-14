import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

import { ICategory } from '../../lib/sanity_studio/types/category.types'
import { fetchCategories } from '../../utils/fetchCategories'

interface Props {
    categories: ICategory[]
}

const Index: NextPage<Props> = ({ categories }) => {
    return (
        <>
            <h1>Категории</h1>
            {categories.map((item: ICategory) => (
                <Link href={`/category/${item.slug?.current}`}>{item.title}</Link>
            ))}
        </>
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
