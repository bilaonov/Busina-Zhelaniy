import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import { userId } from '../store/features/authSlice'
import { getCart } from '../store/features/cartSlice'
import { urlForImage } from '../lib/sanity_studio/urlForImage'
import { supabase } from '../lib/supabase'

import { DaDataAddress, DaDataSuggestion } from 'react-dadata'

import Image from 'next/image'
import Link from 'next/link'

import Container from '../components/ui/Container/Container'
import Title from '../components/ui/Title/Title'
import Heading from '../components/ui/Heading/Heading'
import usePayment from '../hooks/usePayment'
import DeliveryAddressForm from '../components/ui/DeliveryAddressForm/DeliveryAddressForm'
import styles from '../styles/checkout/checkout.module.scss'
import useAddressData from '../hooks/useAddress'
import Loading from '../components/ui/Loading/Loading'
import Address from '../components/Address/Address'

const Checkout = () => {
    const { items, total_price } = useSelector(getCart)
    const user_id = useSelector(userId)
    const { addressData, isLoading } = useAddressData(user_id)
    const { makePayment } = usePayment({ total_price })

    const deliveryMethods = ['Почта России', 'СДЕК', 'Самовывоз']

    const [value, setValue] = useState<DaDataSuggestion<DaDataAddress> | undefined>()

    const [selectMethod, setSelectedMethod] = useState<string>()

    const handleAddressSubmit = async () => {
        try {
            const { data, error } = await supabase.from('order').insert({
                user_id: user_id,
                city: value?.data.city,
                delivery_methods: selectMethod,
                street: value?.data.street,
                region: value?.data.region,
                country: value?.data.country,
                house: value?.data.house,
                zipcode: value?.data.postal_code,
            })

            if (error) {
                throw new Error('Error inserting address data')
            }
        } catch (error) {
            console.log('Error loading address data:', error)
        }
    }

    const handleMethodChange = (event: any) => {
        setSelectedMethod(event.target.value)
    }

    return (
        <Container>
            <div className={styles.order}>
                <Heading title="Оформление заказа" />
                <div className={styles.orderPages}>
                    {!isLoading ? (
                        <div className={(styles.orderDelivery, styles.delivery)}>
                            <div className={styles.deliveryTitle}>
                                <Title>Детали доставки</Title>
                            </div>
                            {addressData && addressData.user_id === user_id ? (
                                <Address addressData={addressData} />
                            ) : (
                                <>
                                    <div className={styles.deliverySelectText}>
                                        Выберете почтогово отправителя
                                    </div>
                                    <div className={styles.deliverySelect}>
                                        {deliveryMethods.map((method) => (
                                            <div key={method}>
                                                {
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            value={method}
                                                            checked={selectMethod === method}
                                                            onChange={handleMethodChange}
                                                        />

                                                        {method}
                                                    </label>
                                                }
                                            </div>
                                        ))}
                                    </div>
                                    <div className={styles.deliveryAddress}>
                                        <div className={styles.deliveryAddressTitle}>
                                            <p>Адрес доставки</p>
                                        </div>

                                        <DeliveryAddressForm
                                            value={value}
                                            setValue={setValue}
                                            onSubmit={handleAddressSubmit}
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    ) : (
                        <div className={(styles.orderDelivery, styles.delivery)}>
                            <div className={styles.orderLoading}>
                                <Loading />
                            </div>
                        </div>
                    )}

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
