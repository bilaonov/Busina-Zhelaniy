import React, { useCallback, useState } from 'react'

import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '../utils/validation'

import Title from '../components/ui/Title/Title'
import Transition from '../components/ui/Transitions/Transition'
import Meta from '../components/core/Meta/Meta'
import Button from '../components/ui/Button/Button'

import styles from '../styles/auth.module.scss'

const Registration = () => {
    const [data, setData] = useState([])
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(registerSchema),
    })

    const onSubmit = useCallback((data: any) => {
        setData(data)
        reset()
    }, [])
    console.log({
        data: data,
        errors: errors,
    })

    return (
        <>
            <Meta title="Регистрация " />
            <div className={styles.authBlock}>
                <Transition>
                    <Title>
                        <p className={styles.authTitle}>Вступите в нашу семью</p>
                    </Title>
                    <div className={styles.authItems}>
                        <p className={styles.authText}>
                            Войдите, чтобы отслеживать доставку, просматривать историю заказов,
                            записываться на прием или добавлять в список желаний.
                        </p>
                        <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="inp" id="Input">
                                <input
                                    type="text"
                                    {...register('name')}
                                    id="inp"
                                    placeholder="&nbsp;"
                                />
                                <span id="Label">Введите имя</span>
                                <span id="FocusBg"></span>
                            </label>
                            <label htmlFor="inp" id="Input">
                                <input
                                    type="email"
                                    required={false}
                                    {...register('email')}
                                    id="inp"
                                    placeholder="&nbsp;"
                                />
                                {errors.email?.message ? (
                                    <span id="Label" style={{ color: 'red' }}>
                                        {errors.email.message.toString()}
                                    </span>
                                ) : (
                                    <span id="Label">Введите почту</span>
                                )}
                                <span id="FocusBg"></span>
                            </label>
                            <label htmlFor="inp" id="Input">
                                <input
                                    {...register('password')}
                                    type="password"
                                    id="inp"
                                    placeholder="&nbsp;"
                                />
                                {errors.password?.message ? (
                                    <span id="Label" style={{ color: 'red' }}>
                                        {errors.password.message.toString()}
                                    </span>
                                ) : (
                                    <span id="Label">Введите пароль</span>
                                )}

                                <span id="FocusBg"></span>
                            </label>
                            <label htmlFor="inp" id="Input">
                                <input
                                    type="password"
                                    {...register('password2')}
                                    id="inp"
                                    placeholder="&nbsp;"
                                />

                                {errors.password2?.message ? (
                                    <span id="Label" style={{ color: 'red' }}>
                                        {errors.password2.message.toString()}
                                    </span>
                                ) : (
                                    <span id="Label">Введите пароль еще раз</span>
                                )}
                                <span id="FocusBg"></span>
                            </label>

                            <Button title="Регистрация" className={styles.btnAdd} type="submit" />
                        </form>
                    </div>
                </Transition>
            </div>
        </>
    )
}

export default Registration
