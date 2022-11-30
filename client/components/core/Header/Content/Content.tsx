import Image from 'next/image'
import React, { RefObject } from 'react'
import styles from '../Header.module.scss'

const Content = () => {
    return (
        <div className={styles.content}>
            <div className={styles.frame}>
                <div className={styles.frameContent}>
                    <h2 className={styles.frameContentTitle}>Busina Zhelaniy</h2>
                    <p className={styles.frameContentText}>у нас вам понравиться</p>
                </div>
            </div>

            <div className={styles.plane} data-duration="2.5">
                <video
                    autoPlay={true}
                    muted
                    playsInline
                    src="/d.webm"
                    loop
                    data-sampler="firstTexture"
                    preload="auto"
                ></video>
            </div>
        </div>
    )
}

export default Content
