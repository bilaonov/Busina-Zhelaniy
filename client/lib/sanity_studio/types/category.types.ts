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
    category_slug: string | undefined
    category_title: string
    product_count: number | undefined | null
}
