import { IColors } from './color.types'
import { Image } from './image.types'

export interface IProducts {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: 'products'
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

    colors: IColors

    image: Image[]
    image2?: Image[]
    image3?: Image[]
    image4?: Image[]
}
