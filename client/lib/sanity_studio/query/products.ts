import { groq } from 'next-sanity'

const productFields = `
    _id,
    price,
    title,
    image,
    imagesModels,
    description,
    category,
    slug,
    otherImage,
  
    size,
    "color": productColor[]{
        'name': nameColor,
        'hex': colorCode.hex
      }
`

export const findSlugQuery = groq`  *[_type == "products"]{
    "slug": slug.current
  }`

export const productQuery = groq`*[_type == "products" && slug.current == $slug][0] {
    ${productFields}
  }`

export const productAllQuery = groq`*[_type == "products" ] {
    ${productFields}
    } | order(_createdAt asc)`
