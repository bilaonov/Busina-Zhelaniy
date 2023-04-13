export interface ICategory {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: 'category'
    count?: number | null
    slug: {
        _type: 'slug'
        current?: string
    }
    title: string
}

export type CategoriesState = {
    list: ICategory[] | null
    pending: boolean
    error: boolean
}

export interface ICategoryVariable {
    value?: string | undefined
    label?: string
    product_count?: number | null
}
