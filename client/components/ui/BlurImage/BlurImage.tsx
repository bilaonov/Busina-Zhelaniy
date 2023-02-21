import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './BlurImage.module.scss'
interface BlurImageProps {
    src: string
    alt: string
    className?: string
    fill?: boolean
    width?: number
    height?: number
}

const BlurImage: React.FC<BlurImageProps> = ({ src, alt, className, fill, width, height }) => {
    const [isLoading, setLoading] = useState(true)

    return (
        <div className={styles.blur} style={{ width: width, height: height }}>
            <Image
                alt={alt}
                src={src}
                fill
                className={clsx(
                    className,
                    styles.imageTransition,
                    isLoading ? styles.imageLoading : styles.imageLoaded,
                )}
                onLoadingComplete={() => setLoading(false)}
            />
        </div>
    )
}

export default BlurImage
