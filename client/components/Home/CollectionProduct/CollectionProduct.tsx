import React from 'react'
import styles from './CollectionProduct.module.scss'
import Image from 'next/image'
import Heading from '../../ui/Heading/Heading'
import Link from 'next/link'
import BlurImage from '../../ui/BlurImage/BlurImage'

const CollectionProduct = () => {
    return (
        <div className={styles.components}>
            <div className={styles.pages}>
                <div className={styles.leftContent}>
                    <div className={styles.images}>
                        <BlurImage src="/ImageAboutUsRewiews.jpg" alt="AboutUsRewiews" fill />
                    </div>
                </div>

                <div className={styles.content}>
                    <h3 className={styles.title}>BZ</h3>
                    <Heading className={styles.heading} title="The Reminiscence Ring">
                        Behind the science and craft of the world’s largest lab-grown diamond ring,
                        by Unsaid.
                    </Heading>
                    <Link href="/">
                        <a id="lineLink">Узнать больше {'>'}</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CollectionProduct
