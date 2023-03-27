import Link from 'next/link'

import Heading from '../../ui/Heading/Heading'
import BlurImage from '../../ui/BlurImage/BlurImage'

import styles from './CollectionProduct.module.scss'

const CollectionProduct = () => {
    return (
        <div className={styles.box}>
            <div className={styles.boxPages}>
                <div className={styles.boxLeftContent}>
                    <div className={styles.boxImages}>
                        <BlurImage src="/ImageAboutUsRewiews.jpg" alt="AboutUsRewiews" fill />
                    </div>
                </div>

                <div className={styles.boxRightContent}>
                    <h3 className={styles.boxTitle}>BZ</h3>
                    <Heading className={styles.boxHeading} title="The Reminiscence Ring">
                        Behind the science and craft of the world’s largest lab-grown diamond ring,
                        by Unsaid.
                    </Heading>
                    <Link href="/" id="lineLink">
                        <a>Узнать больше {'>'}</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CollectionProduct
