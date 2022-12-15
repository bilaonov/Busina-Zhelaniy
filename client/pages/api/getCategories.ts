import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { client } from '../../lib/sanity_studio/sanity'
import { ICategory } from '../../lib/sanity_studio/types/category.types'

type Data = {
    categories: ICategory[]
}

const query = groq`*[_type == "category"] {
    _id,
      ...
}`

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const categories: ICategory[] = await client.fetch(query)
    res.status(200).json({ categories })
}
