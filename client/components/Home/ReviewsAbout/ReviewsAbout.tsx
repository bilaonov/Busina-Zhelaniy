import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import Heading from '../../ui/Heading/Heading'
import styles from './ReviewsAbout.module.scss'

interface IReviewProps {
    item: IReviewItem
}

interface IReviewItem {
    image: string
    author: string
    text: string
}

const data = [
    {
        image: '/images1.jpg',
        author: 'Tyler May',
        text: 'dasdsadasdasdasdasd',
    },
    {
        image: '/imageReview.jpg',
        author: 'Tyler May',
        text: 'dasdsadasdasdasdasd',
    },
    {
        image: '/imageReview2.jpg',
        author: 'Tyler May',
        text: 'dasdsadasdasdasdasd',
    },
]

const ReviewsAbout = () => {
    return (
        <div className={styles.container}>
            <Heading title="Отзывы о нас" />
            <div className={styles.items}>
                {data.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </div>
        </div>
    )
}

const Item: React.FC<IReviewProps> = ({ item }) => {
    const [hover, setHover] = useState({})

    const mouseOver = () => {
        setHover(true)
    }

    const mouseOut = () => {
        setHover(false)
    }

    return (
        <motion.div
            className={styles.bloks}
            onMouseEnter={mouseOver}
            onMouseLeave={mouseOut}
            transition={{ deration: 0.3 }}
            animate={{ y: hover ? -20 : 0 }}
        >
            <Image className={styles.image} src={item.image} alt="test" width={550} height={650} />
            <motion.div className={styles.reviews}>
                <div className={styles.blur}></div>
                <div className={styles.content}>
                    <p className={styles.name}>{item.author}</p>
                    <p className={styles.text}>{item.text}</p>
                    <div className={styles.socalLink}>
                        <Image src="/instagramsvg.svg" alt="test" width={30} height={30} />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ReviewsAbout
