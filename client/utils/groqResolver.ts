import { ProductVariant } from '../lib/sanity_studio/types/products.types'

export const variantSolver = (variant: ProductVariant) => {
    const { color, images, qty, price, color_name, sizes } = variant

    return {
        color,
        images,
        qty,
        price,
        color_name,
        sizes,
    }
}
