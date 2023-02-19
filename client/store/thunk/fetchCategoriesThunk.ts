import { createAsyncThunk } from '@reduxjs/toolkit'
import { categoryQuery } from '../../lib/sanity_studio/query/category'
import { client } from '../../lib/sanity_studio/sanity'
import { ICategory } from '../../lib/sanity_studio/types/category.types'

const fetchCategories = createAsyncThunk('/categories/fetch/categories', async () => {
    const resCategories: ICategory[] = await client.fetch(categoryQuery)
    return resCategories
})

export default fetchCategories
