import Meta from '../components/core/Meta/Meta'
import { useDispatch, useSelector } from 'react-redux'
import {
    ICardProduct,
    clearCart,
    getCart,
    removeProductCart,
    totalPrice,
} from '../store/features/cartSlice'
import styles from '../styles/cart/cart.module.scss'
import Title from '../components/ui/Title/Title'
import Link from 'next/link'
import { urlForImage } from '../lib/sanity_studio/urlForImage'
import Image from 'next/image'
import Button from '../components/ui/Button/Button'
import { closeMenu } from '../store/features/megaMenuSlice'

const Cart = () => {
    const dispatch = useDispatch()
    const total_price = useSelector(totalPrice)
    const { items } = useSelector(getCart)

    const clearCartItem = () => {
        dispatch(clearCart())
        dispatch(closeMenu())
    }
    const onRemoveCartItem = (productSlug: string, productSize: string, productColor: string) => {
        dispatch(removeProductCart({ productSlug, productSize, productColor }))
    }

    const handleCloseMenu = () => {
        dispatch(closeMenu())
    }

    return (
        <>
            <Meta title="Корзина" />
            <div className={styles.cart}>
                <div className={styles.cartHeading}>
                    <div className={styles.cartHeadingTitle}>
                        <Title>Корзина</Title>
                    </div>

                    <p className={styles.cartHeadingText}>
                        Хотите, чтобы ваш список желаний сохранялся на разных устройствах? Войдите
                        или создайте учетную запись Busina Zhelaniy сегодня.
                    </p>
                </div>
                <div className={styles.cartProductHeadingBox}>
                    <div className={styles.cartProductTitle}>
                        Товары<span></span>
                    </div>
                    <div onClick={clearCartItem} className={styles.cartProductClear}>
                        Очистить корзину
                    </div>
                </div>
                {items.length ? (
                    <div className={styles.cartProductBlock}>
                        {items &&
                            items.map((product: ICardProduct) => (
                                <Link href={`product/${product.slug}`} key={product.id}>
                                    <div className={styles.cartProduct}>
                                        <div className={styles.cartProductImage}>
                                            <Image
                                                src={urlForImage(product.image[0]).url().toString()}
                                                width={100}
                                                height={100}
                                                alt={product.slug}
                                            />
                                        </div>
                                        <div className={styles.cartProductInfo}>
                                            <div className={styles.cartProductText}>
                                                {product.title}
                                            </div>
                                            <div className={styles.cartProductColor}>
                                                Цвет:
                                                <span
                                                    style={{
                                                        background: product.colorHex,
                                                    }}
                                                ></span>
                                                {product.color}
                                            </div>
                                            <div className={styles.cartProductSize}>
                                                Размер:
                                                {product.size}
                                            </div>
                                        </div>
                                        <div className={styles.cartProductRemove}>
                                            <div
                                                className={styles.cartProductRemoveBtn}
                                                onClick={(e): void => {
                                                    e.preventDefault()
                                                    if (product.size) {
                                                        onRemoveCartItem(
                                                            product.slug,
                                                            product.size,
                                                            product.color,
                                                        )
                                                    } else {
                                                        onRemoveCartItem(
                                                            product.slug,
                                                            product.size ?? 'defaultSize',
                                                            product.color ?? 'defaultColor',
                                                        )
                                                    }
                                                }}
                                            >
                                                <Image
                                                    src="/closeicon.png"
                                                    alt="heart"
                                                    width={20}
                                                    height={20}
                                                />
                                            </div>
                                            <div className={styles.cartProductPrice}>
                                                {product.count > 1
                                                    ? `${product.count} x ${product.price}`
                                                    : product.price}
                                                p
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                ) : (
                    <div className={styles.cartEmpty}>Корзина пуста</div>
                )}
                {items.length ? (
                    <div className={styles.cartBtnBlock}>
                        <Link href="/checkout">
                            <Button
                                onClick={handleCloseMenu}
                                className={styles.cartBtnAddCheckOut}
                                title={`${total_price}p перейти к оформлению заказа`}
                                variant="default"
                            />
                        </Link>
                    </div>
                ) : null}
            </div>
        </>
    )
}

export default Cart
