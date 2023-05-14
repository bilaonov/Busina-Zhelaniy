import React, { useCallback } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { deliveryAddressSchema } from '../../../utils/validation'

import Input from '../Input/Input'
import styles from '../../../styles/checkout/checkout.module.scss'
import Button from '../Button/Button'

export interface IDeliverySchema {
    firstName: string
    // lastName: string
    // email: string
    // phone: string
    // address: string
    // address2: string
    // country: string
    // state: string
    // city: string
    // zipcode: string
}

interface DeliveryAddressFormProps {
    onSubmit: (data: IDeliverySchema) => void
}

const DeliveryAddressForm: React.FC<DeliveryAddressFormProps> = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IDeliverySchema>({
        resolver: yupResolver(deliveryAddressSchema),
    })

    return (
        <form className={styles.deliveryForm} onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="text"
                {...register('firstName')}
                id="inp"
                label="Введите имя"
                placeholder="&nbsp;"
                errors={errors.firstName?.message}
            />
            {/* <Input
                type="text"
                {...register('lastName')}
                id="inp"
                label="Введите фамилию"
                placeholder="&nbsp;"
                errors={errors.lastName?.message}
            />
            <Input
                type="email"
                {...register('email')}
                id="inp"
                label="Введите почту"
                placeholder="&nbsp;"
                errors={errors.email?.message}
            />

            <Input
                type="tel"
                {...register('phone')}
                id="inp"
                label="Введите номер телефона"
                placeholder="&nbsp;"
                errors={errors.phone?.message}
            />
            <Input
                type="text"
                {...register('address')}
                id="inp"
                label="Введите адресс"
                placeholder="&nbsp;"
                errors={errors.address?.message}
            />
            <Input
                type="text"
                {...register('address2')}
                id="inp"
                label="Дополнительный адрес"
                placeholder="&nbsp;"
                errors={errors.address2?.message}
            />
            <Input
                type="text"
                {...register('country')}
                id="inp"
                label="Введите страну"
                placeholder="&nbsp;"
                errors={errors.country?.message}
            />
            <Input
                type="text"
                {...register('state')}
                id="inp"
                label="Введите регион"
                placeholder="&nbsp;"
                errors={errors.state?.message}
            />
            <Input
                type="text"
                {...register('city')}
                id="inp"
                label="Введите город"
                placeholder="&nbsp;"
                errors={errors.city?.message}
            />
            <Input
                type="text"
                {...register('zipcode')}
                id="inp"
                label="Введите почтовый индекс"
                placeholder="&nbsp;"
                errors={errors.zipcode?.message}
            /> */}
            <Button type="submit" title="Созранить адрес" />
        </form>
    )
}

export default DeliveryAddressForm
