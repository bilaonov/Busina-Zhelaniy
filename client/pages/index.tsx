import type { GetServerSideProps, NextPage } from 'next'
import Category from '../components/Category/Category'
import AboutMe from '../components/Home/AboutMe/AboutMe'
import CollectionProduct from '../components/Home/CollectionProduct/CollectionProduct'
import ProductPopularSection from '../components/Home/ProductPopularSection/ProductPopularSection'
import ReviewsAbout from '../components/Home/ReviewsAbout/ReviewsAbout'
import VideoContent from '../components/Home/VideoContent/VideoContent'
import Container from '../components/ui/Container/Container'
import { ICategory } from '../lib/sanity_studio/types/category.types'
import { IProducts } from '../lib/sanity_studio/types/products.types'
import { fetchCategories } from '../utils/fetchCategories'
import { fetchProducts } from '../utils/fetchProducts'

interface Props {
    categories: ICategory[]
    products: IProducts[]
}

const Home: NextPage<Props> = ({ categories, products }) => {
    return (
        <div id="home">
            <VideoContent />
            <Container>
                <ProductPopularSection products={products} />
                <CollectionProduct />
                <AboutMe />
                {/* <ReviewsAbout /> */}
            </Container>
        </div>
    )
}

export default Home

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const categories: ICategory[] = await fetchCategories()
    const products: IProducts[] = await fetchProducts()
    return {
        props: {
            categories,
            products,
        },
    }
}
