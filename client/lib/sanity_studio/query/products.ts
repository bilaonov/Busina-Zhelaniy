import { groq } from 'next-sanity'

// const productFields = `
//   _id,
//   price,
//   title,
//   image_models,
//   description,
//   category,
//   slug,
//   other_images,
//   product_size,
//   'product_images': product_images[]{
//     'name': color_name,
//     'color': color_hex.hex,
//     'image': image
//   }

// `

const productFields = `
_id,
title,
image_models,
description,
category,
slug,
other_images,
"product_category": category-> slug.current,
defaultProductVariant {
  color_name,
  'color': color.hex,
  images,
  price,
  qty,
  sizes
},
variants[]{
  'color': color.hex,
  color_name,
  images,
  price,
  qty,
  sizes
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
