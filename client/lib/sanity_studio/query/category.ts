import { groq } from 'next-sanity'

export const categoryQuery = groq`[{"slug": {"current": "all"}, "title": "Все продукты", "count": count(*[_type == "products"])} ] + *[_type == "category"] {
    _id,
    slug,
    title,
    "count": count(products)
        } | order(_createdAt asc)`

export const categoryPathQuery = groq`*[_type == "products" && category-> slug.current == $slug]`

export const categorySlugQuery = groq`*[_type == "category"]{
    "slug": slug.current
  }`
