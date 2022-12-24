import { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { productAllQuery } from '../../lib/sanity_studio/query/products'
import { client } from '../../lib/sanity_studio/sanity'
import { IProducts } from '../../lib/sanity_studio/types/products.types'

type Data = {
    products: IProducts[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const products: IProducts[] = await client.fetch(productAllQuery)

    res.status(200).json({ products })
}
