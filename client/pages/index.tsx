import type { NextPage } from 'next'

import { fetchCategories } from '../utils/fetchCategories'
import { fetchProducts } from '../utils/fetchProducts'

import { setCategories } from '../redux/categories/categoriesSlice'
import { wrapper } from '../redux/store'

import { ICategory } from '../lib/sanity_studio/types/category.types'
import { IProducts } from '../lib/sanity_studio/types/products.types'

import AboutMe from '../components/Home/AboutMe/AboutMe'
import CollectionProduct from '../components/Home/CollectionProduct/CollectionProduct'
import ProductPopularSection from '../components/Home/ProductPopularSection/ProductPopularSection'
import ReviewsAbout from '../components/Home/ReviewsAbout/ReviewsAbout'
import VideoContent from '../components/Home/VideoContent/VideoContent'
import Container from '../components/ui/Container/Container'

interface Props {
    products: IProducts[]
}

const Home: NextPage<Props> = ({ products }) => {
    return (
        <div id="home">
            <VideoContent />
            <Container className="homeContainer">
                <ProductPopularSection products={products} />
                <CollectionProduct />
                <AboutMe />
                <ReviewsAbout />
            </Container>
        </div>
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
