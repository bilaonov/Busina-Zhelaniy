import React from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { deliveryAddressSchema } from '../../../utils/validation'

import styles from '../../../styles/checkout/checkout.module.scss'
import Button from '../Button/Button'
import ErrorInput from '../ErrorInput/ErrorInput'
import { IDeliverySchema } from '../../../types/validationTypes'
import { AddressSuggestions, DaDataAddress, DaDataSuggestion } from 'react-dadata'

interface DeliveryAddressFormProps {
    onSubmit: (data: IDeliverySchema) => void
    value: DaDataSuggestion<DaDataAddress> | undefined
    setValue: React.Dispatch<React.SetStateAction<DaDataSuggestion<DaDataAddress> | undefined>>
}

const DeliveryAddressForm: React.FC<DeliveryAddressFormProps> = ({ onSubmit, value, setValue }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IDeliverySchema>({
        resolver: yupResolver(deliveryAddressSchema),
    })

    return (
        <>
            <form className={styles.deliveryForm} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="inp" id="Input">
                    <input type="text" {...register('firstName')} id="inp" placeholder="&nbsp;" />
                    <ErrorInput errors={errors.firstName?.message} label="Ввидите имя" />
                </label>
                <label htmlFor="inp" id="Input">
                    <input type="text" {...register('lastName')} id="inp" placeholder="&nbsp;" />
                    <ErrorInput errors={errors.lastName?.message} label="Введите фамилию" />
                </label>
                <label htmlFor="inp" id="Input">
                    <input type="email" {...register('email')} id="inp" placeholder="&nbsp;" />
                    <ErrorInput errors={errors.email?.message} label="Введите почту" />
                </label>
                <label htmlFor="inp" id="Input">
                    <input type="tel" {...register('phone')} id="inp" placeholder="&nbsp;" />
                    <ErrorInput errors={errors.phone?.message} label="Введите номер телефона" />
                </label>
                <label htmlFor="inp" id="Input">
                    <input type="text" id="inp" placeholder="&nbsp;" defaultValue={'Россия'} />
                    <ErrorInput errors={errors.country?.message} label="Введите страну" />
                </label>

                <label htmlFor="inp" id="Input">
                    <AddressSuggestions
                        inputProps={{ placeholder: 'Введите адрес' }}
                        containerClassName={styles.deliverySuggestionsContainer}
                        suggestionsClassName={styles.deliverySuggestionsSuggestions}
                        suggestionClassName={styles.deliverySuggestionsSuggestion}
                        token="4af39ded6cff1fb805dedac89f13e546568062c8"
                        value={value}
                        onChange={setValue}
                        count={5}
                    />
                </label>
                {!value?.data.postal_code ? (
                    <label htmlFor="inp" id="Input">
                        <input type="text" {...register('zipcode')} id="inp" placeholder="&nbsp;" />
                        <ErrorInput
                            errors={errors.zipcode?.message}
                            label="Введите почтовый индекс"
                        />
                    </label>
                ) : (
                    <label htmlFor="inp" id="Input">
                        <input
                            type="text"
                            {...register('zipcode')}
                            defaultValue={value.data.house ? value.data.postal_code : ''}
                            id="inp"
                            placeholder="&nbsp;"
                        />
                        <ErrorInput
                            errors={errors.zipcode?.message}
                            label={
                                value.data.house ? `Ваш почтовый индекс` : `Введите почтовый индекс`
                            }
                        />
                    </label>
                )}
                {value?.data.house ? (
                    <Button type="submit" title="Сохранить адрес" />
                ) : (
                    <Button disabled={true} title="Укажите дом" />
                )}
            </form>
        </>
    )
}

export default DeliveryAddressForm
