import { ICategory } from '../lib/sanity_studio/types/category.types'

export const fetchCategories = async () => {
    const res = await fetch(`${process.env.PUBLIC_URL}/api/getCategories`)
    const data = await res.json()

    const categories: ICategory[] = data.categories
    return categories
}
