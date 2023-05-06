import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Heading from '../../components/ui/Heading/Heading'
import { findSlugQuery, productQuery } from '../../lib/sanity_studio/query/products'
import { client } from '../../lib/sanity_studio/sanity'
import { IProducts, ProductVariant } from '../../lib/sanity_studio/types/products.types'
import { urlForImage } from '../../lib/sanity_studio/urlForImage'
import Button from '../../components/ui/Button/Button'
import styles from '../../styles/productId.module.scss'

import { useState } from 'react'
import { variantSolver } from '../../utils/groqResolver'
import Select, { SingleValue } from 'react-select'
import { addToProductCart } from '../../store/features/cartSlice'
import { useDispatch } from 'react-redux'

interface ProductProps {
    product: IProducts
}

interface ISize {}

const Product: React.FC<ProductProps> = ({ product }) => {
    const dispatch = useDispatch()

    const [size, setSize] = useState<SingleValue<{ value: string; label: string }>>()
    const [currentItems, setCurrentItems] = useState<ProductVariant>(product.variants[0])

    const handleAddToCart = () => {
        const item = {
            slug: product.slug.current,
            id: product._id,
            image: currentItems.images,
            title: product.title,
            color: currentItems.color_name,
            colorHex: currentItems.color,
            price: currentItems.price,
            size: size?.value,
        }
        dispatch(addToProductCart(item))
        
    }

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

    const formatOptions = () => {
        const options =
            currentItems.sizes &&
            currentItems.sizes.map((size: string) => ({
                value: size,
                label: size,
            }))

        return options
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
                                width={1209}
                                height={1200}
                            />
                        </div>
                    ))}
                </div>

                <div className={styles.productRigthItems}>
                    <div className={styles.productItem}>
                        <Heading title={product.title}>{product.description}</Heading>
                        <div>
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
                                <p>{currentItems.color_name}</p>
                            </div>
                            <div className={styles.productSize}>
                                <div className={styles.productSizeBloks}>
                                    <p>Размер:</p>
                                    <Select
                                        onChange={(e) => setSize(e)}
                                        className={styles.productSelect}
                                        options={formatOptions()}
                                        placeholder="Выберите размер"
                                    />
                                </div>
                                <div>
                                    <p>Узнать размер?</p>
                                </div>
                            </div>
                        </div>

                        {size ? (
                            <Button
                                onClick={handleAddToCart}
                                variant="default"
                                className={styles.productBtn}
                                title={`${currentItems.price}руб - Добавить в корзину`}
                            />
                        ) : (
                            <Button
                                variant="default"
                                className={styles.productBtn}
                                title={`Выберите размер изделия`}
                            />
                        )}
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
