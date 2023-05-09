import { CategoriesState, ICategoryVariable } from '../lib/sanity_studio/types/category.types'
import { IProducts } from '../lib/sanity_studio/types/products.types'

export interface ICategoryDeviceProps {
    data: IProducts[] | undefined
    categories: any
    handleMenuClose: () => void
    categoryVariables: ICategoryVariable | null
    setCategoryVariables: React.Dispatch<React.SetStateAction<ICategoryVariable | null>>
    setIsVisible?: React.Dispatch<
        React.SetStateAction<'jewelry' | 'collection' | 'gift' | 'materials' | null>
    >
}
