import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { categoryQuery } from '../../lib/sanity_studio/query/category'
import { client } from '../../lib/sanity_studio/sanity'
import { ICategory } from '../../lib/sanity_studio/types/category.types'

type Data = {
    categories: ICategory[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const categories: ICategory[] = await client.fetch(categoryQuery)
    res.status(200).json({ categories })
}
