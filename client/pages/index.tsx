//@ts-nochek
import type { NextPage } from 'next'
import AboutMe from '../components/AboutMe/AboutMe'
import SalesTop from '../components/SalesTop/SalesTop'
import Container from '../components/ui/Container/Container'
import Heading from '../components/ui/Heading/Heading'

const Home: NextPage = () => {
    return (
        <>
            <Container>
                <Heading>Лидеры продаж</Heading>
                <SalesTop />
                <AboutMe />
            </Container>
        </>
    )
}

export default Home
