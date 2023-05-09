import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectCategories } from '../../store/features/categoriesSlice'

import { productAllQuery } from '../../lib/sanity_studio/query/products'
import { client } from '../../lib/sanity_studio/sanity'

import { ICategory, ICategoryVariable } from '../../lib/sanity_studio/types/category.types'
import { IProducts } from '../../lib/sanity_studio/types/products.types'

import Desktop from '../ui/Adoptation/Desktop/Desktop'
import Mobile from '../ui/Adoptation/Mobile/Mobile'
import CategoryVariables from './CategoryVariables/CategoryVariables'
import Select from 'react-select'
import Tablet from '../ui/Adoptation/Tablet/Tablet'
import CategoryList from './CategoryList/CategoryList'
import CategoryCount from './CategoryCount/CategoryCount'
import Image from 'next/image'
import styles from './Category.module.scss'
import { onVisible } from '../../store/features/megaMenuSlice'
import CategoryDesktop from './CategoryDesktop/CategoryDesktop'
import CategoryTablet from './CategoryTablet/CategoryTablet'
import CategoryMobile from './CategoryMobile/CategoryMobile'

interface Props {
    setIsVisible?: React.Dispatch<
        React.SetStateAction<'jewelry' | 'collection' | 'gift' | 'materials' | null>
    >
}

const Category: React.FC<Props> = ({ setIsVisible }) => {
    const dispatch = useDispatch()
    const categories = useSelector(selectCategories)
    const [data, setData] = useState<IProducts[] | undefined>()
    const [categoryVariables, setCategoryVariables] = useState<ICategoryVariable | null>({
        value: 'all',
        label: 'Все продукты',
        product_count: 0,
    })

    useEffect(() => {
        client.fetch(productAllQuery).then((date) => setData(date))
    }, [])

    const handleMenuClose = () => {
        dispatch(onVisible())
    }

    return (
        <>
            <Desktop>
                <CategoryDesktop
                    data={data}
                    categories={categories}
                    handleMenuClose={handleMenuClose}
                    categoryVariables={categoryVariables}
                    setCategoryVariables={setCategoryVariables}
                />
            </Desktop>

            <Tablet>
                <CategoryTablet
                    data={data}
                    categories={categories}
                    handleMenuClose={handleMenuClose}
                    categoryVariables={categoryVariables}
                    setCategoryVariables={setCategoryVariables}
                    setIsVisible={setIsVisible}
                />
            </Tablet>
            <Mobile>
                <CategoryMobile
                    data={data}
                    setIsVisible={setIsVisible}
                    categories={categories}
                    handleMenuClose={handleMenuClose}
                    categoryVariables={categoryVariables}
                    setCategoryVariables={setCategoryVariables}
                />
            </Mobile>
        </>
    )
}

export default Category
