import { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { client } from '../../lib/sanity_studio/sanity'
import { IProducts } from '../../lib/sanity_studio/types/products.types'

type Data = {
    products: IProducts[]
}

const query = groq`*[_type == "products" ] {
    _id,
    price,
    title,
    image,
    imagesModels,
    description,
    category,
    slug,
    "color": productColor[]{
        'name': nameColor,
        'hex': colorCode.hex
      }
    } | order(_createdAt asc)`

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const products: IProducts[] = await client.fetch(query)

    res.status(200).json({ products })
}
