import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'

import Heading from '../../components/ui/Heading/Heading'
import { findSlugQuery, productQuery } from '../../lib/sanity_studio/query/products'
import { client } from '../../lib/sanity_studio/sanity'
import { IProducts } from '../../lib/sanity_studio/types/products.types'
import { urlForImage } from '../../lib/sanity_studio/urlForImage'
import Button from '../../components/ui/Button/Button'
import styles from '../../styles/productId.module.scss'
import { useRouter } from 'next/router'

interface ProductProps {
    product: IProducts
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const router = useRouter()

    if (router.isFallback) {
        return <h1>Loading</h1>
    }

    return (
        <div className={styles.product} key={product._id}>
            <div className={styles.productPages}>
                <div className={styles.productLeftItems}>
                    <div className={styles.productImage1}>
                        <Image
                            src={urlForImage(product.image[0]).url().toString()}
                            alt="Cart"
                            width={700}
                            height={700}
                        />
                    </div>
                </div>

                <div className={styles.productRigthItems}>
                    <div className={styles.productItem}>
                        <Heading title={product.title}>{product.description}</Heading>
                        <div className={styles.productColor}>
                            <span></span>
                            <p>Серый</p>
                        </div>
                        <div className={styles.productSize}>
                            <p>Размер</p>
                            <p>Узнать размер?</p>
                        </div>
                        <Button
                            className={styles.productBtn}
                            title={product.price}
                            variant="light"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.productOtherImage}>
                {product.imagesModels!.map((img) => (
                    <div className={styles.productModelsImage}>
                        <Image src={urlForImage(img).url().toString()} alt="Cart" fill />
                    </div>
                ))}
            </div>
            <div className={styles.productMoreInfo}>
                <Heading
                    className={styles.productInfoText}
                    title="A contemporary diamond ring symbolising the power and beauty of change."
                >
                    This minimalist radiant cut diamond ring suggests a moment of metamorphosis in
                    its distinctive silhouette.
                </Heading>

                <div className={styles.productInfoImage}>
                    {product.otherImage!.map((img) => (
                        <div className={styles.productMoreImages}>
                            <Image src={urlForImage(img).url().toString()} fill alt="Cart" />
                        </div>
                    ))}
                </div>
            </div>
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
