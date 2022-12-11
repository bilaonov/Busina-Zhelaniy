import type { NextPage } from 'next'
import AboutMe from '../components/Home/AboutMe/AboutMe'
import CollectionProduct from '../components/Home/CollectionProduct/CollectionProduct'

import ProductPopularSection from '../components/Home/ProductPopularSection/ProductPopularSection'
import ReviewsAbout from '../components/Home/ReviewsAbout/ReviewsAbout'
import Container from '../components/ui/Container/Container'
import Heading from '../components/ui/Heading/Heading'

const Home: NextPage = () => {
    return (
        <>
            <Container>
                <Heading title="Лидеры продаж">
                    Sculptural motifs crafted with uniquely cut lab-grown diamonds.
                </Heading>
                <ProductPopularSection />
                <CollectionProduct />
                <AboutMe />
                <ReviewsAbout />
            </Container>
        </>
    )
}

export default Home
