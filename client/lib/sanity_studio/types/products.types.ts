import { IColors } from './color.types'
import { Image } from './image.types'

export interface IProducts {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev?: string
    _type?: 'products'
    description: string
    title: string
    product_category: string
    category: {
        _type: 'reference'
        _ref: string
    }
    slug: {
        _type: 'slug'
        current: string
    }
    image_models?: Image[]
    other_images?: Image[]
    variants: ProductVariant[]
}

interface ProductImage {
    checkImg(checkImg: any): unknown
    color: string
    name: string
    image: Image[]
}

export interface ProductVariant {
    color: string
    color_name: string
    images: Image[]
    price: number
    qty: number
    sizes: string[]
}
