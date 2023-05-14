import React, { useCallback, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/ui/Container/Container'
import styles from '../styles/checkout/checkout.module.scss'
import Title from '../components/ui/Title/Title'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { deliveryAddressSchema } from '../utils/validation'
import Input from '../components/ui/Input/Input'

import Image from 'next/image'
import { urlForImage } from '../lib/sanity_studio/urlForImage'
import Link from 'next/link'
import { clearCart, getCart } from '../store/features/cartSlice'
import Heading from '../components/ui/Heading/Heading'
import Button from '../components/ui/Button/Button'
import { getPayment, postPayment } from '../api/payment'
import { useRouter } from 'next/router'
import usePayment from '../hooks/usePayment'
import DeliveryAddressForm, {
    IDeliverySchema,
} from '../components/ui/DeliveryAddressForm/DeliveryAddressForm'

interface DeliverySchema {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    address2: string
    country: string
    state: string
    city: string
    zipcode: string
}
const Checkout = () => {
    const { items, total_price } = useSelector(getCart)
    const { makePayment } = usePayment({ total_price })

    const handleAddressSubmit = (data: IDeliverySchema) => {
        console.log('Адрес доставки:', data)
        // Здесь вы можете обработать данные формы, например, отправить их на сервер
    }

    return (
        <Container>
            <div className={styles.order}>
                <Heading title="Оформление заказа" />
                <div className={styles.orderPages}>
                    <div className={(styles.orderDelivery, styles.delivery)}>
                        <div className={styles.deliveryTitle}>
                            <Title>Детали доставки</Title>
                        </div>
                        <div className={styles.deliverySelectText}>
                            Выберете почтогово отправителя
                        </div>
                        <div className={styles.deliverySelect}>
                            <div>Почта России</div>
                            <div>СДЕК</div>
                            <div>Самовывоз</div>
                        </div>
                        <div className={styles.deliveryAddress}>
                            <div className={styles.deliveryAddressTitle}>
                                <p>Адрес доставки</p>
                            </div>
                            <DeliveryAddressForm onSubmit={handleAddressSubmit} />
                        </div>
                    </div>
                    <div className={styles.orderBox}>
                        <div className={styles.orderTitle}>
                            <Title>Ваш заказ</Title>
                        </div>
                        <div className={styles.orderItems}>
                            {/* <div className={styles.orderGiftCode}>
                            <div className={styles.orderDiscountInput}>
                                <Input
                                    className={styles.orderInputBg}
                                    type="text"
                                    id="inp"
                                    label="Промокод"
                                    placeholder="&nbsp;"
                                />
                            </div>
                            <div className={styles.orderGiftInput}>
                                <Input
                                    className={styles.orderInputBg}
                                    type="text"
                                    id="inp"
                                    label="Подарочная карта"
                                    placeholder="&nbsp;"
                                />
                            </div>
                        </div> */}
                            <div className={styles.orderInfo}>
                                <div className={styles.orderTotalPrice}>
                                    <p>Итог</p>
                                    <p> {total_price} руб</p>
                                </div>
                                <div className={styles.orderDeliveryPrice}>
                                    <p>Доставка в Москву</p>
                                    <p>400 руб</p>
                                </div>
                            </div>
                            <div className={styles.orderTotalAmount}>
                                <p>Общий</p>
                                <p>{total_price + 400} руб</p>
                            </div>
                            <div className={styles.orderProductBlock}>
                                {items &&
                                    items.map((product: any) => (
                                        <Link href={`product/${product.slug}`} key={product.id}>
                                            <div className={styles.orderProduct}>
                                                <div className={styles.orderProductImage}>
                                                    <Image
                                                        src={urlForImage(product.image[0])
                                                            .url()
                                                            .toString()}
                                                        width={100}
                                                        height={100}
                                                        alt={product.slug}
                                                    />
                                                </div>
                                                <div className={styles.orderProductInfo}>
                                                    <div className={styles.orderProductText}>
                                                        {product.title}
                                                    </div>
                                                    <div className={styles.orderProductColor}>
                                                        Цвет:
                                                        <span
                                                            style={{
                                                                background: product.colorHex,
                                                            }}
                                                        ></span>
                                                        {product.color}
                                                    </div>
                                                    <div className={styles.orderProductSize}>
                                                        Размер:
                                                        {product.size}
                                                    </div>
                                                </div>

                                                <div className={styles.orderProductPrice}>
                                                    {product.count > 1
                                                        ? `${product.count} x ${product.price}`
                                                        : product.price}
                                                    p
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                            <div className={styles.orderBtnBlock}>
                                <button id="btn" onClick={makePayment}>
                                    {`${total_price}p перейти к оформлению заказа`}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Checkout
