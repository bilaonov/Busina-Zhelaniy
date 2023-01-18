import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Heading from '../../components/ui/Heading/Heading'
import { findSlugQuery, productQuery } from '../../lib/sanity_studio/query/products'
import { client } from '../../lib/sanity_studio/sanity'
import { IProducts, ProductVariant } from '../../lib/sanity_studio/types/products.types'
import { urlForImage } from '../../lib/sanity_studio/urlForImage'
import Button from '../../components/ui/Button/Button'
import styles from '../../styles/productId.module.scss'
import { useRouter } from 'next/router'
import Select from '../../components/ui/Select/Select'
import { IColors } from '../../lib/sanity_studio/types/color.types'
import { SetStateAction, useEffect, useRef, useState } from 'react'
import { variantSolver } from '../../utils/groqResolver'

interface ProductProps {
    product: IProducts
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const [currentItems, setCurrentItems] = useState<ProductVariant>(product.variants[0])

    const variantHandler = (index: number) => {
        const { color, images, qty, price, color_name, sizes } = variantSolver(
            product.variants[index],
        )
        setCurrentItems({
            ...currentItems,
            color,
            images,
            qty,
            price,
            color_name,
            sizes,
        })
    }

    return (
        <div className={styles.product} key={product._id}>
            <div className={styles.productPages}>
                <div className={styles.productLeftItems}>
                    {currentItems.images.map((image) => (
                        <div className={styles.productImage1}>
                            <Image
                                src={urlForImage(image).url().toString()}
                                alt="Cart"
                                width={700}
                                height={700}
                            />
                        </div>
                    ))}
                </div>

                <div className={styles.productRigthItems}>
                    <div className={styles.productItem}>
                        <Heading title={product.title}>{product.description}</Heading>
                        <div className={styles.productColors}>
                            <div className={styles.productColorItem}>
                                {product.variants?.map((colors, index) => (
                                    <div onClick={() => variantHandler(index)}>
                                        <span
                                            style={{
                                                background: colors.color,
                                            }}
                                        ></span>
                                    </div>
                                ))}
                            </div>
                            <div>{currentItems.color_name}</div>
                        </div>

                        <div className={styles.productSize}>
                            <div className={styles.productSizeBloks}>
                                <p>Размер:</p>
                                <Select size={currentItems.sizes} />
                            </div>

                            <p>Узнать размер?</p>
                        </div>
                        <Button
                            variant="default"
                            className={styles.productBtn}
                            title={`${currentItems.price}p - Добавить в корзину`}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.productOtherImage}>
                {product.image_models &&
                    product.image_models.map((img) => (
                        <div className={styles.productModelsImage}>
                            <Image src={urlForImage(img).url().toString()} alt="Cart" fill />
                        </div>
                    ))}
            </div>
            {product.other_images && (
                <div className={styles.productMoreInfo}>
                    <Heading
                        className={styles.productInfoText}
                        title="A contemporary diamond ring symbolising the power and beauty of change."
                    >
                        This minimalist radiant cut diamond ring suggests a moment of metamorphosis
                        in its distinctive silhouette.
                    </Heading>

                    <div className={styles.productInfoImage}>
                        {product.other_images &&
                            product.other_images?.map((img) => (
                                <div className={styles.productMoreImages}>
                                    <Image
                                        src={urlForImage(img).url().toString()}
                                        fill
                                        alt="Cart"
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Product

export const getStaticPaths: GetStaticPaths = async () => {
    const slug = await client.fetch(findSlugQuery)
    const paths = slug.map((item: { slug: string }) => ({
        params: {
            slug: item.slug,
        },
    }))
    return {
        paths: paths,
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const product: IProducts = await client.fetch(productQuery, {
        slug: params?.slug,
    })

    if (!product) {
        throw Error('Sorry, something went wrong.')
    }

    return {
        props: {
            product,
        },
    }
}
