import Image from 'next/image'
import React, { RefObject } from 'react'
import styles from '../Header.module.scss'

interface ContentProps {
    imgRef1: RefObject<HTMLDivElement>
    imgRef2: RefObject<HTMLDivElement>
    imgRef3: RefObject<HTMLDivElement>
}

const Content = ({ imgRef1, imgRef2, imgRef3 }: ContentProps) => {
    return (
        <div className={styles.content}>
            <div className={styles.contentImg + ' ' + styles.contentImgLeft} ref={imgRef1}>
                <Image src="/img1.jpg" width={700} height={800} />
            </div>
            <div className={styles.contentImg + ' ' + styles.contentImgMain} ref={imgRef2}>
                <Image src="/image2.jpg" layout="fill" />
            </div>
            <div className={styles.contentImg + ' ' + styles.contentImgRight} ref={imgRef3}>
                <Image src="/img3.jpg" width={500} height={800} />
            </div>
        </div>
    )
}

export default Content
