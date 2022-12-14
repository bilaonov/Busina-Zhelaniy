import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from './sanity'

const builder = imageUrlBuilder(client)

export const urlForImage = (source: SanityImageSource) => builder.image(source)
