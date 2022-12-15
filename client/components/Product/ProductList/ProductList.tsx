import { NextPage } from 'next'
import { IProducts } from '../../../lib/sanity_studio/types/products.types'
import styles from './ProductList.module.scss'
import Image from 'next/image'
import { urlForImage } from '../../../lib/sanity_studio/urlForImage'
import { IColors } from '../../../lib/sanity_studio/types/color.types'
import { useState } from 'react'
import Link from 'next/link'

interface Props {
    products: IProducts[]
}

const ProductList: NextPage<Props> = ({ products }) => {
    const [hover, setHover] = useState<boolean[]>([])

    const mouseOver = (index: number) => {
        setHover((c) => {
            return {
                ...c,
                [index]: true,
            }
        })
    }

    const mouseOut = (index: number) => {
        setHover((c) => {
            return {
                ...c,
                [index]: false,
            }
        })
    }
    return (
        <div>
            <div className={styles.container}>
                {products &&
                    products.map((product: IProducts, index): any => (
                        <Link href={`/product/${product.slug.current}`}>
                            <div
                                className={styles.items}
                                key={product._id}
                                onMouseEnter={() => {
                                    mouseOver(index)
                                }}
                                onMouseLeave={() => {
                                    mouseOut(index)
                                }}
                            >
                                <div className={styles.imgBlock}>
                                    <div className={styles.image2}>
                                        <Image
                                            src="/heart.svg"
                                            alt="heart"
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                    <div className={styles.image1}>
                                        <Image
                                            src={urlForImage(
                                                hover[index] && product.image2
                                                    ? product.image2
                                                    : product.image,
                                            )
                                                .url()
                                                .toString()}
                                            alt="Cart"
                                            layout="fill"
                                        />
                                    </div>
                                </div>

                                <div className={styles.block}>
                                    <div className={styles.leftBlock}>
                                        <div className={styles.title}>{product.title}</div>

                                        <>
                                            <div className={styles.nameColor}>
                                                {product.colors.nameColor}
                                            </div>
                                            <div className={styles.color}>
                                                {product.colors.map((color: IColors) => (
                                                    <span
                                                        style={{
                                                            background: color.colorCode.hex,
                                                        }}
                                                    ></span>
                                                ))}
                                            </div>
                                        </>
                                    </div>

                                    <div className={styles.rightBlock}>
                                        <div className={styles.price}>{product.price} p</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    )
}

export default ProductList
