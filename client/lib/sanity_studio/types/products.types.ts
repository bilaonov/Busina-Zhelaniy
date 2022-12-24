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
    price: number
    category: {
        _type: 'reference'
        _ref: string
    }
    slug: {
        _type: 'slug'
        current: string
    }
    color: IColors
    image: Image[]
    imagesModels?: Image[]
    otherImage?: Image[]
    size: string[]
}
