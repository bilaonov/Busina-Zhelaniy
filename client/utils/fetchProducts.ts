import { IProducts } from '../lib/sanity_studio/types/products.types'

export const fetchProducts = async () => {
    const res = await fetch(`${process.env.PUBLIC_URL}/api/getProducts`)
    const data = await res.json()

    const products: IProducts[] = data.products
    return products
}
