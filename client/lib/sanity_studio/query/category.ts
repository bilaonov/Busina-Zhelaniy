import { groq } from 'next-sanity'

export const categoryQuery = groq`*[_type == "category" ] {
    _id,
    slug,
      title
        } | order(_createdAt asc)`
