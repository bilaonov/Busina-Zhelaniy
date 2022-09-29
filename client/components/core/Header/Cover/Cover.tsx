import React, { RefObject } from 'react'
import Image from 'next/image'
import styles from '../Header.module.scss'

interface CoverProps {
    wrapRef: RefObject<HTMLDivElement>
    coverRef: RefObject<HTMLDivElement>
    coverInnerRef: RefObject<HTMLDivElement>
}

const Cover = ({ wrapRef, coverRef, coverInnerRef }: CoverProps) => {
    return (
        <div className={styles.coverWrap} aria-hidden="true" ref={wrapRef}>
            <div className={styles.cover} ref={coverRef}>
                <div className={styles.coverInner} ref={coverInnerRef}>
                    <Image src="/cover.jpg" alt="Cart" layout="fill" />
                </div>
            </div>
        </div>
    )
}

export default Cover
