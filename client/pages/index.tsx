import type { NextPage } from 'next'

import { wrapper } from '../store/app/store'
import { setCategories } from '../store/features/categoriesSlice'

import { ICategory } from '../lib/sanity_studio/types/category.types'
import { fetchCategories } from '../utils/fetchCategories'
import { fetchProducts } from '../utils/fetchProducts'

import { IProducts } from '../lib/sanity_studio/types/products.types'

import AboutMe from '../components/Home/AboutMe/AboutMe'
import CollectionProduct from '../components/Home/CollectionProduct/CollectionProduct'
import ProductPopularSection from '../components/Home/ProductPopularSection/ProductPopularSection'
import VideoContent from '../components/Home/VideoContent/VideoContent'
import Container from '../components/ui/Container/Container'
import { SessionProvider } from '../components/Auth/SessionProvider/sessionProvider'

interface Props {
    products: IProducts[]
}

const Home: NextPage<Props> = ({ products }) => {
    return (
        <SessionProvider>
            <VideoContent />
            <Container className="homeContainer">
                <ProductPopularSection products={products} />
                <CollectionProduct />
                <AboutMe />
            </Container>
        </SessionProvider>
    )
}

export default Home

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    const category: ICategory[] = await fetchCategories()
    const products: IProducts[] = await fetchProducts()
    // const productsCounts: IProductsCounts[] = await client.fetch(productsCountsQuery)
    store.dispatch(setCategories(category))
    return {
        props: {
            products,
            // productsCounts,
        },
    }
})
